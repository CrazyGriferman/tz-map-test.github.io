(function (t) {
  function e(e) {
    for (
      var a, r, o = e[0], p = e[1], s = e[2], d = 0, l = [];
      d < o.length;
      d++
    )
      (r = o[d]),
        Object.prototype.hasOwnProperty.call(c, r) && c[r] && l.push(c[r][0]),
        (c[r] = 0);
    for (a in p) Object.prototype.hasOwnProperty.call(p, a) && (t[a] = p[a]);
    u && u(e);
    while (l.length) l.shift()();
    return i.push.apply(i, s || []), n();
  }
  function n() {
    for (var t, e = 0; e < i.length; e++) {
      for (var n = i[e], a = !0, o = 1; o < n.length; o++) {
        var p = n[o];
        0 !== c[p] && (a = !1);
      }
      a && (i.splice(e--, 1), (t = r((r.s = n[0]))));
    }
    return t;
  }
  var a = {},
    c = { app: 0 },
    i = [];
  function r(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = t),
    (r.c = a),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          r.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    p = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var s = 0; s < o.length; s++) e(o[s]);
  var u = p;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("56d7");
  },
  1972: function (t, e, n) {
    "use strict";
    n("9867");
  },
  "2cd8": function (t) {
    t.exports = JSON.parse(
      '{"椒江区":[121.431049,28.67615],"黄岩区":[121.262138,28.64488],"路桥区":[121.37292,28.581799],"三门县":[121.376429,29.118955],"天台县":[121.031227,29.141126],"仙居县":[120.735074,28.849213],"温岭市":[121.373611,28.368781],"临海市":[121.131229,28.845441],"玉环市":[121.232337,28.12842]}'
    );
  },
  "3d33": function (t, e, n) {
    "use strict";
    n("5a48");
  },
  "40e9": function (t, e, n) {
    "use strict";
    n("bdd6");
  },
  "422e": function (t, e, n) {
    "use strict";
    n("cecf");
  },
  4244: function (t, e, n) {},
  "54ce": function (t, e, n) {
    "use strict";
    n("88a3");
  },
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var a = n("7a23");
    function c(t, e, n, c, i, r) {
      var o = Object(a["x"])("the-app-header"),
        p = Object(a["x"])("router-view");
      return (
        Object(a["p"])(),
        Object(a["d"])(
          a["a"],
          null,
          [
            Object(a["g"])(o, { appHeaderOption: i.appHeaderOption }, null, 8, [
              "appHeaderOption",
            ]),
            Object(a["g"])(p),
          ],
          64
        )
      );
    }
    var i = n("8107"),
      r = n.n(i),
      o = n("84e6"),
      p = n.n(o),
      s = { class: "index-title" },
      u = Object(a["g"])(
        "i",
        { class: "index-title-left" },
        [Object(a["g"])("img", { src: r.a, alt: "tag-left" })],
        -1
      ),
      d = Object(a["g"])(
        "div",
        { id: "title", style: { height: "100%", width: "100%" } },
        null,
        -1
      ),
      l = Object(a["g"])(
        "i",
        { class: "index-title-right" },
        [Object(a["g"])("img", { src: p.a, alt: "tag-right" })],
        -1
      );
    function m(t, e, n, c, i, r) {
      return Object(a["p"])(), Object(a["d"])("div", s, [u, d, l]);
    }
    var h = n("313e"),
      b = {
        name: "AppHeader",
        props: ["appHeaderOption"],
        mounted: function () {
          var t = h["a"](document.getElementById("title"));
          t.setOption(this.appHeaderOption),
            window.addEventListener("resize", function () {
              t.resize();
            });
        },
      };
    b.render = m;
    var g = b,
      f = {
        title: {
          text: "台州博士后",
          subtext: "",
          left: "center",
          textStyle: { color: "#A4C338", fontSize: 40 },
        },
      },
      j = {
        name: "App",
        components: { TheAppHeader: g },
        data: function () {
          return { backBtn: !0, appHeaderOption: f };
        },
      };
    n("40e9");
    j.render = c;
    var y = j,
      O = n("6c02"),
      v = { class: "city" };
    function w(t, e, n, c, i, r) {
      var o = Object(a["x"])("city-back-button"),
        p = Object(a["x"])("city-the-chart"),
        s = Object(a["x"])("the-map"),
        u = Object(a["x"])("city-station");
      return (
        Object(a["p"])(),
        Object(a["d"])("div", v, [
          Object(a["g"])(o, { id: "backButton" }),
          i.isChartRender
            ? (Object(a["p"])(),
              Object(a["d"])(
                p,
                {
                  key: 0,
                  onClickStation: r.changeInfo,
                  city: i.city,
                  chartOption: i.chartOption,
                },
                null,
                8,
                ["onClickStation", "city", "chartOption"]
              ))
            : Object(a["e"])("", !0),
          i.isMapRender
            ? (Object(a["p"])(),
              Object(a["d"])(
                s,
                {
                  key: 1,
                  mapOption: i.mapOption,
                  mapGeoJson: i.mapGeoJson,
                  mapPopUpData: i.mapPopUpData,
                  onSwtichToCity: r.swtichToCity,
                },
                null,
                8,
                ["mapOption", "mapGeoJson", "mapPopUpData", "onSwtichToCity"]
              ))
            : Object(a["e"])("", !0),
          Object(a["g"])(u, { id: "stationInfo", units: i.units }, null, 8, [
            "units",
          ]),
        ])
      );
    }
    var A = n("1da1"),
      x = (n("96cf"), n("d81d"), n("fb6a"), n("b0c0"), n("bc3a")),
      C = n.n(x),
      z = { id: "map" };
    function k(t, e, n, c, i, r) {
      return Object(a["p"])(), Object(a["d"])("div", z);
    }
    var T = {
      name: "TheMap",
      props: ["mapOption", "mapGeoJson"],
      mounted: function () {
        var t = this;
        console.log(this.mapOption), h["b"]("HZ", this.mapGeoJson);
        var e = h["a"](document.getElementById("map"));
        e.setOption(this.mapOption),
          e.off("click"),
          e.on("click", function (e) {
            t.$emit("swtichToCity", e);
          }),
          window.addEventListener("resize", function () {
            e.resize();
          });
      },
    };
    n("54ce");
    T.render = k;
    var S = T,
      B = Object(a["g"])("div", { id: "chart" }, null, -1);
    function E(t, e, n, c, i, r) {
      var o = Object(a["x"])("base-container");
      return (
        Object(a["p"])(),
        Object(a["d"])(
          o,
          {
            id: "stationChart",
            ititle: n.city + "博士后工作站数据",
            iwidth: "52",
            iheight: "40",
            hasLink: "no",
          },
          {
            default: Object(a["C"])(function () {
              return [B];
            }),
            _: 1,
          },
          8,
          ["ititle"]
        )
      );
    }
    var D = Object(a["D"])("data-v-742c6a70");
    Object(a["s"])("data-v-742c6a70");
    var N = Object(a["g"])("i", { class: "topL" }, null, -1),
      H = Object(a["g"])("i", { class: "topR" }, null, -1),
      F = Object(a["g"])("i", { class: "bottomL" }, null, -1),
      Z = Object(a["g"])("i", { class: "bottomR" }, null, -1),
      R = { class: "container-title" },
      I = Object(a["g"])("b", { class: "container-title-left" }, "[", -1),
      M = { key: 0, class: "container-title-content" },
      P = Object(a["g"])("b", { class: "container-title-right" }, "]", -1);
    Object(a["q"])();
    var L = D(function (t, e, n, c, i, r) {
        return (
          Object(a["p"])(),
          Object(a["d"])(
            "div",
            { class: "container", style: i.containerStyle },
            [
              N,
              H,
              F,
              Z,
              Object(a["g"])("div", R, [
                I,
                "no" === n.hasLink
                  ? (Object(a["p"])(),
                    Object(a["d"])("span", M, Object(a["z"])(n.ititle), 1))
                  : "yes" === n.hasLink
                  ? (Object(a["p"])(),
                    Object(a["d"])(
                      "a",
                      {
                        key: 1,
                        class: "container-title-content",
                        href: n.ilink,
                        title: n.itext,
                      },
                      Object(a["z"])(n.ititle),
                      9,
                      ["href", "title"]
                    ))
                  : Object(a["e"])("", !0),
                P,
              ]),
              Object(a["w"])(t.$slots, "default", {}, void 0, !0),
            ],
            4
          )
        );
      }),
      q = {
        name: "Container",
        props: {
          iwidth: { type: String, require: !0 },
          iheight: { type: String, require: !0 },
          ititle: { type: String, require: !1, default: null },
          hasLink: { type: String, require: !0, default: null },
          ilink: { type: String, require: !1, default: null },
          itext: { type: String, require: !1, default: null },
        },
        data: function () {
          return {
            containerStyle: {
              width: this.iwidth + "%",
              height: this.iheight + "%",
            },
          };
        },
      };
    n("1972");
    (q.render = L), (q.__scopeId = "data-v-742c6a70");
    var J = q,
      W = {
        name: "CityTheChart",
        components: { BaseContainer: J },
        props: ["chartOption", "city"],
        mounted: function () {
          var t = this,
            e = h["a"](document.getElementById("chart"));
          e.setOption(this.chartOption),
            e.on("click", function () {
              t.$emit("clickStation");
            }),
            window.addEventListener("resize", function () {
              e.resize();
            });
        },
      };
    n("d8e9");
    W.render = E;
    var X = W,
      U = n("7d3d"),
      Y = n("2cd8");
    function _(t, e, n, c, i, r) {
      var o = Object(a["x"])("base-button");
      return (
        Object(a["p"])(),
        Object(a["d"])(o, { iname: "返回", onClick: r.BackToMain }, null, 8, [
          "onClick",
        ])
      );
    }
    var G = Object(a["D"])("data-v-61681a06");
    Object(a["s"])("data-v-61681a06");
    var V = { class: "base-button" };
    Object(a["q"])();
    var Q = G(function (t, e, n, c, i, r) {
        return (
          Object(a["p"])(),
          Object(a["d"])("button", V, Object(a["z"])(n.iname), 1)
        );
      }),
      K = {
        name: "BaseButton",
        props: { iname: { type: String, require: !0 } },
        data: function () {
          return {};
        },
        methods: {
          toggleButton: function () {
            this.$emit("toggleButton");
          },
        },
      };
    n("422e");
    (K.render = Q), (K.__scopeId = "data-v-61681a06");
    var $ = K,
      tt = {
        name: "BackButton",
        components: { BaseButton: $ },
        data: function () {
          return { backBtn: !1 };
        },
        methods: {
          BackToMain: function () {
            this.$router.push({ path: "/" });
          },
        },
      };
    tt.render = _;
    var et = tt,
      nt =
        (n("99af"),
        function (t, e) {
          var n = [];
          for (var a in t) {
            var c = void 0;
            (c = e[a]), n.push({ name: a, value: t[a].concat(c) });
          }
          return n;
        }),
      at = function (t, e, n) {
        var a = {
          title: {
            text: t,
            subtext: "",
            left: "center",
            top: "5%",
            textStyle: {
              color: "#A4C338",
              fontSize: 18,
              fontFamily: "微软雅黑",
              fontWeight: "bold",
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (t) {
              var e = t.data.value[2],
                n = t.name;
              return n + " : " + e;
            },
          },
          geo: {
            map: "HZ",
            show: !0,
            roam: !1,
            left: "center",
            select: { label: { show: !0, color: "#fff" } },
            label: {
              normal: { show: !0, textStyle: { color: "#fff" } },
              emphasis: { show: !0, textStyle: { color: "#fff" } },
            },
            itemStyle: {
              normal: {
                areaColor: "#3a7fd5",
                borderColor: "#0a53e9",
                shadowColor: "#092f8f",
                shadowBlur: 20,
              },
              emphasis: { areaColor: "#0a2dae" },
            },
          },
          series: [
            { type: "map", map: e, geoIndex: 0, data: n },
            {
              name: "pin",
              type: "scatter",
              data: n,
              coordinateSystem: "geo",
              symbol: "pin",
              symbolSize: [50, 50],
              label: {
                normal: {
                  show: !0,
                  textStyle: { color: "#fff", fontSize: 9 },
                  formatter: function (t) {
                    var e = t.data.value[2];
                    return e;
                  },
                },
              },
              itemStyle: { normal: { color: "#ffcc00" } },
              showEffectOn: "render",
              rippleEffect: { brushType: "stroke" },
              hoverAnimation: !0,
              zlevel: 1,
            },
          ],
        };
        return a;
      },
      ct = Object(a["D"])("data-v-6257d2dc");
    Object(a["s"])("data-v-6257d2dc");
    var it = Object(a["g"])(
        "table",
        { id: "stationInfo-table-title", width: "100%" },
        [
          Object(a["g"])("tr", null, [
            Object(a["g"])("th", { width: "40%", align: "center" }, "单位名称"),
            Object(a["g"])("th", { width: "20%", align: "center" }, "站点类型"),
            Object(a["g"])("th", { width: "10%", align: "center" }, "总数"),
            Object(a["g"])("th", { width: "10%", align: "center" }, "已出站"),
            Object(a["g"])("th", { width: "10%", align: "center" }, "在站"),
            Object(a["g"])("th", { align: "center" }, "退站"),
          ]),
        ],
        -1
      ),
      rt = { id: "stationInfo-content" },
      ot = { id: "stationInfo-table", width: "100%" },
      pt = { width: "40%", align: "center" },
      st = { width: "20%", align: "center" },
      ut = { width: "10%", align: "center" },
      dt = { width: "10%", align: "center" },
      lt = { width: "10%", align: "center" },
      mt = { width: "10%", align: "center" };
    Object(a["q"])();
    var ht = ct(function (t, e, n, c, i, r) {
        var o = Object(a["x"])("base-container");
        return (
          Object(a["p"])(),
          Object(a["d"])(
            o,
            {
              ititle: "台州市博士后出入统计",
              iwidth: "52",
              iheight: "36",
              hasLink: "no",
            },
            {
              default: ct(function () {
                return [
                  it,
                  Object(a["g"])("div", rt, [
                    Object(a["g"])("table", ot, [
                      (Object(a["p"])(!0),
                      Object(a["d"])(
                        a["a"],
                        null,
                        Object(a["v"])(n.units, function (t, e) {
                          return (
                            Object(a["p"])(),
                            Object(a["d"])("tr", { key: e }, [
                              Object(a["g"])(
                                "td",
                                pt,
                                Object(a["z"])(t.name),
                                1
                              ),
                              Object(a["g"])(
                                "td",
                                st,
                                Object(a["z"])(
                                  1 === t.role
                                    ? "国家级工作站"
                                    : 2 === t.role
                                    ? "省级工作站"
                                    : "流动站"
                                ),
                                1
                              ),
                              Object(a["g"])(
                                "td",
                                ut,
                                Object(a["z"])(t.total),
                                1
                              ),
                              Object(a["g"])(
                                "td",
                                dt,
                                Object(a["z"])(t.total_in),
                                1
                              ),
                              Object(a["g"])(
                                "td",
                                lt,
                                Object(a["z"])(t.total_out),
                                1
                              ),
                              Object(a["g"])(
                                "td",
                                mt,
                                Object(a["z"])(t.total_exit),
                                1
                              ),
                            ])
                          );
                        }),
                        128
                      )),
                    ]),
                  ]),
                ];
              }),
              _: 1,
            }
          )
        );
      }),
      bt = {
        name: "stationInfo",
        components: { BaseContainer: J },
        props: ["units"],
      };
    n("e1e2");
    (bt.render = ht), (bt.__scopeId = "data-v-6257d2dc");
    var gt = bt,
      ft = function (t, e, n, a, c) {
        var i = {
          tooltip: {},
          grid: { right: "10%", top: "15%", height: "70%", width: "80%" },
          color: t,
          legend: {
            data: e,
            right: "5%",
            top: "5%",
            textStyle: { color: "#fff" },
          },
          dataset: { dimensions: n, source: a },
          yAxis: {
            axisLine: {
              lineStyle: { type: "solid", color: "#fff", width: 0.5 },
            },
          },
          xAxis: {
            type: "category",
            axisLine: {
              lineStyle: { type: "solid", color: "#fff", width: 0.5 },
            },
            axisLabel: {
              color: "#fff",
              interval: 0,
              align: "center",
              fontSize: 8,
              width: 40,
              overflow: "break",
            },
          },
          series: c,
        };
        return i;
      },
      jt = n("8fef"),
      yt = {
        name: "City",
        components: {
          CityTheChart: X,
          TheMap: S,
          CityBackButton: et,
          CityStation: gt,
        },
        data: function () {
          return {
            chartOption: [],
            city: "",
            chartSetting: {
              lengendData: [],
              dimensionData: [],
              barSeries: {},
              barColor: [],
            },
            chartData: [],
            isMapRender: !1,
            isChartRender: !1,
            map: {},
            mapPopUpData: [],
            mapGeoJson: U,
            mapOption: {},
            units: {},
            cityCharts: {},
          };
        },
        watch: {
          $route: function () {
            var t = this;
            return Object(A["a"])(
              regeneratorRuntime.mark(function e() {
                var n;
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t.isChartRender = !1),
                          (t.city = t.$route.query.city),
                          (n = jt),
                          (t.map = n.data.maps),
                          (e.next = 6),
                          C.a
                            .get("./maps1/".concat(t.city, ".json"))
                            .then(function (e) {
                              (t.cityCharts = e.data.data.charts),
                                (t.units = e.data.data.units),
                                (t.chartData = t.getChartData(t.cityCharts)),
                                (t.chartSetting = t.initialChartSetting()),
                                (t.chartOption = ft(
                                  t.chartSetting["barColor"],
                                  t.chartSetting["legendData"],
                                  t.chartSetting["dimensionData"],
                                  t.chartData,
                                  t.chartSetting["barSeries"]
                                )),
                                (t.isChartRender = !0);
                            })
                        );
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
        },
        created: function () {
          var t = this;
          return Object(A["a"])(
            regeneratorRuntime.mark(function e() {
              var n;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = jt),
                        (t.map = n.data.maps),
                        (t.city = t.$route.query.city),
                        console.log(t.city),
                        (e.next = 6),
                        C.a
                          .get("./maps1/".concat(t.city, ".json"))
                          .then(function (e) {
                            (t.cityCharts = e.data.data.charts),
                              (t.units = e.data.data.units),
                              (t.chartData = t.getChartData(t.cityCharts)),
                              (t.chartSetting = t.initialChartSetting()),
                              (t.chartOption = ft(
                                t.chartSetting["barColor"],
                                t.chartSetting["legendData"],
                                t.chartSetting["dimensionData"],
                                t.chartData,
                                t.chartSetting["barSeries"]
                              )),
                              (t.mapPopUpData = nt(Y, t.map)),
                              (t.mapOption = at(
                                "台州博士后在站人数统计",
                                "HZ",
                                t.mapPopUpData
                              )),
                              (t.isMapRender = !0),
                              (t.isChartRender = !0);
                          })
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
        methods: {
          initialChartSetting: function () {
            var t = {
              dimensionData: [
                "name",
                "国家级博士后科研工作站",
                "浙江省级博士后工作站",
              ],
              barSeries: [{ type: "bar" }, { type: "bar" }],
              legendData: ["国家级博士后科研工作站", "浙江省级博士后工作站"],
              barColor: ["#91cc75", "#ED7D31", "#C00571"],
            };
            return t;
          },
          getShortCityNameToGetData: function (t) {
            if (t) {
              var e = "";
              return (
                (e =
                  "省直部属" === t
                    ? "省直部属"
                    : "流动站" === t
                    ? "流动站"
                    : t.slice(0, -1)),
                e
              );
            }
          },
          getChartData: function (t) {
            var e = [];
            for (var n in t) {
              var a = n,
                c = {};
              c.name = this.city;
              var i = t[n];
              "nation" == a
                ? (c["国家级博士后科研工作站"] = i)
                : (c["浙江省级博士后工作站"] = i),
                e.push(c);
            }
            return e;
          },
          swtichToCity: function (t) {
            var e = t.data["name"];
            this.$router.push({ path: "/city", query: { city: e } });
          },
          changeInfo: function () {
            console.log(1);
          },
        },
      };
    n("f622");
    yt.render = w;
    var Ot = yt,
      vt = Object(a["D"])("data-v-89aeaf12");
    Object(a["s"])("data-v-89aeaf12");
    var wt = { key: 0, class: "main" };
    Object(a["q"])();
    var At = vt(function (t, e, n, c, i, r) {
        var o = Object(a["x"])("main-login-button"),
          p = Object(a["x"])("main-map-chart"),
          s = Object(a["x"])("main-entity-chart"),
          u = Object(a["x"])("main-upland-statistic"),
          d = Object(a["x"])("main-recruitment"),
          l = Object(a["x"])("the-map");
        return i.isRender
          ? (Object(a["p"])(),
            Object(a["d"])("div", wt, [
              Object(a["g"])(o, { id: "loginButton" }),
              Object(a["g"])(
                p,
                { id: "activityNotice", chartOption: i.chartOption },
                null,
                8,
                ["chartOption"]
              ),
              Object(a["g"])(
                s,
                { id: "entityStatistic", countByType: i.countByType },
                null,
                8,
                ["countByType"]
              ),
              Object(a["g"])(
                u,
                { id: "upland", countByTopic: i.countByTopic },
                null,
                8,
                ["countByTopic"]
              ),
              Object(a["g"])(
                d,
                { id: "recruitment", infos: i.infos },
                null,
                8,
                ["infos"]
              ),
              Object(a["g"])(
                l,
                {
                  mapOption: i.mapOption,
                  mapGeoJson: i.mapGeoJson,
                  mapPopUpData: i.mapPopUpData,
                  onSwtichToCity: r.switchToCity,
                },
                null,
                8,
                ["mapOption", "mapGeoJson", "mapPopUpData", "onSwtichToCity"]
              ),
            ]))
          : Object(a["e"])("", !0);
      }),
      xt = Object(a["D"])("data-v-0c634ae0");
    Object(a["s"])("data-v-0c634ae0");
    var Ct = Object(a["g"])("div", { id: "chart" }, null, -1);
    Object(a["q"])();
    var zt = xt(function (t, e, n, c, i, r) {
        var o = Object(a["x"])("base-container");
        return (
          Object(a["p"])(),
          Object(a["d"])(
            o,
            {
              ititle: "浙江省博士后工作站数据",
              iwidth: "31",
              iheight: "40",
              hasLink: "no",
            },
            {
              default: xt(function () {
                return [Ct];
              }),
              _: 1,
            }
          )
        );
      }),
      kt = {
        name: "ActivityNotice",
        props: ["chartOption"],
        components: { BaseContainer: J },
        mounted: function () {
          var t = h["a"](document.getElementById("chart"));
          t.setOption(this.chartOption),
            window.addEventListener("resize", function () {
              t.resize();
            });
        },
      };
    n("c14d");
    (kt.render = zt), (kt.__scopeId = "data-v-0c634ae0");
    var Tt = kt,
      St = Object(a["D"])("data-v-332fb9b8");
    Object(a["s"])("data-v-332fb9b8");
    var Bt = Object(a["g"])(
      "div",
      { id: "entityChart", style: { height: "80%", width: "100%" } },
      null,
      -1
    );
    Object(a["q"])();
    var Et = St(function (t, e, n, c, i, r) {
        var o = Object(a["x"])("base-container");
        return (
          Object(a["p"])(),
          Object(a["d"])(
            o,
            {
              ititle: "浙江省博士后载体",
              iwidth: "20",
              iheight: "19",
              hasLink: "no",
            },
            {
              default: St(function () {
                return [Bt];
              }),
              _: 1,
            }
          )
        );
      }),
      Dt = {
        name: "DataStatistic",
        props: ["countByType"],
        components: { BaseContainer: J },
        data: function () {
          return {
            option: {
              tooltip: { trigger: "item" },
              legend: {
                orient: "vertical",
                right: "10%",
                top: "15%",
                textStyle: { color: "#fff" },
              },
              series: [
                {
                  name: "载体统计",
                  type: "pie",
                  radius: "90%",
                  top: "10%",
                  right: "40%",
                  data: [
                    { value: 0, name: "国家级工作站" },
                    { value: 0, name: "浙江省级工作站" },
                    { value: 0, name: "流动站" },
                  ],
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                  },
                  itemStyle: {
                    normal: {
                      label: { show: !0, position: "inner", formatter: "{c} " },
                    },
                  },
                },
              ],
            },
          };
        },
        mounted: function () {
          var t = h["a"](document.getElementById("entityChart")),
            e = this.option.series[0].data;
          console.log(e),
            (e[0].value = this.countByType["nation"]),
            (e[1].value = this.countByType["province"]),
            (e[2].value = this.countByType["3"] ? this.countByType["3"] : 0),
            t.setOption(this.option),
            t.on("click", function (t) {
              "流动站" == t.name &&
                window.open("http://zjbsh.zjhwrc.com/posts/153");
            }),
            window.addEventListener("resize", function () {
              t.resize();
            });
        },
      };
    n("b4f2");
    (Dt.render = Et), (Dt.__scopeId = "data-v-332fb9b8");
    var Nt = Dt,
      Ht = Object(a["D"])("data-v-2465790f");
    Object(a["s"])("data-v-2465790f");
    var Ft = { id: "platform-content" },
      Zt = { id: "platform-table" },
      Rt = { width: "21%", align: "center" },
      It = { width: "42%", align: "center" },
      Mt = Object(a["f"])(" 在站博士后"),
      Pt = Object(a["f"])(" 人 "),
      Lt = { width: "35%", align: "center" },
      qt = Object(a["f"])(" 工作站"),
      Jt = Object(a["f"])(" 家 ");
    Object(a["q"])();
    var Wt = Ht(function (t, e, n, c, i, r) {
        var o = Object(a["x"])("base-container");
        return (
          Object(a["p"])(),
          Object(a["d"])(
            o,
            {
              ititle: "浙江省“三大高地”平台",
              iwidth: "20",
              iheight: "18",
              hasLink: "no",
            },
            {
              default: Ht(function () {
                return [
                  Object(a["g"])("div", Ft, [
                    Object(a["g"])("table", Zt, [
                      Object(a["g"])("tbody", null, [
                        (Object(a["p"])(!0),
                        Object(a["d"])(
                          a["a"],
                          null,
                          Object(a["v"])(n.countByTopic, function (t, e, n) {
                            return (
                              Object(a["p"])(),
                              Object(a["d"])("tr", { key: n }, [
                                Object(a["g"])("td", Rt, Object(a["z"])(e), 1),
                                Object(a["g"])("td", It, [
                                  Mt,
                                  Object(a["g"])(
                                    "em",
                                    null,
                                    Object(a["z"])(t["在线博士后"]),
                                    1
                                  ),
                                  Pt,
                                ]),
                                Object(a["g"])("td", Lt, [
                                  qt,
                                  Object(a["g"])(
                                    "em",
                                    null,
                                    Object(a["z"])(t["相关平台"]),
                                    1
                                  ),
                                  Jt,
                                ]),
                              ])
                            );
                          }),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                ];
              }),
              _: 1,
            }
          )
        );
      }),
      Xt = {
        name: "Recommendation",
        components: { BaseContainer: J },
        props: ["countByTopic"],
      };
    n("b38c");
    (Xt.render = Wt), (Xt.__scopeId = "data-v-2465790f");
    var Ut = Xt,
      Yt = Object(a["D"])("data-v-8fed590e");
    Object(a["s"])("data-v-8fed590e");
    var _t = Object(a["g"])(
        "table",
        { id: "scroll-title" },
        [
          Object(a["g"])("tr", null, [
            Object(a["g"])("th", { width: "40%", align: "center" }, "招收单位"),
            Object(a["g"])(
              "th",
              { width: "60%", align: "center" },
              "招收博士后项目"
            ),
          ]),
        ],
        -1
      ),
      Gt = { id: "scroll-content" },
      Vt = { id: "scroll-table" },
      Qt = { width: "40%", align: "center" },
      Kt = { class: "contact" },
      $t = Object(a["g"])("br", null, null, -1),
      te = Object(a["g"])("br", null, null, -1),
      ee = { width: "60%", align: "center" },
      ne = Object(a["g"])("table", null, null, -1);
    Object(a["q"])();
    var ae = Yt(function (t, e, n, c, i, r) {
        var o = Object(a["x"])("base-container");
        return (
          Object(a["p"])(),
          Object(a["d"])(
            o,
            {
              ititle: "博士后招聘信息",
              iwidth: "52",
              iheight: "35",
              hasLink: "no",
            },
            {
              default: Yt(function () {
                return [
                  _t,
                  Object(a["g"])("div", Gt, [
                    Object(a["g"])("div", Vt, [
                      Object(a["g"])("table", null, [
                        (Object(a["p"])(!0),
                        Object(a["d"])(
                          a["a"],
                          null,
                          Object(a["v"])(n.infos, function (t, e) {
                            return (
                              Object(a["p"])(),
                              Object(a["d"])("tr", { key: e }, [
                                Object(a["g"])("td", Qt, [
                                  Object(a["g"])("div", null, [
                                    Object(a["g"])(
                                      "div",
                                      { innerHTML: t.name },
                                      null,
                                      8,
                                      ["innerHTML"]
                                    ),
                                    Object(a["g"])("aside", Kt, [
                                      Object(a["f"])(
                                        Object(a["z"])(t.contact) + " ",
                                        1
                                      ),
                                      $t,
                                      Object(a["f"])(
                                        " " + Object(a["z"])(t.phone) + " ",
                                        1
                                      ),
                                      te,
                                      Object(a["f"])(
                                        " " + Object(a["z"])(t.email),
                                        1
                                      ),
                                    ]),
                                  ]),
                                ]),
                                Object(a["g"])(
                                  "td",
                                  ee,
                                  Object(a["z"])(t.unit_name),
                                  1
                                ),
                              ])
                            );
                          }),
                          128
                        )),
                      ]),
                      ne,
                    ]),
                  ]),
                ];
              }),
              _: 1,
            }
          )
        );
      }),
      ce = {
        name: "Recruitment",
        components: { BaseContainer: J },
        props: ["infos"],
        mounted: function () {
          var t = document.getElementById("scroll-table"),
            e = document.getElementById("scroll-content");
          setInterval(function () {
            e.scrollTop >= t.offsetHeight / 2
              ? (e.scrollTop = 0)
              : e.scrollTop++;
          }, 100);
        },
      };
    n("3d33");
    (ce.render = ae), (ce.__scopeId = "data-v-8fed590e");
    var ie = ce;
    function re(t, e, n, c, i, r) {
      var o = Object(a["x"])("base-button");
      return (
        Object(a["p"])(),
        Object(a["d"])(
          o,
          { iname: "办公平台登录", onClick: r.SwitchToTaiZhouWebsite },
          null,
          8,
          ["onClick"]
        )
      );
    }
    var oe = {
      name: "BackButton",
      components: { BaseButton: $ },
      methods: {
        SwitchToTaiZhouWebsite: function () {
          this.$router.push({ path: "/home" });
        },
      },
    };
    oe.render = re;
    var pe = oe,
      se = {
        name: "Home",
        components: {
          MainMapChart: Tt,
          MainEntityChart: Nt,
          MainUplandStatistic: Ut,
          MainRecruitment: ie,
          MainLoginButton: pe,
          TheMap: S,
        },
        data: function () {
          return {
            isRender: !1,
            map: {},
            mapPopUpData: [],
            mapGeoJson: U,
            mapOption: {},
            chartOption: {},
            infos: [],
            countByTopic: [],
            countByType: [],
            cityCharts: {},
          };
        },
        created: function () {
          var t = this;
          return Object(A["a"])(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        C.a
                          .get("./maps1/api.json")
                          .then(function (e) {
                            console.log(e),
                              console.log(U),
                              (t.cityCharts = e.data.data.charts),
                              (t.infos = e.data.data.infos),
                              (t.countByTopic = e.data.data.countByTopic),
                              console.log(t.countByTopic),
                              (t.countByType = e.data.data.countByType),
                              (t.map = e.data.data.maps),
                              (t.chartData = t.getChartData(t.cityCharts)),
                              (t.chartSetting = t.initialChartSetting()),
                              (t.chartOption = ft(
                                t.chartSetting["barColor"],
                                t.chartSetting["legendData"],
                                t.chartSetting["dimensionData"],
                                t.chartData,
                                t.chartSetting["barSeries"]
                              )),
                              (t.mapPopUpData = nt(Y, t.map)),
                              (t.mapOption = at(
                                "台州博士后在站人数统计",
                                "HZ",
                                t.mapPopUpData
                              )),
                              (t.isRender = !0);
                          })
                          .catch(function (t) {
                            return console.log(t);
                          })
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
        methods: {
          initialChartSetting: function () {
            var t = {
              dimensionData: [
                "name",
                "国家级博士后科研工作站",
                "浙江省级博士后工作站",
              ],
              barSeries: [{ type: "bar" }, { type: "bar" }],
              legendData: ["国家级博士后科研工作站", "浙江省级博士后工作站"],
              barColor: ["#91cc75", "#ED7D31", "#C00571"],
            };
            return t;
          },
          getChartData: function (t) {
            var e = [];
            for (var n in t) {
              var a = JSON.parse(n),
                c = {};
              c.name = a[1];
              var i = t[n];
              "nation" == a[0]
                ? (c["国家级博士后科研工作站"] = i)
                : "province" == a[0] && (c["浙江省级博士后工作站"] = i),
                e.push(c);
            }
            return e;
          },
          switchToCity: function (t) {
            var e = t.data["name"];
            this.$router.push({ path: "/city", query: { city: e } });
          },
        },
      };
    n("dcb6");
    (se.render = At), (se.__scopeId = "data-v-89aeaf12");
    var ue = se,
      de = [
        { path: "/", name: "Main", component: ue },
        { path: "/city", name: "City", component: Ot },
        {
          path: "/home",
          name: "home",
          component: Object(a["g"])("div", null, [Object(a["f"])("1")]),
        },
      ],
      le = Object(O["a"])({ history: Object(O["b"])("/"), routes: de }),
      me = le;
    Object(a["c"])(y).use(me).mount("#app");
  },
  "5a48": function (t, e, n) {},
  "5b48": function (t, e, n) {},
  6338: function (t, e, n) {},
  "6b12": function (t, e, n) {},
  "767f": function (t, e, n) {},
  "7d3d": function (t) {
    t.exports = JSON.parse(
      '{"name":"台州市","type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":331002,"name":"椒江区","center":[121.431049,28.67615],"centroid":[121.452074,28.660696],"childrenNum":0,"level":"district","parent":{"adcode":331000},"subFeatureIndex":0,"acroutes":[100000,330000,331000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.587419,28.672207],[121.540858,28.655592],[121.557112,28.644993],[121.568864,28.626554],[121.586194,28.586556],[121.534021,28.583978],[121.527434,28.584151],[121.516724,28.582503],[121.518247,28.57587],[121.512818,28.574341],[121.509524,28.580735],[121.505866,28.580535],[121.467051,28.57486],[121.453296,28.570593],[121.445831,28.570646],[121.439623,28.57256],[121.437604,28.580456],[121.438697,28.582888],[121.438713,28.588231],[121.435072,28.588842],[121.433847,28.587992],[121.425753,28.587061],[121.424213,28.586291],[121.411534,28.585068],[121.40882,28.578063],[121.406486,28.577465],[121.404417,28.580389],[121.404417,28.583313],[121.402497,28.583965],[121.395942,28.582729],[121.395445,28.588896],[121.394518,28.590105],[121.391092,28.59073],[121.387252,28.592962],[121.385713,28.596391],[121.380614,28.59784],[121.374341,28.598159],[121.368813,28.600644],[121.362821,28.604497],[121.35898,28.606278],[121.359014,28.610025],[121.360685,28.611859],[121.360901,28.614463],[121.357242,28.621479],[121.35226,28.622595],[121.349595,28.624069],[121.353535,28.627125],[121.354346,28.629649],[121.353651,28.631921],[121.351598,28.63313],[121.349446,28.640038],[121.345788,28.641353],[121.347063,28.64231],[121.352707,28.650373],[121.356746,28.651953],[121.357723,28.657492],[121.363565,28.660254],[121.365221,28.665779],[121.363383,28.667453],[121.359345,28.674969],[121.360007,28.67975],[121.359146,28.682113],[121.359295,28.686163],[121.357176,28.690253],[121.357011,28.695723],[121.350886,28.695471],[121.349711,28.699626],[121.350439,28.702587],[121.352244,28.705269],[121.353005,28.712252],[121.354842,28.719752],[121.354975,28.725512],[121.354048,28.727795],[121.349463,28.730675],[121.345706,28.738572],[121.346136,28.740523],[121.349976,28.742408],[121.35188,28.745035],[121.355571,28.747358],[121.359692,28.748141],[121.36585,28.750556],[121.368829,28.747411],[121.372454,28.745977],[121.378165,28.745407],[121.380813,28.74753],[121.381508,28.750224],[121.380134,28.751498],[121.380929,28.753939],[121.378595,28.755757],[121.374755,28.755691],[121.375731,28.761092],[121.374142,28.765006],[121.375649,28.770246],[121.373629,28.772104],[121.375947,28.773895],[121.379323,28.773802],[121.381492,28.77554],[121.387268,28.775872],[121.391009,28.772966],[121.398358,28.770167],[121.399616,28.765735],[121.401404,28.762936],[121.404086,28.761211],[121.409895,28.759048],[121.412593,28.75654],[121.415838,28.75658],[121.417013,28.757761],[121.425306,28.757429],[121.432208,28.760906],[121.434227,28.759446],[121.434856,28.754669],[121.438332,28.750755],[121.438746,28.747729],[121.440054,28.746177],[121.44732,28.74818],[121.450283,28.750503],[121.453627,28.74757],[121.454173,28.743761],[121.459172,28.743045],[121.461704,28.739315],[121.460512,28.735812],[121.461688,28.731259],[121.472778,28.726667],[121.476237,28.72684],[121.484249,28.731976],[121.486202,28.731578],[121.490307,28.728897],[121.491929,28.729547],[121.496365,28.727623],[121.502936,28.726149],[121.505816,28.728738],[121.509127,28.725526],[121.510418,28.722021],[121.514854,28.717906],[121.517287,28.717893],[121.524206,28.705348],[121.529056,28.697993],[121.531605,28.699215],[121.533773,28.697263],[121.532813,28.699812],[121.535908,28.701047],[121.538093,28.700808],[121.537613,28.698378],[121.538623,28.69652],[121.53043,28.693121],[121.531108,28.691249],[121.533359,28.691262],[121.537348,28.682459],[121.541338,28.678342],[121.546651,28.675275],[121.55261,28.672539],[121.587419,28.672207]]],[[[121.889565,28.471529],[121.876108,28.47254],[121.874718,28.473857],[121.874122,28.47701],[121.876986,28.480097],[121.88311,28.484075],[121.88354,28.486443],[121.881008,28.488877],[121.881339,28.49219],[121.883656,28.495449],[121.880412,28.496007],[121.874006,28.493852],[121.871308,28.494305],[121.870381,28.500051],[121.873013,28.501647],[121.880081,28.501913],[121.885808,28.505558],[121.886917,28.507766],[121.886189,28.5102],[121.887298,28.511357],[121.897014,28.514216],[121.899166,28.511849],[121.896021,28.508484],[121.89612,28.506649],[121.898719,28.504108],[121.899431,28.50069],[121.903023,28.499253],[121.9087,28.500636],[121.912573,28.499413],[121.917042,28.499479],[121.918929,28.497377],[121.913782,28.491245],[121.91019,28.485112],[121.905721,28.484447],[121.90539,28.4818],[121.908319,28.479086],[121.908601,28.477489],[121.906614,28.475773],[121.901698,28.476212],[121.892048,28.471861],[121.889565,28.471529]]],[[[121.869554,28.423938],[121.867402,28.426361],[121.869206,28.431193],[121.871259,28.433123],[121.875546,28.432697],[121.879402,28.435864],[121.880015,28.442013],[121.881207,28.443597],[121.887645,28.447097],[121.888241,28.450424],[121.889731,28.451209],[121.895392,28.44936],[121.898984,28.449533],[121.899083,28.45274],[121.901136,28.453099],[121.910802,28.452394],[121.915685,28.453711],[121.919939,28.453445],[121.920551,28.451116],[121.91744,28.446072],[121.910852,28.440083],[121.902592,28.438194],[121.897428,28.434973],[121.893439,28.430274],[121.890194,28.429915],[121.887116,28.433708],[121.884749,28.433442],[121.881653,28.429023],[121.875645,28.427892],[121.871176,28.424377],[121.869554,28.423938]]],[[[121.85123,28.423499],[121.850502,28.425336],[121.853945,28.428677],[121.8556,28.431845],[121.856891,28.430168],[121.86093,28.429968],[121.86088,28.426747],[121.855534,28.426161],[121.85123,28.423499]]],[[[121.861327,28.611009],[121.867832,28.612337],[121.869819,28.614011],[121.872914,28.614384],[121.873278,28.613121],[121.869107,28.610543],[121.861708,28.609946],[121.861327,28.611009]]],[[[121.916413,28.455854],[121.915271,28.457291],[121.916331,28.459074],[121.915718,28.462214],[121.91888,28.463385],[121.921429,28.462002],[121.918664,28.459061],[121.921031,28.45604],[121.927719,28.454523],[121.925517,28.452314],[121.922654,28.452327],[121.916413,28.455854]]],[[[121.817281,28.610437],[121.821502,28.609892],[121.823257,28.607261],[121.822413,28.604378],[121.819599,28.602876],[121.81556,28.603487],[121.80874,28.599408],[121.806258,28.598664],[121.803824,28.599846],[121.806059,28.603448],[121.807979,28.604737],[121.812316,28.605441],[121.814517,28.607859],[121.81503,28.610357],[121.817281,28.610437]]],[[[121.923183,28.535587],[121.921065,28.536505],[121.924574,28.53943],[121.926229,28.536997],[121.923183,28.535587]]],[[[121.911464,28.393864],[121.914278,28.396247],[121.917721,28.395288],[121.917887,28.393744],[121.915189,28.3918],[121.914179,28.388418],[121.911564,28.387579],[121.910653,28.389843],[121.911464,28.393864]]],[[[121.81359,28.601361],[121.816288,28.602371],[121.820559,28.601348],[121.820261,28.599461],[121.815709,28.598889],[121.81167,28.595886],[121.809866,28.596019],[121.809502,28.598637],[121.81359,28.601361]]],[[[121.895375,28.409175],[121.896733,28.408456],[121.894779,28.406206],[121.894879,28.403756],[121.89127,28.402638],[121.890476,28.403397],[121.891767,28.407271],[121.895375,28.409175]]],[[[121.901947,28.395888],[121.902658,28.397619],[121.907028,28.398564],[121.901947,28.395888]]],[[[121.940116,28.441521],[121.939587,28.449932],[121.940265,28.45097],[121.943559,28.450744],[121.944635,28.448601],[121.94399,28.441561],[121.945198,28.436636],[121.944072,28.435239],[121.940812,28.436729],[121.940116,28.441521]]],[[[121.913517,28.413262],[121.915933,28.41478],[121.914113,28.40992],[121.912673,28.411039],[121.913517,28.413262]]]]}},{"type":"Feature","properties":{"adcode":331003,"name":"黄岩区","center":[121.262138,28.64488],"centroid":[121.081113,28.598872],"childrenNum":0,"level":"district","parent":{"adcode":331000},"subFeatureIndex":1,"acroutes":[100000,330000,331000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.798734,28.588776],[120.797608,28.593175],[120.801332,28.595766],[120.803699,28.596444],[120.808913,28.596165],[120.810602,28.601162],[120.809244,28.608564],[120.811413,28.613666],[120.81522,28.615526],[120.822718,28.617054],[120.83447,28.617174],[120.838608,28.616855],[120.845378,28.617599],[120.849616,28.619007],[120.857428,28.619765],[120.863503,28.621957],[120.865771,28.624136],[120.868783,28.629716],[120.87312,28.628919],[120.878433,28.626767],[120.887471,28.626527],[120.891692,28.625677],[120.897998,28.625943],[120.904784,28.623485],[120.912697,28.62302],[120.91455,28.624309],[120.914302,28.626939],[120.912117,28.628733],[120.911141,28.632267],[120.904884,28.640184],[120.892155,28.646853],[120.889308,28.648659],[120.889523,28.651462],[120.891327,28.655088],[120.890599,28.656137],[120.882406,28.65967],[120.87936,28.660533],[120.877473,28.663362],[120.884011,28.666988],[120.888431,28.664385],[120.890864,28.664013],[120.893612,28.666523],[120.895681,28.666417],[120.89679,28.664704],[120.895797,28.660998],[120.896541,28.659404],[120.903775,28.661011],[120.904304,28.661941],[120.904304,28.670281],[120.904702,28.672778],[120.91119,28.679896],[120.911604,28.6838],[120.909237,28.691076],[120.909485,28.69871],[120.912746,28.704844],[120.920129,28.711774],[120.922777,28.715809],[120.925988,28.722871],[120.93155,28.722128],[120.936797,28.723973],[120.940289,28.720853],[120.944047,28.719314],[120.950254,28.721145],[120.954276,28.719526],[120.957106,28.713101],[120.960251,28.709942],[120.963131,28.705986],[120.970994,28.703543],[120.973361,28.702308],[120.979601,28.700874],[120.983243,28.69806],[120.991916,28.692802],[120.9942,28.688567],[120.998355,28.687491],[121.003983,28.684158],[121.009362,28.679205],[121.013881,28.678077],[121.020071,28.679444],[121.024127,28.682591],[121.029341,28.682286],[121.03184,28.677957],[121.034472,28.675553],[121.033446,28.669777],[121.03573,28.666935],[121.037782,28.66635],[121.04245,28.669418],[121.045248,28.668648],[121.047813,28.665022],[121.050644,28.665261],[121.057066,28.664425],[121.058456,28.670109],[121.063174,28.673947],[121.066286,28.672937],[121.06948,28.669817],[121.072493,28.670069],[121.077425,28.67311],[121.084079,28.674557],[121.08739,28.679006],[121.088731,28.681927],[121.093613,28.684596],[121.099109,28.681556],[121.104306,28.682472],[121.114089,28.689602],[121.126073,28.696945],[121.129764,28.696573],[121.135176,28.691952],[121.139248,28.695962],[121.142344,28.703397],[121.14534,28.704764],[121.150256,28.704817],[121.157952,28.707884],[121.163133,28.706503],[121.16651,28.709822],[121.169738,28.711548],[121.170317,28.71565],[121.171641,28.717137],[121.192514,28.722499],[121.200442,28.725725],[121.204018,28.724026],[121.203306,28.718982],[121.205408,28.716858],[121.210175,28.720017],[121.211714,28.722499],[121.21433,28.723827],[121.218253,28.722818],[121.223351,28.717814],[121.230617,28.716473],[121.232736,28.715464],[121.234341,28.711136],[121.234821,28.706822],[121.237586,28.700755],[121.244306,28.700025],[121.253492,28.694382],[121.257829,28.697794],[121.267016,28.69948],[121.271419,28.703463],[121.279993,28.70645],[121.281085,28.708654],[121.286845,28.710459],[121.290189,28.708242],[121.295188,28.70657],[121.294178,28.701817],[121.295055,28.696586],[121.296529,28.692948],[121.300898,28.691381],[121.304887,28.692815],[121.307387,28.692205],[121.311475,28.689217],[121.321026,28.683069],[121.322003,28.678873],[121.32293,28.678661],[121.325462,28.682273],[121.327283,28.689376],[121.329981,28.692019],[121.335509,28.693599],[121.348652,28.695444],[121.350886,28.695471],[121.357011,28.695723],[121.357176,28.690253],[121.359295,28.686163],[121.359146,28.682113],[121.360007,28.67975],[121.359345,28.674969],[121.363383,28.667453],[121.365221,28.665779],[121.363565,28.660254],[121.357723,28.657492],[121.356746,28.651953],[121.352707,28.650373],[121.347063,28.64231],[121.345788,28.641353],[121.344563,28.641845],[121.341915,28.639467],[121.334599,28.639334],[121.332166,28.640078],[121.326737,28.639028],[121.321787,28.633941],[121.316275,28.630021],[121.311293,28.627763],[121.308645,28.627338],[121.301726,28.629397],[121.297075,28.634884],[121.294195,28.63418],[121.293069,28.632625],[121.291811,28.624149],[121.294757,28.62403],[121.298929,28.620894],[121.299673,28.616749],[121.296479,28.614729],[121.292109,28.60871],[121.293384,28.606331],[121.293483,28.602345],[121.296148,28.599248],[121.299889,28.596843],[121.305202,28.596737],[121.306576,28.595288],[121.304556,28.592564],[121.303927,28.586915],[121.30257,28.585786],[121.297489,28.584523],[121.297174,28.580828],[121.300071,28.579725],[121.301693,28.576096],[121.30507,28.574727],[121.306741,28.572959],[121.305881,28.565887],[121.306526,28.564226],[121.310581,28.560038],[121.311591,28.557033],[121.309754,28.55117],[121.309886,28.549203],[121.314587,28.549189],[121.317864,28.546131],[121.317269,28.542847],[121.325479,28.536638],[121.326422,28.533087],[121.325793,28.53076],[121.323426,28.528659],[121.319536,28.530042],[121.315166,28.52943],[121.312667,28.527835],[121.309175,28.528672],[121.303232,28.52596],[121.299491,28.525867],[121.294906,28.52721],[121.287276,28.527622],[121.283568,28.526345],[121.282641,28.52334],[121.276798,28.518858],[121.271915,28.517249],[121.268241,28.515214],[121.266519,28.513166],[121.262944,28.511171],[121.253972,28.510266],[121.251125,28.506728],[121.249073,28.506555],[121.245796,28.508098],[121.239473,28.510014],[121.236096,28.508657],[121.234192,28.506077],[121.232272,28.505292],[121.220288,28.508245],[121.214081,28.511902],[121.209347,28.512009],[121.204018,28.510998],[121.197794,28.510772],[121.19493,28.513751],[121.193308,28.514057],[121.191934,28.511729],[121.187747,28.508205],[121.179504,28.507101],[121.172618,28.505385],[121.169605,28.505917],[121.167702,28.508763],[121.163183,28.513498],[121.158267,28.515866],[121.156728,28.520467],[121.155006,28.521465],[121.1511,28.521491],[121.148716,28.519709],[121.145538,28.519975],[121.145571,28.523925],[121.143767,28.524789],[121.139596,28.522608],[121.12988,28.521704],[121.121339,28.532502],[121.113394,28.53709],[121.110265,28.536718],[121.107368,28.538287],[121.10472,28.53721],[121.102303,28.533739],[121.100334,28.529204],[121.092687,28.523792],[121.088168,28.517262],[121.088714,28.509854],[121.086761,28.503682],[121.08211,28.497391],[121.079047,28.495861],[121.076846,28.49219],[121.076085,28.488944],[121.076879,28.484101],[121.075853,28.482824],[121.070407,28.480323],[121.062296,28.480283],[121.049882,28.478234],[121.047068,28.478487],[121.036127,28.481707],[121.032502,28.478154],[121.031211,28.479405],[121.028166,28.477862],[121.025451,28.472739],[121.020237,28.472859],[121.017688,28.478607],[121.015801,28.479551],[121.011613,28.477715],[121.005158,28.479538],[121.002509,28.477755],[121.002212,28.472939],[121.000159,28.47246],[120.995177,28.473351],[120.994895,28.476411],[120.991784,28.477023],[120.989665,28.480083],[120.98705,28.481733],[120.984153,28.480855],[120.977582,28.481161],[120.974073,28.483356],[120.96727,28.482505],[120.965565,28.482984],[120.962254,28.488638],[120.961592,28.491125],[120.958066,28.493374],[120.957686,28.494837],[120.960831,28.499825],[120.96098,28.504308],[120.962171,28.506662],[120.961824,28.5102],[120.960218,28.510918],[120.954458,28.509029],[120.95416,28.506649],[120.956461,28.50347],[120.954739,28.499453],[120.953117,28.499027],[120.946596,28.501501],[120.944758,28.503456],[120.939445,28.503988],[120.935837,28.505026],[120.930623,28.505545],[120.927627,28.505013],[120.917629,28.497843],[120.914418,28.495981],[120.912994,28.49219],[120.910793,28.489196],[120.90442,28.486549],[120.897237,28.485432],[120.892139,28.48595],[120.887206,28.489103],[120.882836,28.48889],[120.869511,28.491179],[120.866714,28.494917],[120.863983,28.49614],[120.861268,28.499599],[120.860408,28.502592],[120.861219,28.506117],[120.860855,28.509016],[120.854316,28.51532],[120.848821,28.513791],[120.845047,28.514163],[120.842184,28.517635],[120.838029,28.517781],[120.832699,28.52459],[120.833096,28.527888],[120.838062,28.53334],[120.841075,28.539949],[120.843077,28.542049],[120.842035,28.54548],[120.833742,28.55137],[120.829223,28.555571],[120.828478,28.561195],[120.82727,28.56509],[120.825846,28.566339],[120.811198,28.57038],[120.802607,28.572215],[120.799396,28.574355],[120.798254,28.576149],[120.799826,28.579406],[120.801183,28.585932],[120.798734,28.588776]]]]}},{"type":"Feature","properties":{"adcode":331004,"name":"路桥区","center":[121.37292,28.581799],"centroid":[121.481896,28.540446],"childrenNum":0,"level":"district","parent":{"adcode":331000},"subFeatureIndex":2,"acroutes":[100000,330000,331000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.586194,28.586556],[121.594189,28.576282],[121.596159,28.575219],[121.615029,28.571749],[121.634229,28.56271],[121.636331,28.558629],[121.639062,28.549123],[121.642224,28.5208],[121.646312,28.511596],[121.652669,28.502618],[121.667797,28.485724],[121.670363,28.479684],[121.671124,28.472593],[121.664503,28.444848],[121.654092,28.444609],[121.634163,28.443823],[121.623172,28.44357],[121.617627,28.444715],[121.612777,28.450344],[121.612347,28.45616],[121.614035,28.463319],[121.612479,28.467204],[121.615657,28.466778],[121.616286,28.469958],[121.613903,28.471688],[121.611966,28.476265],[121.609748,28.477143],[121.599883,28.479325],[121.596937,28.479272],[121.592898,28.481667],[121.589339,28.481746],[121.583711,28.491179],[121.584374,28.491591],[121.579441,28.494917],[121.57282,28.495675],[121.569079,28.494651],[121.566414,28.49054],[121.561151,28.488797],[121.556168,28.489383],[121.552808,28.492868],[121.550541,28.494065],[121.547147,28.493906],[121.542695,28.49058],[121.540295,28.489928],[121.537315,28.49054],[121.535975,28.492695],[121.536041,28.496433],[121.533608,28.498801],[121.528526,28.500277],[121.526606,28.499985],[121.522716,28.497324],[121.52174,28.498761],[121.516939,28.498003],[121.51684,28.496486],[121.514208,28.497165],[121.50666,28.495728],[121.506429,28.497165],[121.498947,28.496792],[121.49557,28.49618],[121.485507,28.490766],[121.487294,28.486044],[121.489843,28.481188],[121.485788,28.482066],[121.482378,28.477556],[121.479978,28.477702],[121.47781,28.479777],[121.478075,28.481467],[121.481782,28.485831],[121.481186,28.488332],[121.475228,28.487467],[121.474003,28.485006],[121.471536,28.485472],[121.466653,28.48478],[121.46384,28.485285],[121.456523,28.488212],[121.453097,28.486363],[121.4503,28.48776],[121.451342,28.496047],[121.450068,28.498455],[121.44113,28.50488],[121.434889,28.507074],[121.432705,28.509641],[121.4309,28.509588],[121.42759,28.506422],[121.428434,28.503456],[121.422243,28.501022],[121.413835,28.502485],[121.411484,28.503377],[121.408737,28.498255],[121.404797,28.497085],[121.399683,28.497564],[121.390149,28.500663],[121.388526,28.502911],[121.375516,28.509136],[121.372007,28.513325],[121.366561,28.517262],[121.362506,28.516504],[121.353551,28.515959],[121.351598,28.513099],[121.346914,28.512275],[121.341435,28.512714],[121.339614,28.514057],[121.337363,28.521372],[121.334764,28.523646],[121.327564,28.526133],[121.323426,28.528659],[121.325793,28.53076],[121.326422,28.533087],[121.325479,28.536638],[121.317269,28.542847],[121.317864,28.546131],[121.314587,28.549189],[121.309886,28.549203],[121.309754,28.55117],[121.311591,28.557033],[121.310581,28.560038],[121.306526,28.564226],[121.305881,28.565887],[121.306741,28.572959],[121.30507,28.574727],[121.301693,28.576096],[121.300071,28.579725],[121.297174,28.580828],[121.297489,28.584523],[121.30257,28.585786],[121.303927,28.586915],[121.304556,28.592564],[121.306576,28.595288],[121.305202,28.596737],[121.299889,28.596843],[121.296148,28.599248],[121.293483,28.602345],[121.293384,28.606331],[121.292109,28.60871],[121.296479,28.614729],[121.299673,28.616749],[121.298929,28.620894],[121.294757,28.62403],[121.291811,28.624149],[121.293069,28.632625],[121.294195,28.63418],[121.297075,28.634884],[121.301726,28.629397],[121.308645,28.627338],[121.311293,28.627763],[121.316275,28.630021],[121.321787,28.633941],[121.326737,28.639028],[121.332166,28.640078],[121.334599,28.639334],[121.341915,28.639467],[121.344563,28.641845],[121.345788,28.641353],[121.349446,28.640038],[121.351598,28.63313],[121.353651,28.631921],[121.354346,28.629649],[121.353535,28.627125],[121.349595,28.624069],[121.35226,28.622595],[121.357242,28.621479],[121.360901,28.614463],[121.360685,28.611859],[121.359014,28.610025],[121.35898,28.606278],[121.362821,28.604497],[121.368813,28.600644],[121.374341,28.598159],[121.380614,28.59784],[121.385713,28.596391],[121.387252,28.592962],[121.391092,28.59073],[121.394518,28.590105],[121.395445,28.588896],[121.395942,28.582729],[121.402497,28.583965],[121.404417,28.583313],[121.404417,28.580389],[121.406486,28.577465],[121.40882,28.578063],[121.411534,28.585068],[121.424213,28.586291],[121.425753,28.587061],[121.433847,28.587992],[121.435072,28.588842],[121.438713,28.588231],[121.438697,28.582888],[121.437604,28.580456],[121.439623,28.57256],[121.445831,28.570646],[121.453296,28.570593],[121.467051,28.57486],[121.505866,28.580535],[121.509524,28.580735],[121.512818,28.574341],[121.518247,28.57587],[121.516724,28.582503],[121.527434,28.584151],[121.534021,28.583978],[121.586194,28.586556]]],[[[121.648547,28.524922],[121.650202,28.527675],[121.6505,28.530774],[121.648663,28.529989],[121.649093,28.532143],[121.651427,28.534404],[121.65348,28.534218],[121.652106,28.529204],[121.652139,28.526398],[121.650699,28.524563],[121.648547,28.524922]]],[[[121.64671,28.545294],[121.65343,28.545706],[121.655218,28.54318],[121.648613,28.54197],[121.646147,28.544363],[121.64671,28.545294]]]]}},{"type":"Feature","properties":{"adcode":331022,"name":"三门县","center":[121.376429,29.118955],"centroid":[121.510948,29.011446],"childrenNum":0,"level":"district","parent":{"adcode":331000},"subFeatureIndex":3,"acroutes":[100000,330000,331000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.256075,29.114034],[121.264036,29.11377],[121.266718,29.111865],[121.270723,29.110331],[121.267777,29.106417],[121.27122,29.102172],[121.277444,29.100294],[121.280622,29.096935],[121.285753,29.094951],[121.287226,29.091353],[121.292622,29.091406],[121.295204,29.092702],[121.293996,29.096551],[121.297704,29.100228],[121.297091,29.103574],[121.299756,29.107475],[121.297025,29.110649],[121.298631,29.114589],[121.308214,29.114523],[121.310896,29.111984],[121.310548,29.106761],[121.312137,29.105042],[121.316987,29.105637],[121.317186,29.108017],[121.319785,29.110874],[121.323807,29.117155],[121.33003,29.120765],[121.336585,29.121955],[121.339333,29.123422],[121.34367,29.12727],[121.34501,29.131117],[121.347824,29.133458],[121.347559,29.140398],[121.345308,29.142818],[121.345408,29.145184],[121.348089,29.150762],[121.354578,29.161522],[121.360238,29.170166],[121.361976,29.173628],[121.362076,29.175981],[121.355869,29.182588],[121.356332,29.186024],[121.362473,29.189526],[121.366926,29.189129],[121.368879,29.191098],[121.378794,29.199224],[121.381177,29.19937],[121.385398,29.196925],[121.394171,29.187993],[121.397796,29.18276],[121.403738,29.178835],[121.40296,29.175888],[121.405013,29.167827],[121.401388,29.163928],[121.401354,29.160716],[121.404334,29.157662],[121.407048,29.156896],[121.414348,29.157253],[121.418271,29.158482],[121.423833,29.157729],[121.431033,29.159777],[121.445251,29.159923],[121.450068,29.159632],[121.455381,29.158323],[121.46081,29.155627],[121.470543,29.147616],[121.477148,29.144206],[121.48453,29.142844],[121.508365,29.14061],[121.524885,29.136512],[121.529718,29.13626],[121.53321,29.137384],[121.535908,29.139804],[121.540907,29.1464],[121.548571,29.157425],[121.555804,29.168963],[121.558767,29.171448],[121.564296,29.173047],[121.572572,29.172888],[121.576561,29.172294],[121.608441,29.169122],[121.615012,29.145488],[121.616535,29.143518],[121.621203,29.140808],[121.645998,29.127389],[121.659918,29.118345],[121.661342,29.1157],[121.661954,29.112156],[121.661507,29.106113],[121.65818,29.098323],[121.655367,29.092729],[121.651891,29.075904],[121.65242,29.071075],[121.653827,29.06495],[121.658958,29.058507],[121.699462,29.039995],[121.707473,29.034265],[121.712621,29.028906],[121.715336,29.018781],[121.715336,29.012282],[121.711247,28.985991],[121.712158,28.980999],[121.713829,28.975716],[121.718365,28.970432],[121.736192,28.959944],[121.743359,28.954236],[121.747894,28.946382],[121.76193,28.918127],[121.772027,28.898358],[121.775652,28.888234],[121.776414,28.879765],[121.775503,28.869188],[121.774593,28.863899],[121.77067,28.86028],[121.765837,28.857709],[121.75905,28.855972],[121.748937,28.855826],[121.738674,28.856569],[121.704212,28.863634],[121.66836,28.872939],[121.664586,28.872634],[121.660101,28.869679],[121.657932,28.864522],[121.652817,28.86097],[121.645005,28.856701],[121.641281,28.855217],[121.639791,28.851107],[121.637705,28.849529],[121.633931,28.848495],[121.632905,28.845552],[121.627757,28.843431],[121.627708,28.84172],[121.62357,28.838923],[121.62256,28.837146],[121.619233,28.835621],[121.617015,28.837292],[121.610659,28.83761],[121.608904,28.836364],[121.605974,28.837451],[121.604766,28.839493],[121.606041,28.840461],[121.600694,28.843086],[121.597185,28.842052],[121.595745,28.840196],[121.592749,28.840249],[121.590663,28.838591],[121.590697,28.840713],[121.588462,28.841694],[121.588528,28.843842],[121.58679,28.844306],[121.578166,28.839095],[121.575998,28.840076],[121.577554,28.843272],[121.576114,28.846414],[121.569609,28.850683],[121.567474,28.848774],[121.562326,28.847899],[121.559992,28.849423],[121.556086,28.853639],[121.553172,28.855256],[121.547247,28.851518],[121.545509,28.852446],[121.541354,28.84994],[121.53811,28.850113],[121.529602,28.85169],[121.520664,28.852777],[121.517221,28.851995],[121.506842,28.851757],[121.5058,28.84766],[121.501546,28.850961],[121.496977,28.84945],[121.491068,28.849582],[121.483868,28.852035],[121.481964,28.853148],[121.486069,28.859896],[121.486136,28.865609],[121.484977,28.869201],[121.480607,28.872422],[121.478141,28.876929],[121.478075,28.879526],[121.47968,28.882561],[121.472778,28.884139],[121.470444,28.885318],[121.464667,28.886511],[121.460744,28.891838],[121.455878,28.893163],[121.458212,28.896914],[121.458129,28.898769],[121.456242,28.90069],[121.454818,28.905142],[121.454901,28.907792],[121.453279,28.911198],[121.452865,28.919902],[121.453312,28.924181],[121.450896,28.924883],[121.449621,28.923121],[121.445864,28.924526],[121.441924,28.924221],[121.439143,28.924936],[121.435303,28.929282],[121.429709,28.933997],[121.427938,28.937349],[121.426282,28.946263],[121.426547,28.950382],[121.420075,28.951376],[121.4141,28.955415],[121.413918,28.959587],[121.412494,28.957574],[121.409134,28.959785],[121.41064,28.962249],[121.412428,28.961997],[121.415656,28.963851],[121.413934,28.967916],[121.41112,28.969691],[121.403639,28.972657],[121.401371,28.974829],[121.401967,28.97749],[121.400626,28.977821],[121.397316,28.975478],[121.390297,28.976656],[121.389073,28.977808],[121.381409,28.977887],[121.380316,28.976881],[121.379621,28.97267],[121.380432,28.970697],[121.379936,28.963758],[121.372769,28.96156],[121.369855,28.960024],[121.366677,28.95609],[121.369922,28.950488],[121.368962,28.946713],[121.365039,28.942899],[121.36249,28.941362],[121.35375,28.939058],[121.350125,28.942422],[121.340475,28.948833],[121.340012,28.952568],[121.341634,28.957746],[121.337876,28.959719],[121.336138,28.966354],[121.333986,28.970591],[121.330858,28.972485],[121.327581,28.970048],[121.324585,28.971174],[121.321489,28.969267],[121.318924,28.970062],[121.313379,28.96977],[121.307486,28.970287],[121.302189,28.972895],[121.299044,28.97614],[121.298482,28.979437],[121.296479,28.982019],[121.298101,28.987751],[121.296876,28.990015],[121.291944,28.992571],[121.289775,28.994927],[121.286266,28.993524],[121.282161,28.997178],[121.284147,29.001639],[121.284992,29.007318],[121.284594,29.010336],[121.281118,29.012136],[121.279099,29.012189],[121.272296,29.010376],[121.268439,29.006894],[121.266403,29.003347],[121.258193,29.004114],[121.245597,29.006908],[121.241542,29.010084],[121.238513,29.010654],[121.232504,29.007397],[121.229707,29.007186],[121.231428,29.013725],[121.224013,29.019747],[121.220504,29.020581],[121.211532,29.021547],[121.207047,29.022473],[121.205077,29.023929],[121.208603,29.030123],[121.209529,29.032691],[121.211963,29.043462],[121.218865,29.050475],[121.22244,29.057686],[121.220686,29.06319],[121.224327,29.067808],[121.233448,29.073919],[121.235781,29.078245],[121.241178,29.08634],[121.244157,29.088364],[121.250513,29.090203],[121.251854,29.09462],[121.25485,29.100797],[121.25581,29.104314],[121.25384,29.107515],[121.256075,29.114034]]],[[[121.687395,29.09667],[121.688488,29.098125],[121.68473,29.10122],[121.682463,29.10159],[121.681387,29.104526],[121.68243,29.105822],[121.681883,29.109326],[121.684118,29.110226],[121.686617,29.109485],[121.691765,29.111231],[121.691368,29.108599],[121.692576,29.106496],[121.695374,29.106867],[121.697658,29.100162],[121.699793,29.098707],[121.696979,29.097675],[121.697078,29.094078],[121.695059,29.092649],[121.691931,29.092716],[121.687395,29.09667]]],[[[121.695274,29.088457],[121.695738,29.090626],[121.69827,29.092954],[121.7012,29.091896],[121.700621,29.088404],[121.706381,29.085163],[121.708582,29.085309],[121.710072,29.082742],[121.708682,29.079065],[121.707175,29.078351],[121.704345,29.083325],[121.699114,29.085018],[121.694397,29.084713],[121.696317,29.087121],[121.695274,29.088457]]],[[[121.672631,29.062251],[121.67417,29.060386],[121.679963,29.061232],[121.679036,29.057964],[121.680526,29.054696],[121.675792,29.053704],[121.671224,29.05459],[121.666357,29.057567],[121.665861,29.059618],[121.661292,29.059301],[121.65967,29.060597],[121.658147,29.064394],[121.659637,29.064487],[121.662881,29.062251],[121.665248,29.062542],[121.66687,29.064778],[121.670479,29.064355],[121.672631,29.062251]]],[[[121.795399,28.96107],[121.797717,28.96356],[121.800464,28.962805],[121.800564,28.961216],[121.798395,28.960501],[121.795399,28.96107]]],[[[121.803146,28.958408],[121.80202,28.960421],[121.804487,28.960328],[121.805612,28.95768],[121.808575,28.95613],[121.80452,28.955892],[121.803146,28.958408]]],[[[121.776397,28.978099],[121.779559,28.979],[121.779973,28.976749],[121.776546,28.975345],[121.77509,28.976034],[121.776397,28.978099]]],[[[121.746338,29.093099],[121.746504,29.094607],[121.749152,29.096088],[121.749516,29.088576],[121.747861,29.089978],[121.745693,29.089224],[121.746338,29.093099]]],[[[121.767244,28.98133],[121.767939,28.983091],[121.770951,28.983779],[121.772756,28.983064],[121.776877,28.983594],[121.77744,28.981714],[121.771713,28.978828],[121.767244,28.98133]]],[[[121.685591,29.115899],[121.686021,29.12009],[121.69016,29.12087],[121.692642,29.118768],[121.694397,29.113069],[121.69251,29.112619],[121.690772,29.114153],[121.685591,29.115899]]],[[[121.764231,28.9884],[121.764827,28.990492],[121.767823,28.990677],[121.76726,28.988612],[121.764231,28.9884]]],[[[121.686634,29.124784],[121.686535,29.122893],[121.682496,29.124573],[121.682794,29.12563],[121.686634,29.124784]]],[[[121.671157,29.065876],[121.668973,29.069713],[121.672283,29.072253],[121.675593,29.072411],[121.674302,29.066352],[121.671157,29.065876]]],[[[121.681966,29.059592],[121.681652,29.062172],[121.689332,29.062145],[121.688223,29.059102],[121.681966,29.059592]]]]}},{"type":"Feature","properties":{"adcode":331023,"name":"天台县","center":[121.031227,29.141126],"centroid":[120.977207,29.145258],"childrenNum":0,"level":"district","parent":{"adcode":331000},"subFeatureIndex":4,"acroutes":[100000,330000,331000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.256075,29.114034],[121.25384,29.107515],[121.25581,29.104314],[121.25485,29.100797],[121.251854,29.09462],[121.250513,29.090203],[121.244157,29.088364],[121.241178,29.08634],[121.235781,29.078245],[121.233448,29.073919],[121.224327,29.067808],[121.220686,29.06319],[121.22244,29.057686],[121.218865,29.050475],[121.211963,29.043462],[121.209529,29.032691],[121.208603,29.030123],[121.205077,29.023929],[121.203124,29.02422],[121.195609,29.023545],[121.193755,29.025465],[121.193888,29.027238],[121.191487,29.029144],[121.187382,29.028535],[121.181208,29.032624],[121.179206,29.03539],[121.173627,29.040803],[121.169258,29.042827],[121.160899,29.044667],[121.157158,29.044614],[121.152921,29.041014],[121.151679,29.036872],[121.150239,29.036806],[121.149527,29.039876],[121.147558,29.043039],[121.142575,29.047353],[121.138868,29.04771],[121.133786,29.044111],[121.130906,29.042986],[121.124119,29.042893],[121.119965,29.04468],[121.119915,29.049973],[121.116853,29.053982],[121.114221,29.055517],[121.10232,29.058374],[121.092869,29.061828],[121.08835,29.066022],[121.082358,29.06618],[121.073387,29.059843],[121.07044,29.056919],[121.063488,29.04509],[121.062379,29.03977],[121.060741,29.037084],[121.045612,29.028667],[121.040977,29.027212],[121.03712,29.024565],[121.028017,29.021507],[121.02368,29.023294],[121.017489,29.028561],[121.014096,29.029872],[121.012441,29.032505],[121.009975,29.033365],[121.007442,29.03236],[121.001847,29.032717],[120.997213,29.031275],[120.990195,29.033895],[120.979932,29.03359],[120.97596,29.034279],[120.973791,29.036925],[120.969852,29.038394],[120.965018,29.034146],[120.96285,29.030136],[120.954342,29.037164],[120.94835,29.036528],[120.944047,29.035337],[120.937012,29.028178],[120.93433,29.022566],[120.931351,29.018291],[120.930623,29.016107],[120.928272,29.013989],[120.923456,29.012785],[120.91268,29.008827],[120.909369,29.009052],[120.901987,29.007569],[120.895797,29.007],[120.891178,29.003453],[120.884657,29.000818],[120.879013,28.996966],[120.875487,28.991803],[120.873981,28.9875],[120.872226,28.984786],[120.867889,28.980496],[120.864248,28.978629],[120.85569,28.975478],[120.853207,28.973147],[120.846371,28.970115],[120.844418,28.967943],[120.842134,28.959401],[120.840263,28.956859],[120.835066,28.953005],[120.830911,28.953932],[120.827022,28.951309],[120.824936,28.952779],[120.820351,28.952223],[120.819043,28.954581],[120.811744,28.959997],[120.805669,28.961613],[120.802143,28.960792],[120.798485,28.961944],[120.794066,28.969413],[120.79054,28.971889],[120.787164,28.971717],[120.784714,28.976974],[120.78579,28.984627],[120.784664,28.986719],[120.78137,28.986864],[120.781536,28.990002],[120.78046,28.991935],[120.777712,28.993378],[120.768178,28.991909],[120.764917,28.990863],[120.759952,28.987831],[120.757734,28.984547],[120.757005,28.980853],[120.751907,28.979688],[120.749805,28.980615],[120.747488,28.984415],[120.745286,28.985554],[120.741247,28.980999],[120.734627,28.977649],[120.724612,28.97745],[120.72102,28.975875],[120.71872,28.975914],[120.718819,28.979291],[120.726665,28.981264],[120.728949,28.983806],[120.728552,28.987169],[120.724463,28.992412],[120.72299,28.992293],[120.722014,28.995232],[120.725754,28.995629],[120.729528,28.997125],[120.728072,29.00471],[120.72827,29.00982],[120.725556,29.013672],[120.722841,29.011051],[120.720342,29.011382],[120.721732,29.018278],[120.724414,29.022116],[120.72443,29.023863],[120.72016,29.025081],[120.717098,29.027503],[120.716038,29.03322],[120.713572,29.035271],[120.710328,29.034821],[120.70849,29.032691],[120.707481,29.024988],[120.703475,29.021931],[120.701737,29.022725],[120.69654,29.02872],[120.695133,29.031063],[120.693163,29.040578],[120.693858,29.041253],[120.698195,29.040697],[120.70076,29.043965],[120.697665,29.04558],[120.693709,29.048808],[120.691607,29.052103],[120.698691,29.056324],[120.702035,29.05983],[120.702052,29.064169],[120.70513,29.070255],[120.704865,29.07589],[120.700876,29.080758],[120.697913,29.082346],[120.694371,29.086922],[120.694951,29.090943],[120.701224,29.097437],[120.709864,29.098429],[120.714433,29.104195],[120.719514,29.109353],[120.720392,29.112328],[120.723619,29.119125],[120.725308,29.119614],[120.729677,29.115489],[120.732491,29.114113],[120.736629,29.113333],[120.73984,29.113571],[120.744376,29.115912],[120.746163,29.118847],[120.74671,29.123607],[120.739824,29.123885],[120.738351,29.124507],[120.734411,29.131263],[120.729048,29.133881],[120.726185,29.133815],[120.722808,29.130681],[120.720309,29.130879],[120.718736,29.135652],[120.712479,29.143545],[120.712314,29.145475],[120.714052,29.149877],[120.720027,29.150881],[120.723619,29.157121],[120.731117,29.164509],[120.738798,29.167893],[120.741727,29.16969],[120.744608,29.17273],[120.75295,29.178835],[120.755102,29.181624],[120.757187,29.186328],[120.759885,29.189011],[120.766705,29.192288],[120.777547,29.198749],[120.777878,29.200453],[120.773177,29.205712],[120.773475,29.207138],[120.776967,29.209847],[120.776421,29.213229],[120.777646,29.215237],[120.782992,29.219068],[120.783075,29.221195],[120.776537,29.225091],[120.788918,29.22772],[120.796731,29.23056],[120.799793,29.232158],[120.806133,29.233994],[120.810204,29.233915],[120.81666,29.231418],[120.817752,29.229397],[120.822255,29.230454],[120.823893,29.229503],[120.83058,29.232277],[120.83788,29.237322],[120.844584,29.245181],[120.853654,29.253514],[120.856452,29.253923],[120.862129,29.252352],[120.867674,29.244084],[120.871928,29.242711],[120.874063,29.244718],[120.877258,29.243517],[120.88282,29.238802],[120.885286,29.2383],[120.891046,29.239766],[120.896839,29.239185],[120.900067,29.240783],[120.897419,29.253183],[120.892999,29.257251],[120.89093,29.259958],[120.889656,29.266085],[120.891658,29.270019],[120.895879,29.272488],[120.90058,29.273809],[120.903791,29.27604],[120.903129,29.283499],[120.903328,29.289796],[120.904238,29.295472],[120.905662,29.297769],[120.91215,29.302125],[120.916073,29.303432],[120.924051,29.296621],[120.926319,29.2927],[120.928107,29.29171],[120.94024,29.29006],[120.944791,29.288634],[120.945983,29.285915],[120.9532,29.282073],[120.956875,29.28243],[120.959556,29.293664],[120.963429,29.298944],[120.964803,29.302336],[120.964803,29.306335],[120.967303,29.307154],[120.973725,29.307154],[120.976291,29.308078],[120.981008,29.308051],[120.990906,29.309199],[120.995607,29.31044],[120.998371,29.312209],[121.005555,29.319428],[121.011729,29.320127],[121.021578,29.317171],[121.022223,29.315389],[121.021561,29.310585],[121.022422,29.308962],[121.027007,29.307602],[121.040861,29.309556],[121.048012,29.313753],[121.051753,29.31989],[121.056536,29.322872],[121.070357,29.32241],[121.076565,29.321671],[121.087622,29.319019],[121.092504,29.319256],[121.099423,29.318148],[121.099324,29.315719],[121.095898,29.310533],[121.096146,29.305715],[121.098463,29.304844],[121.111904,29.302811],[121.115363,29.303273],[121.117515,29.304527],[121.119303,29.308764],[121.119534,29.314967],[121.120362,29.318728],[121.11783,29.324284],[121.117962,29.33112],[121.12205,29.336371],[121.127,29.338496],[121.133703,29.338324],[121.143188,29.334036],[121.146449,29.331951],[121.149858,29.330895],[121.154162,29.33232],[121.160303,29.340092],[121.161809,29.33876],[121.163199,29.334128],[121.162256,29.329312],[121.163067,29.325049],[121.167387,29.322569],[121.172221,29.322093],[121.175084,29.323123],[121.176839,29.326422],[121.180464,29.329233],[121.185479,29.32625],[121.189087,29.323308],[121.194185,29.322199],[121.188525,29.319507],[121.187531,29.317831],[121.189518,29.312869],[121.190726,29.31238],[121.197165,29.315785],[121.201071,29.312459],[121.200393,29.307721],[121.196999,29.30322],[121.185297,29.295274],[121.18091,29.292014],[121.179917,29.289902],[121.182317,29.287367],[121.17899,29.286007],[121.175316,29.278284],[121.175034,29.271234],[121.178212,29.265372],[121.179305,29.258716],[121.174869,29.258386],[121.168413,29.259509],[121.166841,29.258888],[121.164093,29.250754],[121.158863,29.244481],[121.159541,29.242143],[121.162753,29.236028],[121.169787,29.229067],[121.169787,29.226056],[121.171393,29.22418],[121.175101,29.222278],[121.172353,29.217694],[121.16838,29.216122],[121.165765,29.213942],[121.164706,29.211591],[121.168132,29.208737],[121.173512,29.206399],[121.188756,29.205355],[121.20271,29.203571],[121.214909,29.205527],[121.223467,29.204694],[121.22532,29.203862],[121.226777,29.199634],[121.228664,29.197731],[121.23401,29.196688],[121.233017,29.191297],[121.232968,29.186606],[121.235119,29.182033],[121.238893,29.175743],[121.246756,29.168725],[121.251026,29.163544],[121.250745,29.161258],[121.253062,29.157187],[121.256025,29.158376],[121.257978,29.156869],[121.258756,29.153829],[121.261371,29.154622],[121.263076,29.156446],[121.265228,29.156156],[121.264367,29.154384],[121.258673,29.150511],[121.257548,29.148978],[121.257465,29.141271],[121.25874,29.129227],[121.257713,29.122589],[121.254717,29.118993],[121.256075,29.114034]]]]}},{"type":"Feature","properties":{"adcode":331024,"name":"仙居县","center":[120.735074,28.849213],"centroid":[120.634355,28.73327],"childrenNum":0,"level":"district","parent":{"adcode":331000},"subFeatureIndex":5,"acroutes":[100000,330000,331000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[120.71872,28.975914],[120.72102,28.975875],[120.724612,28.97745],[120.734627,28.977649],[120.741247,28.980999],[120.745286,28.985554],[120.747488,28.984415],[120.749805,28.980615],[120.751907,28.979688],[120.757005,28.980853],[120.757734,28.984547],[120.759952,28.987831],[120.764917,28.990863],[120.768178,28.991909],[120.777712,28.993378],[120.78046,28.991935],[120.781536,28.990002],[120.78137,28.986864],[120.784664,28.986719],[120.78579,28.984627],[120.784714,28.976974],[120.787164,28.971717],[120.79054,28.971889],[120.794066,28.969413],[120.798485,28.961944],[120.802143,28.960792],[120.805669,28.961613],[120.811744,28.959997],[120.819043,28.954581],[120.820351,28.952223],[120.824936,28.952779],[120.827022,28.951309],[120.827121,28.945177],[120.831358,28.940263],[120.833941,28.939667],[120.839452,28.932924],[120.839552,28.930818],[120.84263,28.924261],[120.843756,28.920525],[120.852959,28.91818],[120.861666,28.917173],[120.863602,28.914457],[120.867327,28.911701],[120.868734,28.904891],[120.871961,28.900491],[120.876513,28.899895],[120.878731,28.896847],[120.88032,28.890195],[120.879675,28.888393],[120.875702,28.885702],[120.883151,28.876239],[120.887405,28.87506],[120.890963,28.875762],[120.896161,28.875073],[120.898975,28.872648],[120.902136,28.87164],[120.905397,28.86606],[120.902848,28.862693],[120.900746,28.862746],[120.899422,28.859923],[120.90591,28.854434],[120.908509,28.854832],[120.909618,28.851889],[120.910876,28.840103],[120.910147,28.833248],[120.911008,28.830888],[120.91695,28.826379],[120.918837,28.82374],[120.91945,28.821022],[120.924085,28.808463],[120.922529,28.80219],[120.916421,28.792149],[120.916603,28.788594],[120.918639,28.780648],[120.921569,28.776694],[120.92228,28.772383],[120.923571,28.76953],[120.922926,28.764249],[120.925889,28.759725],[120.935274,28.754245],[120.935655,28.752374],[120.933023,28.751352],[120.929547,28.747026],[120.925872,28.74396],[120.919483,28.7397],[120.918291,28.735307],[120.92132,28.731963],[120.923456,28.725605],[120.925988,28.722871],[120.922777,28.715809],[120.920129,28.711774],[120.912746,28.704844],[120.909485,28.69871],[120.909237,28.691076],[120.911604,28.6838],[120.91119,28.679896],[120.904702,28.672778],[120.904304,28.670281],[120.904304,28.661941],[120.903775,28.661011],[120.896541,28.659404],[120.895797,28.660998],[120.89679,28.664704],[120.895681,28.666417],[120.893612,28.666523],[120.890864,28.664013],[120.888431,28.664385],[120.884011,28.666988],[120.877473,28.663362],[120.87936,28.660533],[120.882406,28.65967],[120.890599,28.656137],[120.891327,28.655088],[120.889523,28.651462],[120.889308,28.648659],[120.892155,28.646853],[120.904884,28.640184],[120.911141,28.632267],[120.912117,28.628733],[120.914302,28.626939],[120.91455,28.624309],[120.912697,28.62302],[120.904784,28.623485],[120.897998,28.625943],[120.891692,28.625677],[120.887471,28.626527],[120.878433,28.626767],[120.87312,28.628919],[120.868783,28.629716],[120.865771,28.624136],[120.863503,28.621957],[120.857428,28.619765],[120.849616,28.619007],[120.845378,28.617599],[120.838608,28.616855],[120.83447,28.617174],[120.822718,28.617054],[120.81522,28.615526],[120.811413,28.613666],[120.809244,28.608564],[120.810602,28.601162],[120.808913,28.596165],[120.803699,28.596444],[120.801332,28.595766],[120.797608,28.593175],[120.798734,28.588776],[120.793652,28.583765],[120.79102,28.58342],[120.787478,28.584922],[120.785061,28.588643],[120.782943,28.59053],[120.776984,28.589254],[120.771422,28.592843],[120.76452,28.592829],[120.760481,28.591208],[120.758727,28.59158],[120.756757,28.59566],[120.756724,28.599846],[120.757833,28.604298],[120.7553,28.605614],[120.752437,28.605746],[120.74959,28.609786],[120.743515,28.611593],[120.739675,28.610955],[120.736315,28.609188],[120.732938,28.605202],[120.729379,28.60378],[120.721666,28.604125],[120.718637,28.605441],[120.713804,28.609255],[120.707812,28.611766],[120.703574,28.608776],[120.701985,28.606371],[120.702052,28.602424],[120.701091,28.599806],[120.701009,28.592763],[120.69889,28.591461],[120.698774,28.589533],[120.695546,28.586982],[120.689935,28.586025],[120.687337,28.582489],[120.679706,28.581891],[120.675038,28.582024],[120.669245,28.579605],[120.661862,28.581665],[120.659876,28.583951],[120.653024,28.585028],[120.646916,28.580177],[120.640046,28.578741],[120.639749,28.576933],[120.648025,28.569011],[120.648058,28.565714],[120.649647,28.563003],[120.64003,28.557844],[120.636686,28.561128],[120.633293,28.561726],[120.631274,28.564],[120.626159,28.560982],[120.624719,28.558296],[120.621491,28.55714],[120.624785,28.549974],[120.627169,28.547408],[120.626639,28.544616],[120.627516,28.536358],[120.624305,28.53338],[120.618611,28.532768],[120.615367,28.533899],[120.598798,28.533965],[120.588751,28.532914],[120.585854,28.530454],[120.583355,28.5308],[120.57968,28.535574],[120.574847,28.538074],[120.572232,28.537489],[120.569302,28.534577],[120.567862,28.531891],[120.55942,28.533154],[120.556457,28.53592],[120.554719,28.53596],[120.549191,28.533579],[120.541213,28.543353],[120.535552,28.546597],[120.528765,28.548378],[120.525405,28.552513],[120.524081,28.555332],[120.518801,28.555837],[120.512445,28.558841],[120.508439,28.557273],[120.50157,28.560011],[120.499484,28.561873],[120.498441,28.565103],[120.500543,28.566738],[120.496554,28.571749],[120.493509,28.577758],[120.489801,28.580815],[120.48457,28.583885],[120.48227,28.583287],[120.481425,28.581346],[120.477652,28.582011],[120.471891,28.586942],[120.466561,28.586011],[120.458931,28.585892],[120.453253,28.584191],[120.446335,28.58431],[120.443488,28.582622],[120.442511,28.580841],[120.441865,28.573331],[120.436254,28.573331],[120.430693,28.568187],[120.430213,28.561487],[120.43397,28.55593],[120.434169,28.55375],[120.431123,28.548791],[120.430229,28.545493],[120.432315,28.54189],[120.432199,28.538898],[120.430659,28.53451],[120.428773,28.533513],[120.424221,28.534284],[120.422747,28.533619],[120.423608,28.53096],[120.422896,28.528845],[120.41995,28.525215],[120.422201,28.522156],[120.421125,28.518858],[120.419089,28.517901],[120.414935,28.512368],[120.414951,28.496859],[120.419156,28.491884],[120.417285,28.489516],[120.411293,28.48631],[120.406013,28.480443],[120.402405,28.48164],[120.399276,28.478021],[120.399177,28.475613],[120.402934,28.473564],[120.402852,28.472287],[120.399045,28.465089],[120.396628,28.465568],[120.394162,28.471089],[120.391017,28.471595],[120.389246,28.473604],[120.389692,28.477103],[120.387805,28.479485],[120.385819,28.48607],[120.383436,28.489023],[120.383436,28.493586],[120.379728,28.498043],[120.376153,28.498322],[120.371866,28.496074],[120.369946,28.496087],[120.368108,28.498974],[120.366304,28.499772],[120.357283,28.498082],[120.350397,28.497644],[120.345349,28.49614],[120.341012,28.496327],[120.336328,28.501554],[120.335633,28.505146],[120.337222,28.506622],[120.336824,28.509242],[120.334325,28.509189],[120.324245,28.512341],[120.321431,28.514908],[120.321133,28.517435],[120.31764,28.521651],[120.31337,28.522156],[120.311185,28.517395],[120.306848,28.509615],[120.304878,28.507181],[120.301965,28.507274],[120.299234,28.509269],[120.292646,28.511995],[120.293656,28.51794],[120.290925,28.523991],[120.292166,28.526704],[120.290296,28.530454],[120.289981,28.534909],[120.290958,28.539044],[120.294301,28.54197],[120.304928,28.549136],[120.306815,28.552566],[120.311549,28.557632],[120.315075,28.557246],[120.317657,28.554733],[120.322109,28.554149],[120.322556,28.55932],[120.325999,28.563388],[120.325254,28.56828],[120.321431,28.567403],[120.32009,28.569902],[120.321215,28.572015],[120.324874,28.575431],[120.331726,28.580363],[120.332968,28.580575],[120.342684,28.575392],[120.348361,28.573916],[120.355793,28.577425],[120.358789,28.579751],[120.361338,28.580203],[120.36589,28.578635],[120.370608,28.574036],[120.37261,28.573743],[120.3765,28.57599],[120.379529,28.579446],[120.382045,28.587287],[120.381814,28.591128],[120.378619,28.594849],[120.381449,28.598026],[120.381714,28.599886],[120.377328,28.605308],[120.373471,28.605494],[120.369565,28.609055],[120.368919,28.611819],[120.370095,28.614928],[120.368853,28.618223],[120.365112,28.620495],[120.361305,28.624402],[120.355181,28.625571],[120.353277,28.626913],[120.349768,28.632984],[120.349702,28.634512],[120.352003,28.637527],[120.35533,28.636969],[120.35725,28.638657],[120.357465,28.646839],[120.350083,28.647742],[120.347799,28.650824],[120.344869,28.650944],[120.339158,28.652777],[120.336195,28.654371],[120.33017,28.660454],[120.326545,28.664929],[120.324162,28.66639],[120.32254,28.669803],[120.323566,28.675832],[120.324062,28.686336],[120.326231,28.693599],[120.331577,28.701313],[120.339473,28.703835],[120.344207,28.706118],[120.34952,28.704326],[120.352681,28.706809],[120.355082,28.709875],[120.355512,28.712198],[120.353161,28.714906],[120.351738,28.719818],[120.352797,28.722951],[120.351887,28.723986],[120.345928,28.72315],[120.343296,28.721836],[120.344306,28.727994],[120.347451,28.730211],[120.354982,28.731565],[120.357134,28.733463],[120.363755,28.735161],[120.365129,28.737497],[120.368886,28.739674],[120.369946,28.741731],[120.369035,28.743164],[120.37074,28.750065],[120.368704,28.752082],[120.36839,28.758703],[120.369962,28.760893],[120.368985,28.763878],[120.374199,28.773205],[120.379976,28.777928],[120.386051,28.787108],[120.388964,28.78797],[120.392688,28.785821],[120.400667,28.785503],[120.403398,28.788183],[120.403348,28.79191],[120.404259,28.793502],[120.408761,28.795452],[120.40987,28.798569],[120.406907,28.801885],[120.408099,28.806606],[120.414223,28.813211],[120.4151,28.822308],[120.420943,28.829655],[120.423277,28.82996],[120.426703,28.831988],[120.430179,28.832824],[120.433606,28.836947],[120.437148,28.838326],[120.441783,28.841415],[120.449347,28.84245],[120.46345,28.839427],[120.467224,28.84176],[120.469425,28.841482],[120.473894,28.839201],[120.476692,28.83399],[120.476543,28.82996],[120.481128,28.828183],[120.48457,28.83285],[120.482369,28.836006],[120.484471,28.838512],[120.487649,28.840103],[120.485878,28.844438],[120.486788,28.846016],[120.493442,28.847899],[120.496687,28.847209],[120.498474,28.849198],[120.495859,28.853042],[120.501735,28.856184],[120.502215,28.857218],[120.494949,28.865994],[120.494899,28.868592],[120.497862,28.871216],[120.504599,28.872184],[120.509995,28.874874],[120.5116,28.880865],[120.510508,28.883728],[120.513636,28.887916],[120.514696,28.890725],[120.520174,28.88769],[120.517741,28.88447],[120.518288,28.883105],[120.522922,28.879447],[120.525471,28.878652],[120.532572,28.879871],[120.53628,28.877379],[120.534294,28.875365],[120.531678,28.874384],[120.531231,28.871932],[120.533615,28.866259],[120.537505,28.864933],[120.542768,28.867054],[120.548082,28.865503],[120.548082,28.864814],[120.553428,28.861845],[120.56326,28.861699],[120.568292,28.864072],[120.57195,28.867889],[120.579962,28.869347],[120.582113,28.870858],[120.586864,28.875842],[120.58736,28.877909],[120.590042,28.881104],[120.594528,28.883675],[120.599212,28.885305],[120.604476,28.890699],[120.606429,28.890394],[120.61247,28.892329],[120.619075,28.895628],[120.624736,28.895999],[120.630281,28.897033],[120.636885,28.898862],[120.64243,28.899392],[120.646965,28.900478],[120.651699,28.905646],[120.657062,28.908283],[120.659462,28.913437],[120.663783,28.916497],[120.664941,28.923771],[120.663932,28.926632],[120.662276,28.927679],[120.660141,28.931573],[120.659611,28.937137],[120.661051,28.94115],[120.664014,28.946488],[120.669096,28.949045],[120.672357,28.956064],[120.673433,28.959905],[120.67282,28.970512],[120.673333,28.97316],[120.677686,28.977305],[120.686774,28.978258],[120.692882,28.980628],[120.696672,28.980019],[120.696838,28.977397],[120.698857,28.973001],[120.703144,28.973663],[120.714698,28.973107],[120.717296,28.973756],[120.71872,28.975914]]]]}},{"type":"Feature","properties":{"adcode":331081,"name":"温岭市","center":[121.373611,28.368781],"centroid":[121.427094,28.38848],"childrenNum":0,"level":"district","parent":{"adcode":331000},"subFeatureIndex":6,"acroutes":[100000,330000,331000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.457252,28.254257],[121.449439,28.25475],[121.435038,28.254924],[121.423535,28.25619],[121.416649,28.25563],[121.415143,28.256457],[121.412958,28.260336],[121.411286,28.26027],[121.409498,28.258097],[121.407545,28.258323],[121.406254,28.265002],[121.404284,28.265562],[121.398839,28.26239],[121.397928,28.260736],[121.399236,28.258817],[121.398342,28.25591],[121.396422,28.255964],[121.389354,28.254004],[121.388543,28.254497],[121.386689,28.25995],[121.384024,28.264656],[121.383528,28.267815],[121.379605,28.268642],[121.373298,28.268549],[121.369706,28.270055],[121.359411,28.270948],[121.354478,28.274334],[121.353154,28.276787],[121.355041,28.282492],[121.35759,28.285424],[121.361645,28.287383],[121.363052,28.289702],[121.363036,28.292261],[121.355819,28.294274],[121.357987,28.296446],[121.357259,28.298179],[121.359345,28.30147],[121.360768,28.308027],[121.360305,28.310172],[121.363698,28.317608],[121.36201,28.319966],[121.356994,28.317981],[121.352856,28.313157],[121.347973,28.310319],[121.343785,28.306468],[121.340707,28.304669],[121.339366,28.306281],[121.3369,28.306748],[121.33253,28.303829],[121.328988,28.303829],[121.326389,28.300071],[121.320496,28.297192],[121.316904,28.297646],[121.312965,28.296979],[121.30934,28.295513],[121.305367,28.289622],[121.302653,28.287263],[121.29964,28.286344],[121.286978,28.284011],[121.283916,28.282132],[121.280969,28.278799],[121.275441,28.2774],[121.272743,28.278426],[121.269962,28.277133],[121.265956,28.271801],[121.263838,28.271441],[121.258889,28.272294],[121.251804,28.275307],[121.242419,28.27684],[121.229723,28.27692],[121.225834,28.276173],[121.218766,28.271855],[121.212029,28.271015],[121.200641,28.271775],[121.194881,28.273108],[121.185264,28.276547],[121.173892,28.277493],[121.177186,28.282145],[121.18677,28.294114],[121.198373,28.307774],[121.205938,28.318674],[121.208917,28.325362],[121.212062,28.324137],[121.212178,28.326255],[121.210192,28.326135],[121.209447,28.329399],[121.213668,28.345639],[121.215737,28.349182],[121.215886,28.3515],[121.214313,28.358],[121.209761,28.36141],[121.204878,28.368429],[121.208172,28.370094],[121.209546,28.373357],[121.211996,28.370973],[121.216415,28.371386],[121.222639,28.37329],[121.222788,28.375807],[121.220752,28.376779],[121.22052,28.378857],[121.226314,28.382892],[121.227572,28.384809],[121.235964,28.384609],[121.238728,28.384037],[121.246127,28.385781],[121.246623,28.390588],[121.251026,28.399283],[121.250463,28.403663],[121.251258,28.405274],[121.257217,28.406779],[121.257713,28.40811],[121.25235,28.412809],[121.248725,28.413701],[121.242386,28.417655],[121.239771,28.420637],[121.236179,28.422687],[121.232537,28.423605],[121.228283,28.423725],[121.222804,28.422035],[121.221116,28.424164],[121.221546,28.427599],[121.224443,28.433043],[121.226827,28.435545],[121.225536,28.437861],[121.221596,28.438806],[121.219179,28.438154],[121.214396,28.438367],[121.211764,28.44224],[121.211516,28.445141],[121.209596,28.446299],[121.209016,28.450704],[121.20612,28.455987],[121.209116,28.458835],[121.205805,28.461043],[121.202164,28.461429],[121.194616,28.467098],[121.195179,28.473005],[121.191454,28.473631],[121.188624,28.475201],[121.184668,28.474655],[121.183592,28.477556],[121.18096,28.478354],[121.179619,28.483942],[121.175117,28.4934],[121.17328,28.494132],[121.170847,28.497111],[121.172535,28.499705],[121.172618,28.505385],[121.179504,28.507101],[121.187747,28.508205],[121.191934,28.511729],[121.193308,28.514057],[121.19493,28.513751],[121.197794,28.510772],[121.204018,28.510998],[121.209347,28.512009],[121.214081,28.511902],[121.220288,28.508245],[121.232272,28.505292],[121.234192,28.506077],[121.236096,28.508657],[121.239473,28.510014],[121.245796,28.508098],[121.249073,28.506555],[121.251125,28.506728],[121.253972,28.510266],[121.262944,28.511171],[121.266519,28.513166],[121.268241,28.515214],[121.271915,28.517249],[121.276798,28.518858],[121.282641,28.52334],[121.283568,28.526345],[121.287276,28.527622],[121.294906,28.52721],[121.299491,28.525867],[121.303232,28.52596],[121.309175,28.528672],[121.312667,28.527835],[121.315166,28.52943],[121.319536,28.530042],[121.323426,28.528659],[121.327564,28.526133],[121.334764,28.523646],[121.337363,28.521372],[121.339614,28.514057],[121.341435,28.512714],[121.346914,28.512275],[121.351598,28.513099],[121.353551,28.515959],[121.362506,28.516504],[121.366561,28.517262],[121.372007,28.513325],[121.375516,28.509136],[121.388526,28.502911],[121.390149,28.500663],[121.399683,28.497564],[121.404797,28.497085],[121.408737,28.498255],[121.411484,28.503377],[121.413835,28.502485],[121.422243,28.501022],[121.428434,28.503456],[121.42759,28.506422],[121.4309,28.509588],[121.432705,28.509641],[121.434889,28.507074],[121.44113,28.50488],[121.450068,28.498455],[121.451342,28.496047],[121.4503,28.48776],[121.453097,28.486363],[121.456523,28.488212],[121.46384,28.485285],[121.466653,28.48478],[121.471536,28.485472],[121.474003,28.485006],[121.475228,28.487467],[121.481186,28.488332],[121.481782,28.485831],[121.478075,28.481467],[121.47781,28.479777],[121.479978,28.477702],[121.482378,28.477556],[121.485788,28.482066],[121.489843,28.481188],[121.487294,28.486044],[121.485507,28.490766],[121.49557,28.49618],[121.498947,28.496792],[121.506429,28.497165],[121.50666,28.495728],[121.514208,28.497165],[121.51684,28.496486],[121.516939,28.498003],[121.52174,28.498761],[121.522716,28.497324],[121.526606,28.499985],[121.528526,28.500277],[121.533608,28.498801],[121.536041,28.496433],[121.535975,28.492695],[121.537315,28.49054],[121.540295,28.489928],[121.542695,28.49058],[121.547147,28.493906],[121.550541,28.494065],[121.552808,28.492868],[121.556168,28.489383],[121.561151,28.488797],[121.566414,28.49054],[121.569079,28.494651],[121.57282,28.495675],[121.579441,28.494917],[121.584374,28.491591],[121.583711,28.491179],[121.589339,28.481746],[121.592898,28.481667],[121.596937,28.479272],[121.599883,28.479325],[121.609748,28.477143],[121.611966,28.476265],[121.613903,28.471688],[121.616286,28.469958],[121.615657,28.466778],[121.612479,28.467204],[121.614035,28.463319],[121.612347,28.45616],[121.612777,28.450344],[121.617627,28.444715],[121.623172,28.44357],[121.634163,28.443823],[121.654092,28.444609],[121.664503,28.444848],[121.675428,28.443318],[121.681933,28.44031],[121.687379,28.431858],[121.691831,28.418427],[121.692758,28.407338],[121.69064,28.402971],[121.68713,28.400881],[121.665861,28.394063],[121.658909,28.392386],[121.657121,28.390122],[121.657485,28.388005],[121.659918,28.384237],[121.658859,28.378417],[121.652503,28.370467],[121.646395,28.365126],[121.636547,28.359545],[121.634279,28.355842],[121.632988,28.350594],[121.634428,28.348063],[121.6385,28.347437],[121.643896,28.34813],[121.653264,28.35178],[121.660349,28.355629],[121.663742,28.35459],[121.664636,28.345985],[121.666457,28.344094],[121.672647,28.347784],[121.674435,28.347291],[121.674286,28.344134],[121.670628,28.342349],[121.67038,28.335728],[121.66932,28.333383],[121.656922,28.318594],[121.654125,28.31353],[121.650153,28.304242],[121.645667,28.296659],[121.644508,28.292688],[121.644707,28.288969],[121.648961,28.281332],[121.64901,28.27832],[121.645237,28.274734],[121.640287,28.273028],[121.637043,28.269762],[121.636116,28.264549],[121.634279,28.259443],[121.630869,28.25519],[121.627542,28.25203],[121.624199,28.250497],[121.616005,28.249617],[121.610328,28.248084],[121.594702,28.245737],[121.589306,28.243444],[121.585863,28.240324],[121.581957,28.23955],[121.57954,28.241857],[121.577471,28.250097],[121.571959,28.258723],[121.570685,28.263856],[121.570304,28.271375],[121.57143,28.279413],[121.569774,28.283491],[121.564362,28.288036],[121.538606,28.299192],[121.52596,28.303603],[121.511808,28.306215],[121.499328,28.305948],[121.494213,28.304456],[121.4888,28.301444],[121.484729,28.296553],[121.481269,28.289462],[121.477661,28.284331],[121.459751,28.271855],[121.457185,28.268375],[121.456126,28.264309],[121.457252,28.254257]]],[[[121.64335,28.350541],[121.647769,28.352766],[121.648597,28.356175],[121.653397,28.358187],[121.654853,28.361796],[121.657369,28.365206],[121.659091,28.364686],[121.65828,28.362862],[121.66164,28.3645],[121.662467,28.363248],[121.658098,28.36153],[121.657071,28.359346],[121.657783,28.356682],[121.655069,28.35459],[121.652073,28.353991],[121.649722,28.351074],[121.645121,28.348836],[121.642787,28.348916],[121.64335,28.350541]]],[[[121.687412,28.384516],[121.689315,28.386087],[121.693156,28.382186],[121.69534,28.381294],[121.695324,28.37859],[121.692858,28.37642],[121.69016,28.376779],[121.686104,28.374648],[121.690027,28.381587],[121.689133,28.384316],[121.687412,28.384516]]],[[[121.678573,28.278333],[121.67758,28.280759],[121.680063,28.282398],[121.677166,28.284224],[121.677183,28.285637],[121.680361,28.286437],[121.681834,28.288103],[121.687726,28.289516],[121.686187,28.28585],[121.686386,28.283358],[121.6892,28.283078],[121.689845,28.280679],[121.688405,28.278133],[121.689464,28.276427],[121.68766,28.273054],[121.685839,28.273787],[121.684995,28.276693],[121.679367,28.276427],[121.678573,28.278333]]],[[[121.679069,28.371039],[121.678159,28.372291],[121.68334,28.374209],[121.688438,28.373077],[121.690011,28.369468],[121.687346,28.366245],[121.682347,28.368309],[121.682959,28.370573],[121.679069,28.371039]]],[[[121.69352,28.265442],[121.69256,28.266949],[121.69443,28.268042],[121.700472,28.267442],[121.698982,28.264616],[121.694645,28.263109],[121.69352,28.265442]]],[[[121.647471,28.21836],[121.648564,28.221187],[121.653463,28.221721],[121.654853,28.219587],[121.651924,28.216506],[121.647752,28.215906],[121.647471,28.21836]]],[[[121.634593,28.225468],[121.632557,28.226428],[121.634908,28.229402],[121.644922,28.232816],[121.64671,28.230802],[121.641297,28.226788],[121.641479,28.225228],[121.644227,28.225188],[121.643979,28.222347],[121.638715,28.22068],[121.631813,28.221854],[121.634593,28.225468]]],[[[121.658611,28.290942],[121.657998,28.293421],[121.659753,28.29566],[121.664255,28.29622],[121.661673,28.291901],[121.664719,28.291288],[121.664818,28.289929],[121.661077,28.286663],[121.657601,28.28745],[121.658611,28.290942]]],[[[121.568748,28.245591],[121.566298,28.246057],[121.567159,28.247937],[121.571661,28.249124],[121.574012,28.248377],[121.572572,28.243644],[121.569841,28.243737],[121.568748,28.245591]]],[[[121.642406,28.250031],[121.64378,28.25131],[121.646329,28.249951],[121.642406,28.250031]]],[[[121.684946,28.269935],[121.684151,28.271028],[121.688868,28.273241],[121.690457,28.272414],[121.688852,28.268735],[121.684946,28.269935]]],[[[121.64709,28.296353],[121.649474,28.297992],[121.649226,28.300564],[121.65156,28.30187],[121.652702,28.299858],[121.655251,28.299858],[121.654555,28.296366],[121.651146,28.292395],[121.646975,28.291488],[121.645352,28.292754],[121.64709,28.296353]]],[[[121.559876,28.248191],[121.561995,28.249177],[121.565074,28.246924],[121.564478,28.245124],[121.559876,28.248191]]],[[[121.663179,28.211118],[121.667201,28.213398],[121.669122,28.212318],[121.666572,28.209664],[121.662749,28.20989],[121.663179,28.211118]]],[[[121.551848,28.276053],[121.553603,28.279013],[121.558022,28.278839],[121.554728,28.27608],[121.551848,28.276053]]],[[[121.724456,28.375328],[121.723198,28.377791],[121.72583,28.382093],[121.729058,28.383211],[121.732318,28.380282],[121.731491,28.376087],[121.728064,28.374742],[121.724456,28.375328]]],[[[121.733543,28.267255],[121.734702,28.269722],[121.738741,28.270055],[121.738443,28.266482],[121.73644,28.264429],[121.733543,28.267255]]],[[[121.683903,28.387166],[121.684863,28.389643],[121.68771,28.389283],[121.687908,28.386301],[121.683903,28.387166]]],[[[121.61147,28.247084],[121.612777,28.248497],[121.614482,28.247391],[121.613688,28.245471],[121.611602,28.245137],[121.61147,28.247084]]],[[[121.717438,28.400188],[121.718563,28.403743],[121.720897,28.404608],[121.722586,28.402239],[121.720351,28.399522],[121.717438,28.400188]]],[[[121.662865,28.299018],[121.662815,28.300271],[121.666208,28.300871],[121.665414,28.299098],[121.662865,28.299018]]],[[[121.592948,28.242777],[121.593924,28.244537],[121.596722,28.245631],[121.597632,28.24459],[121.594404,28.24199],[121.592948,28.242777]]]]}},{"type":"Feature","properties":{"adcode":331082,"name":"临海市","center":[121.131229,28.845441],"centroid":[121.228824,28.847925],"childrenNum":0,"level":"district","parent":{"adcode":331000},"subFeatureIndex":7,"acroutes":[100000,330000,331000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.205077,29.023929],[121.207047,29.022473],[121.211532,29.021547],[121.220504,29.020581],[121.224013,29.019747],[121.231428,29.013725],[121.229707,29.007186],[121.232504,29.007397],[121.238513,29.010654],[121.241542,29.010084],[121.245597,29.006908],[121.258193,29.004114],[121.266403,29.003347],[121.268439,29.006894],[121.272296,29.010376],[121.279099,29.012189],[121.281118,29.012136],[121.284594,29.010336],[121.284992,29.007318],[121.284147,29.001639],[121.282161,28.997178],[121.286266,28.993524],[121.289775,28.994927],[121.291944,28.992571],[121.296876,28.990015],[121.298101,28.987751],[121.296479,28.982019],[121.298482,28.979437],[121.299044,28.97614],[121.302189,28.972895],[121.307486,28.970287],[121.313379,28.96977],[121.318924,28.970062],[121.321489,28.969267],[121.324585,28.971174],[121.327581,28.970048],[121.330858,28.972485],[121.333986,28.970591],[121.336138,28.966354],[121.337876,28.959719],[121.341634,28.957746],[121.340012,28.952568],[121.340475,28.948833],[121.350125,28.942422],[121.35375,28.939058],[121.36249,28.941362],[121.365039,28.942899],[121.368962,28.946713],[121.369922,28.950488],[121.366677,28.95609],[121.369855,28.960024],[121.372769,28.96156],[121.379936,28.963758],[121.380432,28.970697],[121.379621,28.97267],[121.380316,28.976881],[121.381409,28.977887],[121.389073,28.977808],[121.390297,28.976656],[121.397316,28.975478],[121.400626,28.977821],[121.401967,28.97749],[121.401371,28.974829],[121.403639,28.972657],[121.41112,28.969691],[121.413934,28.967916],[121.415656,28.963851],[121.412428,28.961997],[121.41064,28.962249],[121.409134,28.959785],[121.412494,28.957574],[121.413918,28.959587],[121.4141,28.955415],[121.420075,28.951376],[121.426547,28.950382],[121.426282,28.946263],[121.427938,28.937349],[121.429709,28.933997],[121.435303,28.929282],[121.439143,28.924936],[121.441924,28.924221],[121.445864,28.924526],[121.449621,28.923121],[121.450896,28.924883],[121.453312,28.924181],[121.452865,28.919902],[121.453279,28.911198],[121.454901,28.907792],[121.454818,28.905142],[121.456242,28.90069],[121.458129,28.898769],[121.458212,28.896914],[121.455878,28.893163],[121.460744,28.891838],[121.464667,28.886511],[121.470444,28.885318],[121.472778,28.884139],[121.47968,28.882561],[121.478075,28.879526],[121.478141,28.876929],[121.480607,28.872422],[121.484977,28.869201],[121.486136,28.865609],[121.486069,28.859896],[121.481964,28.853148],[121.483868,28.852035],[121.491068,28.849582],[121.496977,28.84945],[121.501546,28.850961],[121.5058,28.84766],[121.506842,28.851757],[121.517221,28.851995],[121.520664,28.852777],[121.529602,28.85169],[121.53811,28.850113],[121.541354,28.84994],[121.545509,28.852446],[121.547247,28.851518],[121.553172,28.855256],[121.556086,28.853639],[121.559992,28.849423],[121.562326,28.847899],[121.567474,28.848774],[121.569609,28.850683],[121.576114,28.846414],[121.577554,28.843272],[121.575998,28.840076],[121.578166,28.839095],[121.58679,28.844306],[121.588528,28.843842],[121.588462,28.841694],[121.590697,28.840713],[121.590663,28.838591],[121.592749,28.840249],[121.595745,28.840196],[121.597185,28.842052],[121.600694,28.843086],[121.606041,28.840461],[121.604766,28.839493],[121.605974,28.837451],[121.608904,28.836364],[121.610659,28.83761],[121.617015,28.837292],[121.619233,28.835621],[121.62256,28.837146],[121.62357,28.838923],[121.627708,28.84172],[121.627757,28.843431],[121.632905,28.845552],[121.633931,28.848495],[121.637705,28.849529],[121.639791,28.851107],[121.641281,28.855217],[121.645005,28.856701],[121.652817,28.86097],[121.657932,28.864522],[121.660101,28.869679],[121.682214,28.865516],[121.687362,28.863343],[121.692195,28.855243],[121.702905,28.825252],[121.704775,28.816367],[121.704726,28.804657],[121.702706,28.795147],[121.699131,28.7874],[121.694579,28.772887],[121.692775,28.758677],[121.690656,28.730649],[121.689431,28.719154],[121.685194,28.708574],[121.679152,28.698896],[121.66735,28.691926],[121.646329,28.682817],[121.612479,28.677041],[121.587419,28.672207],[121.55261,28.672539],[121.546651,28.675275],[121.541338,28.678342],[121.537348,28.682459],[121.533359,28.691262],[121.531108,28.691249],[121.53043,28.693121],[121.538623,28.69652],[121.537613,28.698378],[121.538093,28.700808],[121.535908,28.701047],[121.532813,28.699812],[121.533773,28.697263],[121.531605,28.699215],[121.529056,28.697993],[121.524206,28.705348],[121.517287,28.717893],[121.514854,28.717906],[121.510418,28.722021],[121.509127,28.725526],[121.505816,28.728738],[121.502936,28.726149],[121.496365,28.727623],[121.491929,28.729547],[121.490307,28.728897],[121.486202,28.731578],[121.484249,28.731976],[121.476237,28.72684],[121.472778,28.726667],[121.461688,28.731259],[121.460512,28.735812],[121.461704,28.739315],[121.459172,28.743045],[121.454173,28.743761],[121.453627,28.74757],[121.450283,28.750503],[121.44732,28.74818],[121.440054,28.746177],[121.438746,28.747729],[121.438332,28.750755],[121.434856,28.754669],[121.434227,28.759446],[121.432208,28.760906],[121.425306,28.757429],[121.417013,28.757761],[121.415838,28.75658],[121.412593,28.75654],[121.409895,28.759048],[121.404086,28.761211],[121.401404,28.762936],[121.399616,28.765735],[121.398358,28.770167],[121.391009,28.772966],[121.387268,28.775872],[121.381492,28.77554],[121.379323,28.773802],[121.375947,28.773895],[121.373629,28.772104],[121.375649,28.770246],[121.374142,28.765006],[121.375731,28.761092],[121.374755,28.755691],[121.378595,28.755757],[121.380929,28.753939],[121.380134,28.751498],[121.381508,28.750224],[121.380813,28.74753],[121.378165,28.745407],[121.372454,28.745977],[121.368829,28.747411],[121.36585,28.750556],[121.359692,28.748141],[121.355571,28.747358],[121.35188,28.745035],[121.349976,28.742408],[121.346136,28.740523],[121.345706,28.738572],[121.349463,28.730675],[121.354048,28.727795],[121.354975,28.725512],[121.354842,28.719752],[121.353005,28.712252],[121.352244,28.705269],[121.350439,28.702587],[121.349711,28.699626],[121.350886,28.695471],[121.348652,28.695444],[121.335509,28.693599],[121.329981,28.692019],[121.327283,28.689376],[121.325462,28.682273],[121.32293,28.678661],[121.322003,28.678873],[121.321026,28.683069],[121.311475,28.689217],[121.307387,28.692205],[121.304887,28.692815],[121.300898,28.691381],[121.296529,28.692948],[121.295055,28.696586],[121.294178,28.701817],[121.295188,28.70657],[121.290189,28.708242],[121.286845,28.710459],[121.281085,28.708654],[121.279993,28.70645],[121.271419,28.703463],[121.267016,28.69948],[121.257829,28.697794],[121.253492,28.694382],[121.244306,28.700025],[121.237586,28.700755],[121.234821,28.706822],[121.234341,28.711136],[121.232736,28.715464],[121.230617,28.716473],[121.223351,28.717814],[121.218253,28.722818],[121.21433,28.723827],[121.211714,28.722499],[121.210175,28.720017],[121.205408,28.716858],[121.203306,28.718982],[121.204018,28.724026],[121.200442,28.725725],[121.192514,28.722499],[121.171641,28.717137],[121.170317,28.71565],[121.169738,28.711548],[121.16651,28.709822],[121.163133,28.706503],[121.157952,28.707884],[121.150256,28.704817],[121.14534,28.704764],[121.142344,28.703397],[121.139248,28.695962],[121.135176,28.691952],[121.129764,28.696573],[121.126073,28.696945],[121.114089,28.689602],[121.104306,28.682472],[121.099109,28.681556],[121.093613,28.684596],[121.088731,28.681927],[121.08739,28.679006],[121.084079,28.674557],[121.077425,28.67311],[121.072493,28.670069],[121.06948,28.669817],[121.066286,28.672937],[121.063174,28.673947],[121.058456,28.670109],[121.057066,28.664425],[121.050644,28.665261],[121.047813,28.665022],[121.045248,28.668648],[121.04245,28.669418],[121.037782,28.66635],[121.03573,28.666935],[121.033446,28.669777],[121.034472,28.675553],[121.03184,28.677957],[121.029341,28.682286],[121.024127,28.682591],[121.020071,28.679444],[121.013881,28.678077],[121.009362,28.679205],[121.003983,28.684158],[120.998355,28.687491],[120.9942,28.688567],[120.991916,28.692802],[120.983243,28.69806],[120.979601,28.700874],[120.973361,28.702308],[120.970994,28.703543],[120.963131,28.705986],[120.960251,28.709942],[120.957106,28.713101],[120.954276,28.719526],[120.950254,28.721145],[120.944047,28.719314],[120.940289,28.720853],[120.936797,28.723973],[120.93155,28.722128],[120.925988,28.722871],[120.923456,28.725605],[120.92132,28.731963],[120.918291,28.735307],[120.919483,28.7397],[120.925872,28.74396],[120.929547,28.747026],[120.933023,28.751352],[120.935655,28.752374],[120.935274,28.754245],[120.925889,28.759725],[120.922926,28.764249],[120.923571,28.76953],[120.92228,28.772383],[120.921569,28.776694],[120.918639,28.780648],[120.916603,28.788594],[120.916421,28.792149],[120.922529,28.80219],[120.924085,28.808463],[120.91945,28.821022],[120.918837,28.82374],[120.91695,28.826379],[120.911008,28.830888],[120.910147,28.833248],[120.910876,28.840103],[120.909618,28.851889],[120.908509,28.854832],[120.90591,28.854434],[120.899422,28.859923],[120.900746,28.862746],[120.902848,28.862693],[120.905397,28.86606],[120.902136,28.87164],[120.898975,28.872648],[120.896161,28.875073],[120.890963,28.875762],[120.887405,28.87506],[120.883151,28.876239],[120.875702,28.885702],[120.879675,28.888393],[120.88032,28.890195],[120.878731,28.896847],[120.876513,28.899895],[120.871961,28.900491],[120.868734,28.904891],[120.867327,28.911701],[120.863602,28.914457],[120.861666,28.917173],[120.852959,28.91818],[120.843756,28.920525],[120.84263,28.924261],[120.839552,28.930818],[120.839452,28.932924],[120.833941,28.939667],[120.831358,28.940263],[120.827121,28.945177],[120.827022,28.951309],[120.830911,28.953932],[120.835066,28.953005],[120.840263,28.956859],[120.842134,28.959401],[120.844418,28.967943],[120.846371,28.970115],[120.853207,28.973147],[120.85569,28.975478],[120.864248,28.978629],[120.867889,28.980496],[120.872226,28.984786],[120.873981,28.9875],[120.875487,28.991803],[120.879013,28.996966],[120.884657,29.000818],[120.891178,29.003453],[120.895797,29.007],[120.901987,29.007569],[120.909369,29.009052],[120.91268,29.008827],[120.923456,29.012785],[120.928272,29.013989],[120.930623,29.016107],[120.931351,29.018291],[120.93433,29.022566],[120.937012,29.028178],[120.944047,29.035337],[120.94835,29.036528],[120.954342,29.037164],[120.96285,29.030136],[120.965018,29.034146],[120.969852,29.038394],[120.973791,29.036925],[120.97596,29.034279],[120.979932,29.03359],[120.990195,29.033895],[120.997213,29.031275],[121.001847,29.032717],[121.007442,29.03236],[121.009975,29.033365],[121.012441,29.032505],[121.014096,29.029872],[121.017489,29.028561],[121.02368,29.023294],[121.028017,29.021507],[121.03712,29.024565],[121.040977,29.027212],[121.045612,29.028667],[121.060741,29.037084],[121.062379,29.03977],[121.063488,29.04509],[121.07044,29.056919],[121.073387,29.059843],[121.082358,29.06618],[121.08835,29.066022],[121.092869,29.061828],[121.10232,29.058374],[121.114221,29.055517],[121.116853,29.053982],[121.119915,29.049973],[121.119965,29.04468],[121.124119,29.042893],[121.130906,29.042986],[121.133786,29.044111],[121.138868,29.04771],[121.142575,29.047353],[121.147558,29.043039],[121.149527,29.039876],[121.150239,29.036806],[121.151679,29.036872],[121.152921,29.041014],[121.157158,29.044614],[121.160899,29.044667],[121.169258,29.042827],[121.173627,29.040803],[121.179206,29.03539],[121.181208,29.032624],[121.187382,29.028535],[121.191487,29.029144],[121.193888,29.027238],[121.193755,29.025465],[121.195609,29.023545],[121.203124,29.02422],[121.205077,29.023929]]],[[[121.849095,28.733675],[121.84979,28.735931],[121.85555,28.736077],[121.855484,28.738506],[121.850634,28.738572],[121.849741,28.742275],[121.846993,28.741439],[121.84792,28.744757],[121.85075,28.746004],[121.851181,28.74887],[121.853432,28.747862],[121.854359,28.750078],[121.859738,28.75167],[121.859589,28.748724],[121.860715,28.747822],[121.871805,28.748432],[121.875827,28.74903],[121.883739,28.753993],[121.886421,28.754324],[121.886652,28.756885],[121.889483,28.757005],[121.893008,28.762525],[121.89756,28.761503],[121.903883,28.761357],[121.909544,28.761874],[121.911332,28.759353],[121.908071,28.75788],[121.902956,28.758186],[121.899811,28.756673],[121.897395,28.757562],[121.894134,28.754736],[121.900887,28.753754],[121.901516,28.752626],[121.897163,28.750529],[121.893008,28.752082],[121.882812,28.749667],[121.880528,28.748698],[121.877267,28.743602],[121.873394,28.741266],[121.869471,28.741266],[121.866094,28.738041],[121.867038,28.735679],[121.869934,28.73552],[121.87149,28.734193],[121.871523,28.731259],[121.873112,28.730131],[121.873079,28.727516],[121.870597,28.726627],[121.869355,28.724769],[121.866905,28.724809],[121.865565,28.721982],[121.86242,28.722101],[121.857653,28.723853],[121.857884,28.726415],[121.859622,28.727888],[121.856991,28.72903],[121.853465,28.728831],[121.849939,28.727596],[121.846794,28.729043],[121.849161,28.730091],[121.851992,28.732839],[121.849095,28.733675]]],[[[121.749632,28.690598],[121.752429,28.688646],[121.756915,28.690359],[121.759679,28.688381],[121.761864,28.68931],[121.764612,28.693878],[121.763188,28.697728],[121.767045,28.698604],[121.766946,28.701419],[121.76347,28.703503],[121.765274,28.705123],[121.7711,28.704685],[121.776,28.703649],[121.779029,28.701472],[121.780486,28.699175],[121.779095,28.697409],[121.775437,28.697542],[121.772739,28.694209],[121.777854,28.693904],[121.780121,28.690638],[121.783117,28.692072],[121.785964,28.690664],[121.78762,28.692085],[121.790003,28.690903],[121.793281,28.69482],[121.796906,28.697515],[121.79967,28.698591],[121.80159,28.702441],[121.805298,28.70418],[121.808178,28.703888],[121.808575,28.699454],[121.805893,28.698644],[121.800067,28.695298],[121.797866,28.688726],[121.798793,28.686084],[121.796078,28.684503],[121.796128,28.68218],[121.794025,28.679604],[121.790682,28.679418],[121.788861,28.677904],[121.785534,28.680201],[121.782968,28.679152],[121.781661,28.680055],[121.782323,28.683096],[121.780155,28.684557],[121.778698,28.687624],[121.771216,28.690611],[121.768237,28.690744],[121.763718,28.685712],[121.761202,28.684689],[121.758041,28.684782],[121.753704,28.683122],[121.752264,28.683362],[121.746338,28.688938],[121.74652,28.690903],[121.752711,28.694595],[121.758041,28.695179],[121.758074,28.692922],[121.753356,28.691421],[121.750592,28.6917],[121.749632,28.690598]]],[[[121.919906,28.7073],[121.92128,28.708933],[121.919376,28.71338],[121.916314,28.712809],[121.91355,28.715052],[121.915933,28.71569],[121.917208,28.717628],[121.920187,28.717203],[121.922637,28.718982],[121.922753,28.717535],[121.927934,28.716991],[121.933562,28.720415],[121.938593,28.720004],[121.941722,28.721052],[121.942516,28.719526],[121.940977,28.716367],[121.938461,28.716606],[121.934704,28.714349],[121.934687,28.710499],[121.932221,28.709636],[121.929092,28.710951],[121.92752,28.708123],[121.924408,28.707645],[121.923316,28.705667],[121.920634,28.704924],[121.919906,28.7073]]],[[[121.837326,28.770525],[121.838171,28.772329],[121.836813,28.77363],[121.839097,28.775792],[121.842855,28.77489],[121.845106,28.775898],[121.845371,28.778392],[121.848118,28.779626],[121.846877,28.781576],[121.850519,28.784734],[121.849906,28.786684],[121.847274,28.786458],[121.844411,28.788833],[121.844361,28.791738],[121.846761,28.793873],[121.852968,28.793091],[121.855567,28.795505],[121.855401,28.797189],[121.853084,28.798197],[121.853117,28.799789],[121.855368,28.800253],[121.85704,28.803635],[121.850419,28.80597],[121.850717,28.808264],[121.858513,28.81036],[121.861575,28.813768],[121.864472,28.812787],[121.866839,28.813184],[121.867154,28.810399],[121.870828,28.809776],[121.872384,28.807866],[121.868859,28.803901],[121.869752,28.802309],[121.874602,28.80215],[121.876224,28.800014],[121.87389,28.798224],[121.865482,28.799378],[121.863479,28.792587],[121.865598,28.791486],[121.864869,28.789907],[121.861973,28.7887],[121.861112,28.78675],[121.863181,28.784256],[121.862701,28.78208],[121.856279,28.777835],[121.853068,28.777265],[121.851545,28.775659],[121.84691,28.773271],[121.843252,28.770631],[121.837326,28.770525]]],[[[121.894448,28.66971],[121.895144,28.671065],[121.897908,28.670162],[121.898686,28.66724],[121.894779,28.668024],[121.894448,28.66971]]],[[[121.8243,28.763812],[121.82473,28.75857],[121.821105,28.754789],[121.817232,28.758279],[121.820675,28.76076],[121.820062,28.763851],[121.820774,28.765988],[121.824084,28.76693],[121.82569,28.770578],[121.827527,28.768707],[121.832361,28.768827],[121.832112,28.767328],[121.828272,28.766518],[121.8243,28.763812]]],[[[121.803493,28.751126],[121.805033,28.754908],[121.807267,28.7552],[121.811074,28.757602],[121.815163,28.757907],[121.81508,28.756235],[121.810164,28.754961],[121.808757,28.752413],[121.806158,28.75106],[121.803493,28.751126]]],[[[121.845487,28.837902],[121.845106,28.839069],[121.847854,28.841137],[121.851032,28.841773],[121.854326,28.8442],[121.856345,28.843258],[121.854061,28.839427],[121.849608,28.839135],[121.845487,28.837902]]],[[[121.861758,28.72092],[121.863512,28.718517],[121.861443,28.718291],[121.859986,28.72007],[121.861758,28.72092]]],[[[121.92176,28.704685],[121.923994,28.702428],[121.922885,28.70114],[121.919409,28.701392],[121.919211,28.703224],[121.92176,28.704685]]],[[[121.861542,28.701127],[121.86722,28.702706],[121.86818,28.701432],[121.864952,28.700078],[121.861542,28.701127]]],[[[121.832907,28.658422],[121.835439,28.659564],[121.836615,28.658448],[121.835125,28.656549],[121.832675,28.656535],[121.832907,28.658422]]],[[[121.859871,28.690532],[121.85906,28.692045],[121.861178,28.693254],[121.861923,28.690731],[121.859871,28.690532]]],[[[121.775205,28.7874],[121.779724,28.789058],[121.782157,28.787307],[121.780999,28.784853],[121.778284,28.783487],[121.775272,28.784415],[121.775205,28.7874]]],[[[121.792933,28.798741],[121.791327,28.796526],[121.789291,28.796712],[121.788629,28.798662],[121.790086,28.800068],[121.792933,28.798741]]],[[[121.731607,28.711402],[121.729471,28.712942],[121.729951,28.714309],[121.736523,28.714322],[121.734255,28.712079],[121.731607,28.711402]]],[[[121.755773,28.717415],[121.758322,28.719154],[121.757809,28.716937],[121.755773,28.717415]]]]}},{"type":"Feature","properties":{"adcode":331083,"name":"玉环县","center":[121.232337,28.12842],"centroid":[121.257196,28.169948],"childrenNum":0,"level":"district","parent":{"adcode":331000},"subFeatureIndex":8,"acroutes":[100000,330000,331000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.173892,28.277493],[121.185264,28.276547],[121.194881,28.273108],[121.200641,28.271775],[121.212029,28.271015],[121.218766,28.271855],[121.225834,28.276173],[121.229723,28.27692],[121.242419,28.27684],[121.251804,28.275307],[121.258889,28.272294],[121.263838,28.271441],[121.265956,28.271801],[121.269962,28.277133],[121.272743,28.278426],[121.275441,28.2774],[121.280969,28.278799],[121.283916,28.282132],[121.286978,28.284011],[121.29964,28.286344],[121.302653,28.287263],[121.305367,28.289622],[121.30934,28.295513],[121.312965,28.296979],[121.316904,28.297646],[121.320496,28.297192],[121.326389,28.300071],[121.328988,28.303829],[121.33253,28.303829],[121.3369,28.306748],[121.339366,28.306281],[121.340707,28.304669],[121.343785,28.306468],[121.347973,28.310319],[121.352856,28.313157],[121.356994,28.317981],[121.36201,28.319966],[121.363698,28.317608],[121.360305,28.310172],[121.360768,28.308027],[121.359345,28.30147],[121.357259,28.298179],[121.357987,28.296446],[121.355819,28.294274],[121.363036,28.292261],[121.363052,28.289702],[121.361645,28.287383],[121.35759,28.285424],[121.355041,28.282492],[121.353154,28.276787],[121.354478,28.274334],[121.359411,28.270948],[121.369706,28.270055],[121.373298,28.268549],[121.379605,28.268642],[121.383528,28.267815],[121.384024,28.264656],[121.386689,28.25995],[121.388543,28.254497],[121.389354,28.254004],[121.396422,28.255964],[121.398342,28.25591],[121.399236,28.258817],[121.397928,28.260736],[121.398839,28.26239],[121.404284,28.265562],[121.406254,28.265002],[121.407545,28.258323],[121.409498,28.258097],[121.411286,28.26027],[121.412958,28.260336],[121.415143,28.256457],[121.416649,28.25563],[121.423535,28.25619],[121.435038,28.254924],[121.449439,28.25475],[121.457252,28.254257],[121.45606,28.250337],[121.44641,28.238577],[121.433449,28.229016],[121.419562,28.218],[121.413537,28.212265],[121.402364,28.197325],[121.39955,28.183451],[121.393442,28.171657],[121.392913,28.166213],[121.391324,28.159114],[121.388444,28.15527],[121.3778,28.150279],[121.376211,28.14733],[121.375003,28.136532],[121.372123,28.131287],[121.368879,28.129018],[121.361232,28.126134],[121.354727,28.125213],[121.34981,28.1252],[121.343156,28.127389],[121.340889,28.129832],[121.33776,28.135959],[121.332778,28.136586],[121.328143,28.134183],[121.310101,28.110702],[121.308496,28.106257],[121.308049,28.100556],[121.308198,28.093759],[121.307453,28.088485],[121.301163,28.070964],[121.297836,28.06446],[121.294741,28.061361],[121.291099,28.058864],[121.28226,28.054629],[121.276748,28.04934],[121.269797,28.041365],[121.265112,28.036983],[121.261173,28.034418],[121.238695,28.028833],[121.176143,28.022313],[121.166659,28.0225],[121.159128,28.023368],[121.149809,28.025266],[121.145025,28.027337],[121.141003,28.031398],[121.137825,28.040323],[121.135872,28.050582],[121.136319,28.063418],[121.135276,28.07051],[121.123822,28.113479],[121.12109,28.125253],[121.116423,28.132502],[121.108395,28.138988],[121.123275,28.148104],[121.131303,28.158553],[121.13463,28.162276],[121.136815,28.168561],[121.138371,28.179996],[121.142724,28.209464],[121.143817,28.222708],[121.146382,28.236123],[121.145985,28.246297],[121.146763,28.258577],[121.147392,28.263136],[121.150454,28.269975],[121.15537,28.274054],[121.160634,28.27528],[121.173892,28.277493]]],[[[121.387335,28.119273],[121.386457,28.121369],[121.38851,28.12237],[121.39048,28.121462],[121.393343,28.122971],[121.394949,28.125854],[121.393277,28.126615],[121.399401,28.127589],[121.39912,28.128671],[121.403788,28.129952],[121.403606,28.128244],[121.400527,28.125747],[121.401868,28.123184],[121.399021,28.123051],[121.39672,28.121115],[121.392996,28.120902],[121.389884,28.119006],[121.387335,28.119273]]],[[[121.410657,28.079418],[121.404218,28.077615],[121.402795,28.082222],[121.403159,28.085561],[121.405079,28.087003],[121.403788,28.089273],[121.407181,28.089887],[121.407098,28.091489],[121.403755,28.090955],[121.400808,28.092504],[121.402662,28.095816],[121.40781,28.100609],[121.410508,28.10161],[121.409895,28.098299],[121.411236,28.092184],[121.410276,28.08974],[121.415076,28.089206],[121.413156,28.085761],[121.413719,28.083037],[121.410657,28.079418]]],[[[121.486748,28.096844],[121.488867,28.09922],[121.491763,28.09902],[121.490952,28.094467],[121.487261,28.095348],[121.486748,28.096844]]],[[[121.413272,28.039721],[121.417063,28.040176],[121.420224,28.038853],[121.417791,28.036341],[121.418768,28.035206],[121.415672,28.03208],[121.414547,28.035647],[121.412064,28.03745],[121.413272,28.039721]]],[[[121.412792,28.05129],[121.40968,28.049607],[121.40786,28.050849],[121.405195,28.050168],[121.405675,28.053147],[121.407711,28.05304],[121.410243,28.05503],[121.41597,28.057074],[121.417758,28.0569],[121.418801,28.053935],[121.418354,28.05109],[121.415573,28.050208],[121.415192,28.052131],[121.412792,28.05129]]],[[[121.410624,28.110609],[121.412991,28.110115],[121.410392,28.108086],[121.410624,28.110609]]],[[[121.502059,28.072233],[121.500801,28.072821],[121.500834,28.075799],[121.503102,28.082276],[121.504856,28.085748],[121.508365,28.089727],[121.511709,28.092197],[121.519869,28.095348],[121.521955,28.099861],[121.525646,28.102478],[121.528807,28.101744],[121.532383,28.09627],[121.532283,28.093412],[121.527103,28.086362],[121.523809,28.085961],[121.521144,28.088418],[121.516128,28.087216],[121.512288,28.080927],[121.51108,28.077081],[121.505717,28.073488],[121.502059,28.072233]]],[[[121.346335,28.087777],[121.342776,28.090915],[121.342974,28.093118],[121.345557,28.096056],[121.354346,28.097752],[121.359461,28.098086],[121.363019,28.101143],[121.364807,28.104494],[121.369557,28.108954],[121.373977,28.109888],[121.374374,28.107765],[121.37209,28.099888],[121.370203,28.097405],[121.365833,28.096376],[121.364327,28.094013],[121.360238,28.091957],[121.356796,28.089139],[121.354064,28.088565],[121.349728,28.08966],[121.346335,28.087777]]],[[[121.485622,28.128818],[121.489148,28.129205],[121.487476,28.126815],[121.485622,28.128818]]],[[[121.145141,28.013227],[121.145538,28.015445],[121.14966,28.019787],[121.158151,28.021845],[121.1656,28.021952],[121.166229,28.020656],[121.161428,28.017636],[121.155817,28.0163],[121.154427,28.015057],[121.151149,28.014643],[121.14769,28.012265],[121.145141,28.013227]]],[[[121.3972,28.129912],[121.399948,28.132728],[121.401172,28.130673],[121.3972,28.129912]]],[[[121.529668,28.067385],[121.530347,28.071245],[121.532317,28.073568],[121.533608,28.072807],[121.531141,28.067438],[121.529668,28.067385]]],[[[121.417178,28.206342],[121.419612,28.208583],[121.423948,28.208317],[121.423452,28.204889],[121.421068,28.204222],[121.417162,28.205369],[121.417178,28.206342]]],[[[121.531787,28.067545],[121.533442,28.069321],[121.534253,28.068026],[121.531787,28.067545]]],[[[121.418635,28.210557],[121.41895,28.212878],[121.421449,28.213118],[121.420837,28.210264],[121.418635,28.210557]]]]}}]}'
    );
  },
  8107: function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "84e6": function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "88a3": function (t, e, n) {},
  "8fef": function (t) {
    t.exports = JSON.parse(
      '{"data":{"name":"台州市","maps":{"三门县":4,"临海市":18,"仙居县":4,"天台县":7,"市属":23,"椒江区":18,"温岭市":11,"玉环县":8,"路桥区":4,"黄岩区":17},"charts":{"[\\"nation\\", \\"市属\\"]":3,"[\\"nation\\", \\"椒江区\\"]":4,"[\\"province\\", \\"椒江区\\"]":5,"[\\"province\\", \\"黄岩区\\"]":5,"[\\"nation\\", \\"黄岩区\\"]":3,"[\\"province\\", \\"路桥区\\"]":4,"[\\"nation\\", \\"临海市\\"]":3,"[\\"province\\", \\"临海市\\"]":3,"[\\"nation\\", \\"温岭市\\"]":1,"[\\"province\\", \\"温岭市\\"]":8,"[\\"nation\\", \\"玉环县\\"]":1,"[\\"province\\", \\"玉环县\\"]":4,"[\\"province\\", \\"天台县\\"]":4,"[\\"nation\\", \\"天台县\\"]":1,"[\\"nation\\", \\"仙居县\\"]":3,"[\\"province\\", \\"仙居县\\"]":2,"[\\"nation\\", \\"三门县\\"]":1,"[\\"province\\", \\"三门县\\"]":2},"countByTopic":{"互联网+":{"在线博士后":0,"相关平台":0},"生命健康":{"在线博士后":0,"相关平台":0},"新材料":{"在线博士后":0,"相关平台":0}},"countByType":{"nation":20,"province":37},"infos":[{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/84\\">精密传动机械系统开发</a>","unit_name":"浙江双环传动机械股份有限公司","study_area":"机械工程","contact":"张靖","phone":"0576-87239827","email":"zhangjing@gearsnet.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/120\\">高结晶度（β-晶）聚丙烯(PPH &amp; PPR)的研究/ＰＰＲ、ＰＥ等聚烯烃的结晶改性增强技术研究/石墨烯改性的复合材料研究/海绵城市用集水与排水管道新材料及新工艺的开发等等</a>","unit_name":"浙江伟星新型建材股份有限公司","study_area":"高分子类、材料类","contact":"陈晖","phone":"0576-85122537","email":"2329289@qq.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/185\\">超临界注塑模板工艺</a>","unit_name":"浙江嘉仁模具有限公司","study_area":"材料、化学工程","contact":"王宏雪","phone":"0576-84019555","email":"whx108@126.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/241\\">基于多电压复合驱动的数字阀高频响、低能耗控制方法</a>","unit_name":"浙江海宏液压科技股份有限公司","study_area":"液压、机械、机电一体化","contact":"","phone":"0576-85183759","email":"js1@cn-hydraulic.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/268\\">注塑发泡制品结构与性能的工艺调控</a>","unit_name":"浙江嘉仁模具有限公司","study_area":"材料加工工程","contact":"王宏雪","phone":"0576-84019555","email":"whx108@126.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/269\\">汽车自动变速器</a>","unit_name":"浙江中马传动股份有限公司","study_area":"车辆工程","contact":"陈云","phone":"0576-86146516  ","email":"250900552@qq.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/271\\">医药中间体及原料药工艺研究</a>","unit_name":"浙江九洲药业股份有限公司","study_area":"化学、有机合成","contact":"孙芬侠","phone":"0576-88827582","email":"fenxia.sun@jiuzhoupharma.com.cn"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/285\\">医药、农药、功能化学品中间体绿色合成工艺开发研究</a>","unit_name":"联化科技股份有限公司","study_area":"化学、化工、应用化学、合成相关方向","contact":"陈幺","phone":"057681101313,15967682594","email":"yao.chen@lianhetech.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/286\\">天然药物治疗免疫性疾病、抗癫痫临床前研究</a>","unit_name":"浙江永宁药业股份有限公司","study_area":"中药类、天然药物、临床医学","contact":"牟玉洁","phone":"0576-84082126","email":"mouyujie@ynpharm.cn,1505921468@qq.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/287\\">阴道缓释制剂开发</a>","unit_name":"浙江仙琚制药股份有限公司","study_area":"药剂学、有机合成","contact":"李尼斯娲","phone":"0576-87731030","email":"lnsw@xjpharma.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/288\\">埃格列净的合成工艺研究</a>","unit_name":"浙江天宇药业股份有限公司","study_area":"有机合成、化工制药、药物分析等方向","contact":"刘仁江","phone":"0576-84160783","email":"lrj@tianyupharm.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/289\\">连续流反应器在甾体激素药物产业化中应用研究</a>","unit_name":"浙江仙居君业药业有限公司","study_area":"化学工程","contact":"泮宝峰","phone":"18657689984","email":"panbaofeng@junyepharm.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/290\\">智慧管网系统关键技术的研究与应用</a>","unit_name":"公元塑业集团有限公司","study_area":"市政工程等","contact":"陈卫","phone":"0576-84277100","email":"wchen@era.com.cn"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/291\\">新型复合管道关键技术的研究与应用</a>","unit_name":"永高股份有限公司","study_area":"高分子材料","contact":"陈卫","phone":"0576-84277100","email":"wchen@era.com.cn"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/292\\">净水用高分子分离膜的制备</a>","unit_name":"浙江伟星新型建材股份有限公司","study_area":"高分子材料","contact":"陈晖","phone":"0576-85122537","email":"2329289@qq.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/293\\">负氧离子新材料开发及在管道中的应用</a>","unit_name":"浙江伟星新型建材股份有限公司","study_area":"高分子材料","contact":"陈晖","phone":"0576-85122537","email":"2329289@qq.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/294\\">相变储能材料</a>","unit_name":"浙江伟星新型建材股份有限公司","study_area":"高分子材料","contact":"陈晖","phone":"0576-85122537","email":"2329289@qq.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/295\\">碘系列造影剂质量研究、工艺研究</a>","unit_name":"浙江司太立制药股份有限公司","study_area":"有机合成，药学、分析化学","contact":"徐豪城","phone":"057687788636","email":"xuhaocheng@starrypharma.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/296\\">小分子RET抑制剂的设计和合成</a>","unit_name":"浙江海正集团有限公司","study_area":"生物、药化","contact":"王晓丽","phone":"0576－88827838","email":"xiaoli.wang@hisunpharm.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/297\\">PI3Kγ磷脂酰肌醇-3-激酶γ抑制剂</a>","unit_name":"浙江海正集团有限公司","study_area":"生物、药化","contact":"王晓丽","phone":"0576－88827838","email":"xiaoli.wang@hisunpharm.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/298\\">半合成抗生素项目产业化开发</a>","unit_name":"浙江海正集团有限公司","study_area":"化学、制药工程、药学","contact":"王晓丽","phone":"0576－88827838","email":"xiaoli.wang@hisunpharm.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/299\\">微生物产品产生菌底盘的定向改造及产业化应用</a>","unit_name":"浙江海正集团有限公司","study_area":"化学、制药工程、药学、分子生物学","contact":"王晓丽","phone":"0576－88827838","email":"xiaoli.wang@hisunpharm.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/300\\">铝合金阳极氧化表面处理技术</a>","unit_name":"浙江伟星实业发展股份有限公司","study_area":"表面处理方向","contact":"季文晴","phone":"0576-85979958","email":"836797547@qq.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/301\\">泵用永磁辅助同步磁阻电机驱动系统</a>","unit_name":"新界泵业（浙江）有限公司","study_area":"控制工程","contact":"张明丰","phone":"0576-86336098","email":"zmf@shimge.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/304\\">头孢类抗生素及其中间体工艺开发</a>","unit_name":"浙江华方药业股份有限公司","study_area":"药学、药物合成、有机合成","contact":"章炳鑫","phone":"","email":"zbx@huafangpharm.com"},{"name":"<a target=\\"_blank\\" href=\\"http://tzbsh.openxy.com/projects/305\\">现场制造工艺流程的优化与网络化管理</a>","unit_name":"三变科技股份有限公司","study_area":"机电工程","contact":"卢谷峰","phone":"0576-83381302","email":"657608123@qq.com"}],"units":[]}}'
    );
  },
  9867: function (t, e, n) {},
  b286: function (t, e, n) {},
  b38c: function (t, e, n) {
    "use strict";
    n("6b12");
  },
  b4f2: function (t, e, n) {
    "use strict";
    n("6338");
  },
  bdd6: function (t, e, n) {},
  c14d: function (t, e, n) {
    "use strict";
    n("767f");
  },
  c1c1: function (t, e, n) {},
  cecf: function (t, e, n) {},
  d8e9: function (t, e, n) {
    "use strict";
    n("b286");
  },
  dcb6: function (t, e, n) {
    "use strict";
    n("c1c1");
  },
  e1e2: function (t, e, n) {
    "use strict";
    n("4244");
  },
  f622: function (t, e, n) {
    "use strict";
    n("5b48");
  },
});
//# sourceMappingURL=app.4519eb36.js.map
