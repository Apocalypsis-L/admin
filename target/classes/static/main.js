webpackJsonp([3], [function (e, t, n) {
    "use strict";
    n(1), n(11);
    var a = n(32),
        i = n(192)([["/place/:geohash", n(252)], ["/premium/:geohash", n(272)], ["/place/:geohash/search/:keyword", n(276)], ["/activity", n(280)], ["/activity/:id", n(280)], ["/shop/:id", n(284)], ["/shop/:id/:action", n(284)], ["/cart/checkout", n(361)], ["/order/:orderId/pay", n(396)], ["/order/:orderId/success/offline", n(402)], ["/order/:orderId/success/online", n(402)]]);
    a.config(i).config(["$routeProvider", function (e) {
        e.when("/", {redirectTo: "/place"}), e.when("/:page", {
            template: "<div></div>",
            controller: ["$rootScope", "$location", "$routeParams", function (e, t, n) {
                var a = ["place", "premium"], i = n.page, r = localStorage.getItem("GEOHASH");
                if (-1 !== a.indexOf(i)) {
                    if (r) {
                        var o = Geohash.decode(r)[0], s = Geohash.decode(r)[1],
                            c = "?latitude=" + o + "&longitude=" + s;
                        return t.url(n.page + "/" + r + c)
                    }
                    location.href = "/home"
                }
            }]
        })
    }])
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    e.exports = n.p + "media/img/default-avatar.38e40d.png"
}, , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    var a = n(253);
    n(256);
    var i = ["$scope", "$routeParams", "$rootScope", "RestaurantStream", "Zero", function (e, t, n, a, i) {
        n.geohash = e.geohash = t.geohash, e.searchRestaurants = [], e.searchFoods = [];
        var r = function () {
            localStorage.removeItem("GEOHASH"), location.href = "/home"
        };
        if (/[\Wailo_]|^$/.test(n.geohash || "")) return r();
        localStorage.setItem("GEOHASH", e.geohash), e.rstStream = a({geohash: e.geohash});
        var o = n.$watch("place", function (t) {
            t.$promise.then(function () {
                var a = t.name;
                a && (n.SEO.title = a + "附近美食_外卖商家_" + t.adInfo + "-饿了么网上订餐", n.SEO.keywords = a + "美食，" + a + "商家，" + a + "外卖", n.SEO["mobile-agent"] = "format=html5; url=http://m.ele.me/place/" + t.geohash, e.rstStream.$promise.then(function () {
                    var t = e.rstStream.restaurants.slice(0, 5).map(function (e) {
                        return e.name
                    });
                    n.SEO.description = a + "附近的商家美食有" + t.join("、") + "等，更多美食外卖，尽在饿了么。"
                }), o())
            })
        }), s = function (e, t) {
            var a = Geohash.decode(n.geohash), r = a[0], o = a[1];
            i.bidding.post({
                latitude: r,
                longitude: o,
                bidding: e.replace(/'/g, '"'),
                user_id: n.user.user_id || 886,
                rstId: t
            }).$promise.then(function () {
            })["catch"](function () {
            })
        };
        angular.$(".place-rstbox").on("click", function (e) {
            var t = angular.element(e.target).parents(".rstblock")[0], n = t.getAttribute("data-bidding"),
                a = t.getAttribute("data-rst-id");
            n && s(n, a)
        }), e.activityClick = function (e) {
            var t = e.currentTarget;
            if (!t) for (t = e.target; "HTML" !== t.nodeName && "A" !== t.nodeName;) t = t.parentNode;
            t && "#" === t.getAttribute("href") && e.preventDefault()
        }, i.content.query({geohash: n.geohash, consumer: 3}).$promise.then(function (t) {
            e.activities = t.map(function (e) {
                switch (e.type) {
                    case 1:
                        e.href = e.link;
                        break;
                    case 2:
                        e.href = "/activity/" + e.template_id
                }
                return e
            })
        })["catch"](function (e) {
            return Error(e)
        })
    }];
    angular.module("eleme.page").factory("RestaurantStream", n(258)).factory("Search", n(259)).factory("RstPopOver", n(260).RstPopOver).directive("rstPopover", n(260).rstPopover).directive("excavator", n(264)).directive("autocomplete", n(268).autocomplete).directive("searchInput", n(268).searchInput), e.exports = {
        templateUrl: a,
        controller: i
    }
}, function (e, t, n) {
    var a = "/entry/main/place/place.html",
        i = '<div class="container clearfix"><div location></div><div search-input></div></div><div class="place-ad container" role=banner ng-if=activities><div carousel class=activity-carousel><div slide ng-repeat="activity in activities"><a rel=nofollow ng-href={{activity.href}} target=_blank ng-click=activityClick($event) ubt-visit=693 ubt-click=694 ng-attr-ubt-data-url={{activity.href}}><img ng-src="{{activity.image_path | imgOptimize}}" alt={{activity.name}}></a></div></div></div><div class="place-tab clearfix container"><div class=place-fetchtakeout show-fetch-takeout-dialog><img src=' + n(254) + ' alt="谁去拿外卖"></div></div><div ng-show=!recentBoughtOnly class=container><excavator></excavator><div class="place-rstbox clearfix"><rst-view data="filteredRestaurants = (rstStream.restaurants | filter: rstStream.filter | filter: otherFilter | orderBy: [ \'-is_opening\', rstStream.orderBy || \'index\' ])"></rst-view><div ng-show="rstStream.status === \'LOADING\'" loading content=正在载入更多商家... type=normal></div><div id=fetchMoreRst ng-show="rstStream.status === \'NEED_USER_ACTION\'">点击加载更多商家...</div><div class=place-rstbox-nodata ng-show="rstStream.status === \'COMPLETE\' && !filteredRestaurants.length"><img class=nodata width=100 src=' + n(255) + " alt=找不到商家><div class=typo-small>附近没有找到符合条件的商家，换个筛选条件试试吧</div></div></div></div>";
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(a, i)
    }]), e.exports = a
}, function (e, t, n) {
    e.exports = n.p + "media/img/takeout.408a87.png"
}, function (e, t, n) {
    e.exports = n.p + "media/img/icon-restaurant.b3a359.png"
}, function (e, t) {
}, , function (e, t) {
    "use strict";
    var n = ["Zero", "$rootScope", "$q", "RestaurantWrapper", function (e, t, n, a) {
        return function (t) {
            var i = n.defer(), r = [], o = {$promise: i.promise, status: "LOADING", restaurants: r, sign: t.sign},
                s = Geohash.decode(t.geohash)[0], c = Geohash.decode(t.geohash)[1],
                u = document.querySelector("#fetchMoreRst"), l = function () {
                    var n = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                        l = arguments.length <= 1 || void 0 === arguments[1] ? 24 : arguments[1];
                    return o.status = "LOADING", e.shoppingRestaurants.query(angular.extend({
                        latitude: s,
                        longitude: c,
                        limit: l,
                        offset: n,
                        "extras[]": ["activities"]
                    }, t), function (e) {
                        o.status = "LOADING", a(e), angular.forEach(e, function (e) {
                            return e.index = r.push(e)
                        });
                        var n = {list: e, sign: t.sign};
                        i.notify(n), e.length < l && (o.status = "COMPLETE", i.resolve(o), u.removeEventListener("click", h, !1))
                    }, function (e) {
                        o.status = "ERROR", i.reject(e)
                    })
                };
            l();
            var d = 2, p = {1: !0}, h = function () {
                "LOADING" !== o.status || p[d] || (p[d] = !0, l(24 * (d - 1)).$promise.then(function () {
                    d++, d % 6 === 0 && (o.status = "NEED_USER_ACTION")
                }))
            }, m = function () {
                o.status = "LOADING", h()
            };
            return angular.$(window).on("scroll", h), u.addEventListener("click", m, !1), o
        }
    }];
    e.exports = n
}, function (e, t) {
    "use strict";
    var n = ["Zero", "$q", "RestaurantWrapper", function (e, t, n) {
        return function (a, i, r) {
            var o = t.defer();
            r = r || {};
            var s = Geohash.decode(a), c = s[0], u = s[1], l = {
                latitude: c,
                longitude: u,
                limit: 100,
                offset: 0,
                action: "search",
                "extras[]": "activity",
                keyword: i
            };
            return r.outsideRst && (l.extra = "outside"), e.shoppingRestaurants.get(l).$promise.then(function (e) {
                var t = e.restaurant_with_foods.map(function (e) {
                    return e.restaurant
                });
                n(t), o.resolve(e)
            })["catch"](function () {
                return {}
            }), o.$promise = o.promise, o
        }
    }];
    e.exports = n
}, function (e, t, n) {
    "use strict";
    var a = n(261);
    n(262);
    var i = ["$http", "$templateCache", "templateParser", "templateBuilder", "Popover", function (e, t, n, i, r) {
        var o, s, c = "placeleft placeright alignbottom", u = e.get(a, {cache: t});
        return u.then(function (e) {
            o = e.data, s || (s = n.parse(o))
        }), r.extend({
            defaults: {
                attachToBody: !0,
                showDelay: 300,
                animation: !1,
                placement: "right",
                alignment: "start"
            }, render: function () {
                var e = document.createElement("div");
                return e.className = "rstpopover", this.dom = e, e
            }, afterLocate: function (e) {
                var t = e.placement, n = e.alignment, a = angular.$(this.dom);
                a.removeClass(c).addClass("place" + t), "end" === n && a.addClass("alignbottom")
            }, willShow: function () {
                var e = this.get("target");
                return e && e.parentNode
            }, refresh: function () {
                var e = this.dom;
                this.rstChanged && (e.innerHTML = i.build(s, {restaurant: this.rst}), this.rstChanged = !1);
                var t = this.get("target");
                t && (e.style.width = t.clientWidth + "px")
            }, setRst: function (e) {
                var t = this.rst;
                t !== e && (this.rstChanged = !0), this.rst = e
            }, reset: function () {
                this.options.target = null, this.showTimer = null, this.visible = !1
            }
        })
    }], r = ["RstPopOver", function (e) {
        return {
            restrict: "A", link: function (t, n) {
                var a = new e({target: n[0]});
                a.setRst(t.restaurant), t.$on("$destroy", function () {
                    a.destroy()
                })
            }
        }
    }];
    e.exports = {rstPopover: r, RstPopOver: i}
}, function (e, t) {
    var n = "/entry/main/place/_block/rst-popover/rst-popover.html",
        a = '<div class=rstpopover-arrow></div><div class=rstpopover-title>{{restaurant.name}}</div><div class=rstpopover-flavors>{{restaurant.flavors}}</div><ul class=rstpopover-activities><li ng-repeat="activity in restaurant.activities"><i ng-bind=activity.icon_name ng-style=activity.style></i>{{activity.description || activity.name}} <span ng-bind="activity.tips !== undefined ? \'(手机客户端专享)\' : \'\'"></span></li></ul><ul class=rstpopover-delivery><li>{{restaurant.piecewise_agent_fee.tips}}</li><li ng-if=restaurant.order_lead_time_text>平均<span class="color-stress plrtiny">{{restaurant.order_lead_time_text}}</span>分钟送达</li></ul><div class=rstpopover-notice>{{restaurant.promotion_info}}</div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    n(265);
    var a = n(267), i = ["Zero", "RestaurantStream", function (e, t) {
        return {
            restrict: "E", replace: !0, templateUrl: a, link: function (n, a, i) {
                var r = Geohash.decode(n.geohash), o = {latitude: r[0], longitude: r[1]};
                e.rstCategory.query(o, function (e) {
                    return n.rstCategories = e
                }), n.rstStream = n.pumStream || n.rstStream, n.clickedCategory = n.pumStream ? -10001 : -1e4;
                var s, c = function () {
                    n.rstStream.restaurants = [], n.rstStream.status = "LOADING";
                    var e = n.clickedCategory, a = n.clickedActivity, r = {geohash: n.geohash};
                    isNaN(a) || (r["activity_types[]"] = a), isNaN(e) || (r["restaurant_category_ids[]"] = [e]), -10001 === e && (r.is_premium = 1, delete r.restaurant_category_id), s = (new Date).getTime(), r.sign = s, "true" === i.preminum && (r.is_premium = 1), t(r).$promise.then(function (e) {
                        e.sign === s && (n.rstStream.status = "COMPLETE")
                    }, null, function (e) {
                        n.rstStream.status = "PART_COMPLETE", e.sign === s && (n.rstStream.restaurants = n.rstStream.restaurants.concat(e.list))
                    })
                };
                n.option = {}, n.changeOrder = function (e) {
                    switch (n.rstStream.orderBy = e, e) {
                        case"distance":
                            n.otherOrder = "距离最近";
                            break;
                        case"order_lead_time":
                            n.otherOrder = "配送速度";
                            break;
                        case"minimum_order_amount":
                            n.otherOrder = "起送金额";
                            break;
                        default:
                            n.otherOrder = ""
                    }
                }, n.changeCategory = function (e) {
                    n.clickedCategory !== e.id && (n.clickedCategory = e.id, e.sub_categories && e.sub_categories.length ? (n.subCategories = e.sub_categories, n.activeCategory = e.id) : e.id < 0 && (n.subCategories = null, n.activeCategory = null), c())
                };
                var u = [];
                n.rstStream.filter = function (e) {
                    if (u[e.index] = !1, n.option.mimOrder && e.minimum_order_amount > n.option.mimOrder) return !1;
                    if (n.option.freeDeliver && 0 !== e.delivery_fee) return !1;
                    if (n.option.cash && !e.is_time_ensure) return !1;
                    if (n.option.receipt && !e.is_support_invoice) return !1;
                    if (n.option.payOnline && !e.is_online_payment) return !1;
                    if (n.option.eps) {
                        if (!e.delivery_mode) return !1;
                        if (1 !== e.delivery_mode.id) return !1
                    }
                    return n.option["new"] && !e.is_new ? !1 : (u[e.index] = !0, !0)
                }
            }
        }
    }];
    e.exports = i
}, function (e, t) {
}, , function (e, t) {
    var n = "/entry/main/place/_block/excavator/excavator.html",
        a = '<div class="excavator container"><div class=excavator-filter ng-if=rstCategories.length><span class=excavator-filter-name>商家分类:</span> <a class=excavator-filter-item href=javascript: ng-repeat="category in rstCategories" ng-class="{\'focus\': clickedCategory === category.id && (!clickedCategory || clickedCategory < 0) , \'active\': activeCategory === category.id, \'premium\': category.id === -10001 && !pumStream}" ng-bind=category.name ng-click=changeCategory(category) ubt-click=380></a><div ng-show=subCategories class=excavator-filter-subbox><a class=excavator-filter-item href=javascript: ng-repeat="subitem in subCategories" ng-class="{\'focus\': clickedCategory === subitem.id}" ng-bind=subitem.name ng-click=changeCategory(subitem)></a></div></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t, n) {
    "use strict";
    var a = n(269);
    n(270);
    var i = ["Search", "$rootScope", "$location", function (e, t, n) {
        return {
            restrict: "A", link: function (a, i) {
                var r = i.parent().find(".searchbox"), o = i.parent().find(".place-search-btn");
                if (0 !== r.length) {
                    var s, c = function () {
                        return (a.searchRestaurants || []).length + (a.searchFoods || []).length
                    }, u = function () {
                        var e = c();
                        e > 0 && r.css("display", "block")
                    }, l = function (e) {
                        e > 0 ? setTimeout(function () {
                            r.css("display", "")
                        }, e) : r.css("display", "")
                    }, d = function () {
                        var e = c();
                        e > 0 ? u() : l()
                    }, p = t.searchText, h = null, m = 300;
                    i.on("focus", function () {
                        void 0 === p && (p = i.val()), u()
                    }), i.on("blur", function () {
                        l(300)
                    }), o.on("click", function () {
                        p && (n.path(encodeURI("/place/" + t.geohash + "/search/" + p)), a.$apply())
                    });
                    var f = function (e) {
                        var t = r.find("li");
                        t.removeClass("active");
                        var n = c();
                        "next" === e ? null === h ? h = 0 : (h++, h >= n && (h = 0)) : "prev" === e && (null === h ? h = n - 1 : (h--, 0 > h && (h = n - 1))), angular.$(t[h]).addClass("active")
                    };
                    i.bind("keyup", function (n) {
                        var c = n.which || n.keyCode;
                        if (40 === c) return void f("next");
                        if (38 === c) return void f("prev");
                        if (13 === c) {
                            var u = r.find("li.active a");
                            return void(u.length > 0 ? u[0].click() : o[0].click())
                        }
                        if (27 === c) return l(), void i[0].blur();
                        var g = i.val();
                        if (g) {
                            if (p === g) return;
                            s && (clearTimeout(s), s = null), s = setTimeout(function () {
                                e(t.geohash, g, {limit: 10}).$promise.then(function (e) {
                                    return g = i.val(), "" !== g && (a.searchRestaurants = e[0], a.searchFoods = e[1]), h = null, d(), e
                                }), s = null
                            }, m)
                        } else s && (clearTimeout(s), s = null), a.searchRestaurants = [], a.searchFoods = [], d();
                        p = g, t.searchText = g
                    })
                }
            }
        }
    }], r = function () {
        return {restrict: "EA", replace: !0, templateUrl: a}
    };
    e.exports = {autocomplete: i, searchInput: r}
}, function (e, t) {
    var n = "/entry/main/place/_block/search-input/search-input.html",
        a = '<div class=place-search role=search><a class="place-search-btn icon-search" ubt-click=403 ng-attr-ubt-data-keyword={{searchText}} title=搜索商家或美食></a><label for=globalsearch>搜索商家或美食</label><input id=globalsearch class=place-search-input ng-model=searchText autocomplete placeholder=搜索商家,美食...><div class=searchbox><div class="searchbox-list searchbox-rstlist" ng-show="searchRestaurants && searchRestaurants.length > 0" ng-class="{ \'show-separator\': searchFoods && searchFoods.length > 0 }"><ul><li ng-repeat="restaurant in searchRestaurants | orderBy: [ \'-is_opening\', \'order_lead_time\' ] | limitTo: 5"><a ng-href=shop/{{restaurant.id}} ubt-click=404><span class=time ng-if=restaurant.order_lead_time_text>{{restaurant.order_lead_time_text}}分钟</span> <span class=name>{{restaurant.name}}</span></a></li></ul></div><div class="searchbox-list searchbox-foodlist" ng-show="searchFoods && searchFoods.length > 0"><ul><li ng-repeat="food in searchFoods  | limitTo: 5"><span class=price>&yen; {{food.price}}</span> <span class=food-wrapper><a ng-href=shop/{{food.restaurant.id}}#food/{{food.id}} class=name ubt-click=404>{{food.name}}</a> <a ng-href=shop/{{food.restaurant.id}} class=restaurant ubt-click=404>{{food.restaurant.name}}</a></span></li></ul></div></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    var a = n(273);
    n(274), e.exports = {
        templateUrl: a,
        controller: ["$scope", "$routeParams", "$rootScope", "RestaurantStream", function (e, t, n, a) {
            return n.geohash = e.geohash = t.geohash, /[\Wailo_]|^$/.test(n.geohash || "") ? (localStorage.removeItem("GEOHASH"), void(location.href = "/home")) : (localStorage.setItem("GEOHASH", e.geohash), void(e.pumStream = a({
                is_premium: 1,
                geohash: e.geohash
            })))
        }]
    }
}, function (e, t, n) {
    var a = "/entry/main/place/premium/premium.html",
        i = '<div class="container clearfix"><div search-input></div><div location><i class=icon-arrow-right></i>品牌商家</div></div><div class="place-tab clearfix container premium"><span class=premium-title>品牌商家</span> <span class=premium-desc>吃的更安心, 服务更贴心</span></div><excavator preminum=true></excavator><div class="place-rstbox premium-rstbox container clearfix"><rst-view data="filteredRestaurants = (pumStream.restaurants | filter: rstStream.filter | filter: otherFilter | orderBy: [ \'-is_opening\', pumStream.orderBy || \'index\' ])"></rst-view><div loading type=normal ng-if="pumStream.status === \'LOADING\'"></div><div id=fetchMoreRst ng-hide="rstStream.status === \'LOADING\' || pumStream.status === \'COMPLETE\'">点击加载更多商家...</div><div class=place-rstbox-nodata ng-if="pumStream.status === \'COMPLETE\' && !filteredRestaurants.length"><img class=nodata width=100 src=' + n(255) + " alt=找不到商家><div class=typo-small>附近没有符合您的筛选的品牌馆商家，换个筛选条件试试吧</div></div></div>";
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(a, i)
    }]), e.exports = a
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    var a = n(277);
    n(278);
    var i = ["$scope", "$rootScope", "$routeParams", "Search", "RestaurantWrapper", "Zero", "UBT", "LocalCart", function (e, t, n, a, i, r, o, s) {
        var c = n.geohash, u = n.keyword;
        t.searchText = u, e.keyword = u, e.geohash = c, e.status = "LOADING", e.resultFilter = "", e.outsideRstsVisible = !1, e.hideOutsideRsts = function () {
            e.outsideRstsVisible = !1
        }, e.setCart = function (e, t) {
            var n = new s(e);
            n.setEntity(t)
        }, a(c, u, {hasOutside: 1}).$promise.then(function (t) {
            var n = t.restaurant_with_foods;
            n.forEach(function (e) {
                return e.restaurant.limitTo = 3
            }), e.rstGroups = n, e.status = "COMPLETE"
        }), e.rstUbtClick = function (e, t) {
            for (var n = e.target; n && "A" !== n.tagName;) n = n.parentNode;
            o.send("EVENT", {id: t, params: {restaurant_id: n.getAttribute("data-rst-id")}})
        }
    }];
    e.exports = {templateUrl: a, controller: i}
}, function (e, t, n) {
    var a = "/entry/main/place/search/search.html",
        i = '<div class="container clearfix"><div class=search-location location><i class=icon-arrow-right></i>搜索结果</div><div search-input></div></div><div ng-show=!outsideRstsVisible class=container><div class=search-loading ng-if="status === \'LOADING\'"><img src=' + n(119) + " alt=正在加载></div><div class=search-nodata ng-if=\"status === 'COMPLETE' && !rstGroups.length\" ubt-visit=506 ng-attr-ubt-data-keyword={{keyword}}><img class=nodata width=100 src=" + n(255) + ' alt=找不到商家><div class=typo-small>附近没有符合您的关键字的商家和美食，换个关键字试试吧</div></div><div class=search-outsidetip ng-show="outsideRst.name && resultFilter != \'food\'" ng-class="{ standalone: rstGroups.length === 0}">另有<b>{{outsideRst.name}}</b>等 <span class=color-stress>{{outsideRsts.length}}</span> 家与 <span class=color-stress>「{{keyword}}」</span>相关的商家不在配送范围内 <a href=javascript: ng-click="outsideRstsVisible = true" ubt-click=513>立即查看</a></div><table ng-repeat="group in rstGroups | orderBy: [ \'-is_opening\', \'status\' ] track by group.restaurant.id" class="typo-table search-foodtable"><tr><th colspan=4><div ng-if="group.restaurant.status === 5" class="search-rststatus search-rststatus-bookonly" ng-bind="\'可预订，\' + group.restaurant.next_time + \'后送餐\'"></div><div ng-if=!group.restaurant.is_opening class="search-rststatus search-rststatus-relaxing" ng-bind="group.restaurant.status === 2 ? \'商家繁忙,不接受新单\' : \'商家休息,暂不接单\'"></div><h4 class=typo-h5><a ng-href="{{\'/shop/\' + group.restaurant.id}}">{{group.restaurant.name}}</a><div class=rstblock-activity><i ng-repeat="activity in group.restaurant.activities" ng-bind=activity.icon_name ng-style="activity.icon_color ? {background: (\'#\' + activity.icon_color)} : \'\'"></i></div></h4><span rate-star rating=group.restaurant.rating></span> <small class=search-sales>月售<span>{{group.restaurant.recent_order_num}}</span></small> <small>{{group.restaurant.delivery_text}}</small> <small ng-if=group.restaurant.order_lead_time_text>平均<span class=highlight>{{group.restaurant.order_lead_time_text}}</span>分钟送达</small><tr ng-repeat="food in group.foods | limitTo: group.restaurant.limitTo track by $index"><td><a ng-if=group.restaurant.is_opening ng-href=/shop/{{group.restaurant.id}}#{{food.id}} ubt-click=510 ubt-data-restaurant_id={{group.restaurant.id}} ubt-data-dish_id={{food.id}}><span>{{food.name}}<br><small>{{food.description}}</small></span></a> <span ng-if=!group.restaurant.is_opening>{{food.name}}<br><small>{{food.description}}</small></span><td class=search-col2><a ng-if=group.restaurant.is_opening ng-href=/shop/{{group.restaurant.id}}#{{food.id}}>&yen; {{food.price}}</a> <span ng-if=!group.restaurant.is_opening>&yen; {{food.price}}</span><td class=search-col3><small ng-if=!group.restaurant.is_opening ng-bind="group.restaurant.status === 2 ? \'商家繁忙\' : \'商家休息\'"></small> <a class="btn btn-sm" ng-class="{ \'bookonly\': group.restaurant.status === 5 }" ng-if=group.restaurant.is_opening ng-href=/shop/{{group.restaurant.id}}#{{food.id}} ng-click="setCart(group.restaurant.id, food.id)" ng-bind="group.restaurant.status === 1 ? \'去购买\' : \'可预订\'" ubt-click=511 ubt-data-restaurant_id={{food.restaurant.id}} ubt-data-dish_id={{food.id}}></a><td class=search-col4><span rate-star rating=food.rating></span> <span class=search-food-ratingcount ng-if="food.rating_count > 0">({{food.rating_count}})</span><div>月售{{food.month_sales}}份</div><tr ng-if="group.restaurant.limitTo === 3 && group.foods.length > 3" class=search-foodtable-expandrow><td colspan=4>本商家还有<strong class=highlight>{{group.foods.length - 3}}</strong>份相关美食， <a class=search-foodtable-showmore ng-click="group.restaurant.limitTo = group.foods.length" href=JavaScript: ubt-click=512 ubt-data-restaurant_id={{group.restaurant.id}}>显示全部相关美食<i class=icon-arrow-down></i></a></table></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(a, i)
    }]), e.exports = a
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    var a = n(281);
    n(282);
    var i = ["$scope", "$routeParams", "Zero", "notifyServerError", function (e, t, n, a) {
        var i = t.id;
        i && n.template.get({id: i}).$promise.then(function (t) {
            return e.activity = t
        })["catch"](function (e) {
            return a(e)
        }), e.geohash && n.content.query({geohash: e.geohash, consumer: 3}, function (t) {
            e.activities = t, t.forEach(function (e) {
                e.href = 2 === e.type ? "/activity/" + e.template_id : e.link, e.target = 2 === e.type ? "" : "_blank"
            })
        })
    }];
    e.exports = {templateUrl: a, controller: i}
}, function (e, t) {
    var n = "/entry/main/activity/activity.html",
        a = '<div class="container clearfix"><div location ng-if=geohash><i class=icon-arrow-right></i>{{activity.title}}</div></div><div class=container><div class=activity><div class=activity-banner ng-if=activity.header_image_url><img ng-src="{{activity.header_image_url | imgOptimize}}" alt={{activitie.title}}></div><div class="activity-content typo"><div ng-bind-html="activity.content | toTrusted"></div></div><div class=activity-list><h1>活动列表</h1><ul><li ng-repeat="act in activities" ng-class="{active: act.id === activity.id}"><a ng-href={{act.href}} target={{act.target}}>{{act.title}}</a></li></ul></div></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    var a = n(285);
    n(286);
    var i = n(31);
    angular.module("eleme.page").factory("localCartView", n(288)).factory("CartButtonView", n(289).CartButtonView).factory("CartVirtualButtonView", n(289).CartVirtualButtonView).directive("shopCart", n(290)).directive("shopCartbutton", n(295)).directive("shopCartHelper", n(299)).directive("shopCarthelperbutton", n(303)).directive("shopGroupswitcher", n(307)).directive("shopSpecmenu", n(311)).directive("shopGuide", n(316)).directive("shopNav", n(322)).directive("shopMenu", n(326)).directive("shopMenuItem", n(330)).directive("shopIteminfo", n(332)).directive("commentItem", n(336)).directive("itemRatingList", n(340)).directive("shopRate", n(344)).directive("shopBulletin", n(348)).directive("shopInfo", n(353)).directive("sideTools", n(357));
    var r = {},
        o = ["$rootScope", "$scope", "$routeParams", "$location", "$q", "PlaceStorage", "Zero", "notifyServerError", "setFootPrint", function (e, t, n, a, o, s, c, u, l) {
            e.layoutState = {type: "shop", hideSidebar: !0}, t.$on("$destroy", function () {
                return e.layoutState = {}
            });
            var d = n.id;
            if (t.shopAction = n.action || "menu", r.id !== d) {
                r.id = d;
                var p = {id: d, "extras[]": ["activities", "license", "identification", "albums", "flavors"]};
                t.geohash && (p.latitude = i.decode(t.geohash)[0], p.longitude = i.decode(t.geohash)[1]), r.promise = c.shoppingRestaurant(d).get(p).$promise
            }
            var h = function () {
                return c.restaurant.get({version: "v3", nameForUrl: d, geohash: t.geohash}).$promise.then(function (e) {
                    a.url("/shop/" + e.id)
                })
            };
            t.shopCache = r, r.promise.then(function (a) {
                if (656683 === a.id) {
                    var r = {
                        name: "叮当快药",
                        address: "上海市普陀区大渡河路718号",
                        description: "如需咨询用药信息，请拔打药师电话：400－631－3888",
                        image_path: "http://fuss10.elemecdn.com/1/8a/5026ac398ff30789eb16081e799acjpeg.jpeg",
                        license: {business_license_image: "http://fuss10.elemecdn.com/8/3d/2a234e5103a60607fbad591fed055jpeg.jpeg"}
                    };
                    angular.extend(a, r)
                }
                if (l(a), a.tab = n.action || "index", a.filter = "default", a.displayType = "grid", t.shop = a, t.SEO.title = a.name + "外卖_" + a.name + "菜单|电话_" + a.name + "网上订餐 - " + a.address, t.SEO.keywords = a.name + "外卖，" + a.name + "菜单，" + a.name + "电话", t.SEO["mobile-agent"] = "format=html5;url=https://h5.ele.me/shop/#id=" + a.id, !localStorage.getItem("GEOHASH")) {
                    var o = i.encode(a.latitude, a.longitude);
                    try {
                        localStorage.setItem("GEOHASH", o)
                    } catch (c) {
                    }
                    e.place = s(o)
                }
            })["catch"](function (e) {
                return 404 === e.status ? h() : void 0
            })
        }];
    e.exports = {templateUrl: a, controller: o}
}, function (e, t) {
    var n = "/entry/main/shop/shop.html",
        a = '<div shop-guide data=shop isdisabled=shop.disabled></div><div shop-nav data=shop filter-data=shop.filter display-type=shop.displayType shop-action=shopAction></div><div class="shopmain clearfix container"><div ng-if="shopAction === \'menu\'" shop-menu shop-cache=shopCache filter-data=shop.filter display-type=shop.displayType class=shopmenu perf-click=desktop/201></div><div ng-if="shopAction === \'rate\'" shop-rate class=shoprate perf-click=desktop/202></div><div ng-if="shopAction === \'info\'" shop-info data=shop class=shopinfo perf-click=desktop/203></div><div shop-bulletin data=shop></div></div><div side-tools></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t) {
    "use strict";

    function n(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }

        return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    e.exports = ["LocalCart", "$timeout", "$q", "$document", "$rootScope", "$sce", function (e, t, r, o, s, c) {
        var u = function () {
            function o() {
                a(this, o), this.currentGroupIndex = 0, this.$expanded = !1, this.vm = {}
            }

            return i(o, [{
                key: "init", value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? -1 : arguments[0],
                        n = arguments.length <= 1 || void 0 === arguments[1] ? -1 : arguments[1],
                        a = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                        i = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3],
                        r = arguments.length <= 4 || void 0 === arguments[4] ? [] : arguments[4],
                        o = arguments.length <= 5 || void 0 === arguments[5] ? {} : arguments[5], c = this,
                        u = arguments.length <= 6 || void 0 === arguments[6] ? 0 : arguments[6],
                        l = arguments.length <= 7 || void 0 === arguments[7] ? {} : arguments[7];
                    return this.$localCart = new e(t), this.$restaurantStatus = n, this.$minimumAmount = a, this.$menuMap = i, this.$menuArray = r, this.$piecewiseAgentFee = l, this.$el = o, this.$basket = o.find("#shopbasket"), this.$helper = o.find("#shophelper"), this.cartHelper = {group: []}, this.$deliveryFee = u, this.currentGroupIndex = 0, this.$expanded = !1, this.vm = this.updateVM(), s.$$postDigest(function () {
                        return c.toggleCart(44)
                    }), this
                }
            }, {
                key: "filterEntities", value: function (e) {
                    return this.vm.groups.map(function (t) {
                        return t.filter(function (t) {
                            return t.id === e
                        })
                    }).reduce(function (e, t) {
                        return e.push(t[0] || {}), e
                    }, [])
                }
            }, {
                key: "findMinPurchase", value: function (e) {
                    if (this.cacheMins && this.cacheMins[e]) return this.cacheMins[e];
                    var t = window.localStorage.getItem("CART_RECORD"), n = {};
                    try {
                        n = JSON.parse(t || "{}")
                    } catch (a) {
                    }
                    return n && n[e] ? (this.cacheMins = n, n[e]) : 1
                }
            }, {
                key: "updateVM", value: function () {
                    var e, t = this, a = [], i = this.$localCart.groups.map(function (e, n) {
                            return e.entities.reduce(function (e, i) {
                                var r, o = t.$menuMap[i.id];
                                if (!o) return e;
                                for (var s = 1; s <= i.quantity; s++) a.push(o);
                                var c = [i.id, i.quantity, n, o.name, o.original_price || o.price, i.min_purchase],
                                    u = (r = t.$localCart).setEntity.apply(r, c);
                                return e.concat([u.entity])
                            }, [])
                        }), r = (e = []).concat.apply(e, n(i)), o = this.$piecewiseAgentFee.rules || [], s = 1 !== o.length,
                        u = r.reduce(function (e, t) {
                            return e + t.quantity
                        }, 0), l = r.reduce(function (e, t) {
                            return e + t.quantity * t.price
                        }, 0).toFixed(2), d = 0;
                    s || (d = 1 * (this.$minimumAmount - l).toFixed(2));
                    var p = this.setCheckoutButton(this.$restaurantStatus, !u, d);
                    if (this.cartHelper.show = 20 > d && l < this.$minimumAmount && d < .3 * this.$minimumAmount, this.cartHelper.show && !this.cartHelper.group.length) {
                        var h, m = (h = []).concat.apply(h, n(this.$menuArray.map(function (e) {
                            return e.specfoods
                        }))).filter(function (e) {
                            return e.stock > 0
                        }), f = m.filter(function (e) {
                            return e.price >= d && e.price <= d + 5
                        }).sort(function (e, t) {
                            return e.price - t.price
                        }), g = m.filter(function (e) {
                            return e.price < d || e.price > d + 5
                        }).sort(function (e, t) {
                            return e.price - t.price
                        });
                        this.cartHelper.group = f.concat(g)
                    }
                    var v = parseInt(l, 10), y = o.filter(function (e) {
                        return v >= e.price
                    }).pop(), b = o.filter(function (e) {
                        return v < e.price
                    }).shift(), _ = o.indexOf(b) === o.length - 1, k = "";
                    if (0 !== v && s) if (b) {
                        var w = b.price - l, x = y.fee - b.fee, $ = "减配送费&yen;" + x.toFixed(2);
                        _ && ($ = 0 === b.fee ? "免配送费" : "配送费&yen;" + b.fee), k = "再买&yen;" + w.toFixed(2) + "<br>" + $
                    } else k = 0 === y.fee ? "免配送费" : "配送费&yen;" + y.fee;
                    s || (k = "配送费&yen;" + this.$deliveryFee), k = c.trustAsHtml(k);
                    var C = [], S = a.reduce(function (e, t) {
                        return e + (t.packing_fee || 0)
                    }, 0);
                    return {
                        groups: i,
                        quantity: u,
                        total: l,
                        button: p,
                        cartHelper: this.cartHelper,
                        extras: C,
                        picewiseText: k,
                        packingFee: S
                    }
                }
            }, {
                key: "setCheckoutButton", value: function (e, t, n) {
                    return this.$localCart.getOrderState(t, n, e)
                }
            }, {
                key: "checkout", value: function () {
                    return this.$localCart.toCheckPage()
                }
            }, {
                key: "setEntity", value: function (e, t) {
                    angular.isNumber(t) || (t = 1);
                    var n = this.$localCart.setEntity(e.id || e.food_id, t, this.currentGroupIndex, e.name, e.price);
                    if (n.action) return this.viewDispatcher(n)
                }
            }, {
                key: "updateFromInput", value: function (e, t) {
                    var n = this.findMinPurchase(e.id);
                    if (t) {
                        var a = n > t ? n : t, i = Math.abs(parseInt(a, 10)) || 1;
                        return i > 65535 ? this.setEntity(e, n) : this.setEntity(e, i)
                    }
                }
            }, {
                key: "addEntity", value: function (e) {
                    var t = this.findMinPurchase(e.id), n = this.vm.groups.some(function (t) {
                        return t.some(function (t) {
                            var n = t.id;
                            return n === e.id
                        })
                    }), a = n ? +e.quantity + 1 : t;
                    return this.setEntity(e, a)
                }
            }, {
                key: "subEntity", value: function (e) {
                    var t = this.findMinPurchase(e.id), n = e.quantity <= t ? 0 : +e.quantity - 1;
                    return this.setEntity(e, n)
                }
            }, {
                key: "viewDispatcher", value: function (e) {
                    var n = this, a = e.entity, i = e.action;
                    return r.all().then(function () {
                        switch (i) {
                            case"ENTITY_ADD":
                                return r.all().then(function () {
                                    return n.vm = n.updateVM(), n.$expanded ? void 0 : (n.$basket.css({height: "auto"}), n.toggleCart())
                                });
                            case"ENTITY_CREATE":
                                return n.addAnimate().then(function () {
                                    return n.vm = n.updateVM(), n.$expanded = !1, t(function () {
                                        n.$basket.css({height: "auto"});
                                        var e = n.$basket.prop("offsetHeight");
                                        n.$basket.css({height: "99999px"}), n.toggleCart(e)
                                    }, 0)
                                });
                            case"ENTITY_SUB":
                                if (n.vm = n.updateVM(), n.$expanded) return;
                                return n.toggleCart();
                            case"ENTITY_DESTROY":
                                return n.destroyAnimate(a.id).then(function () {
                                    n.vm = n.updateVM()
                                });
                            default:
                                n.vm = n.updateVM()
                        }
                    }).then(function () {
                        s.$broadcast("cart:updateEntity", {entity: a, action: i})
                    })
                }
            }, {
                key: "addAnimate", value: function () {
                    return this.$basket.css({height: "99999px"}), r.all()
                }
            }, {
                key: "destroyAnimate", value: function () {
                    var e = this, t = arguments.length <= 0 || void 0 === arguments[0] ? -1 : arguments[0],
                        n = this.$el.find('[entityid="' + t + '"]'), a = n.prop("offsetHeight"),
                        i = this.$basket.prop("offsetHeight"), r = i - a;
                    return this.$basket.css({height: i + "px"}), n.remove(), this.$expanded = !1, this.toggleCart(r).then(function () {
                        e.$basket.css({height: "auto"})
                    })
                }
            }, {
                key: "toggleCart", value: function (e, t) {
                    var n = this, a = r.defer(), i = angular.extend({
                        duration: 250, complete: function () {
                            n.$expanded = !n.$expanded, n.$basket.css({height: "auto"}), a.resolve()
                        }
                    }, t);
                    if (this.$expanded) this.$basket.animate({top: "0px"}, i), this.$helper.removeClass("open"); else {
                        var o = e || this.$basket.prop("offsetHeight");
                        this.$basket.animate({top: "-" + o + "px"}, i)
                    }
                    return a.promise
                }
            }, {
                key: "changeGroup", value: function (e) {
                    var n = this;
                    return this.vm = this.updateVM(), this.$expanded = !1, this.currentGroupIndex = e, this.$basket.css({height: "99999px"}), t(function () {
                        n.$basket.css({height: "auto"});
                        var e = n.$basket.prop("offsetHeight");
                        n.$basket.css({height: "99999px"}), n.toggleCart(e)
                    }, 0)
                }
            }, {
                key: "createGroup", value: function () {
                    var e = this.$localCart.groups.length;
                    this.$localCart.createGroup(e), this.changeGroup(e)
                }
            }, {
                key: "clearGroup", value: function (e) {
                    var t = this, n = this.$localCart.clearGroup(e), a = n.group, i = n.action,
                        r = this.$basket[0].querySelectorAll("[entityid]"), o = this.$basket.prop("offsetHeight"),
                        c = [].slice.call(r).reduce(function (e, t) {
                            return e + angular.$(t).prop("offsetHeight")
                        }, 0), u = o - c;
                    return this.$basket.css({height: o + "px"}), this.$expanded = !1, this.toggleCart(u).then(function () {
                        t.vm = t.updateVM(), s.$broadcast("cart:clearGroup", {group: a, action: i})
                    })
                }
            }, {
                key: "removeGroup", value: function (e) {
                    var t = this;
                    return this.clearGroup(e).then(function () {
                        return t.$localCart.removeGroup(e), 0 === e || 0 === t.currentGroupIndex ? t.changeGroup(0) : t.currentGroupIndex >= e ? t.changeGroup(e - 1) : t.changeGroup(t.currentGroupIndex)
                    })
                }
            }]), o
        }();
        return new u
    }]
}, function (e, t) {
    "use strict";

    function n(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var r = function (e, t, n) {
        for (var a = !0; a;) {
            var i = e, r = t, o = n;
            a = !1, null === i && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, r);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var c = s.get;
                if (void 0 === c) return;
                return c.call(o)
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            e = u, t = r, n = o, a = !0, s = u = void 0
        }
    }, o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }

        return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }(), s = ["$rootScope", "$q", function (e, t) {
        return function () {
            function n() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? -1 : arguments[0],
                    a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], r = this,
                    o = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2],
                    s = arguments.length <= 3 || void 0 === arguments[3] ? {
                        name: "",
                        original_price: 0,
                        price: 0
                    } : arguments[3];
                i(this, n), this.$id = t, this.$name = s.name, this.$price = s.original_price || s.price, this.$specfoods_id = o, this.$localCartView = a, this.$entities = [], this.quantity = 0, this.$update(), this.$bindUpdateEvent(), e.$on("cart:clearGroup", function () {
                    r.$update()
                })
            }

            return o(n, [{
                key: "$bindUpdateEvent", value: function () {
                    var t = this;
                    e.$on("cart:updateEntity", function (e, n) {
                        var a = n.entity;
                        a.id === t.$id && t.$update()
                    })
                }
            }, {
                key: "$update", value: function () {
                    this.$entities = this.$localCartView.filterEntities(this.$id), this.quantity = this.$count(this.$entities)
                }
            }, {
                key: "$count", value: function (e) {
                    return e.reduce(function (e, t) {
                        return e + (0 | t.quantity)
                    }, 0)
                }
            }, {
                key: "$getEntity", value: function () {
                    var e = this.$entities[this.$localCartView.currentGroupIndex] || {};
                    return e.id ? e : {id: this.$id, quantity: 0, name: this.$name, price: this.$price}
                }
            }, {
                key: "animate", value: function (e) {
                    if (!e) return t.all();
                    var n = e.getBoundingClientRect(),
                        a = this.$localCartView.$el.find(".shop-cartfooter")[0].getBoundingClientRect(), i = .5,
                        r = 500, o = this.$localCartView.$el.find(".shop-flyitem").clone();
                    return angular.$("body").append(o), o.css({top: n.top + "px", left: n.left + "px"}), function () {
                        var e = t.defer();
                        return o.animate({left: a.left + "px"}, r, "linear"), o.animate({top: n.top - n.top / 4 + "px"}, r * i, "easeOutCubic", function () {
                            return e.resolve()
                        }), e.promise
                    }().then(function () {
                        var e = t.defer();
                        return o.animate({top: a.top + "px"}, r * (1 - i), "easeInCubic", function () {
                            return e.resolve()
                        }), e.promise
                    }).then(function () {
                        return o.remove()
                    })
                }
            }, {
                key: "add", value: function () {
                    var e = this, t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    return this.animate(t.target).then(function () {
                        return e.$localCartView.addEntity(e.$getEntity())
                    })
                }
            }, {
                key: "sub", value: function () {
                    return this.$localCartView.subEntity(this.$getEntity())
                }
            }, {
                key: "update", value: function (e) {
                    return this.$localCartView.updateFromInput(this.$getEntity(), e)
                }
            }]), n
        }()
    }], c = ["$rootScope", "CartButtonView", function (e, t) {
        return function (t) {
            function s() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
                    t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                i(this, s), r(Object.getPrototypeOf(s.prototype), "constructor", this).call(this, -1, n, e), angular.extend(this, t)
            }

            return a(s, t), o(s, [{
                key: "$update", value: function () {
                    var e, t = this;
                    this.$specGroups = this.$specfoods_id.map(function (e) {
                        return t.$localCartView.filterEntities(e)
                    }), this.quantity = this.$count((e = []).concat.apply(e, n(this.$specGroups)))
                }
            }, {
                key: "$bindUpdateEvent", value: function () {
                    var t = this;
                    e.$on("cart:updateEntity", function (e, n) {
                        var a = n.entity, i = t.$specfoods_id.some(function (e) {
                            return a.id === e
                        });
                        i && t.$update()
                    })
                }
            }, {
                key: "$getEntity", value: function () {
                    var e = this, t = this.$specGroups.filter(function (t) {
                        return t.some(function (t) {
                            return t.id === e.$id
                        })
                    })[0];
                    return angular.isArray(t) ? t[this.$localCartView.currentGroupIndex] : {
                        id: this.$id,
                        quantity: 0,
                        name: this.$menuFood.name,
                        price: this.$menuFood.original_price || this.$menuFood.price
                    }
                }
            }, {
                key: "add", value: function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    return this.$id = e, this.$menuFood = t, r(Object.getPrototypeOf(s.prototype), "add", this).call(this)
                }
            }]), s
        }(t)
    }];
    e.exports = {CartButtonView: s, CartVirtualButtonView: c}
}, function (e, t, n) {
    "use strict";
    n(291);
    var a = n(294);
    e.exports = ["$rootScope", "$q", "$timeout", "localCartView", function (e, t, n, i) {
        return {
            templateUrl: a, scope: {cartLink: "="}, link: function (e, t) {
                e.cartLink.then(function (n) {
                    var a = n.restaurantId, r = n.restaurantStatus, o = n.minimumAmount, s = n.menuMap, c = n.menuArray,
                        u = n.deliveryFee, l = n.piecewiseAgentFee;
                    e.shopCart = i.init(a, r, o, s, c, t, u, l)
                }), e.checkout = function (t) {
                    e.shopCart.vm.button.name = "SUBMITTING", e.shopCart.vm.button.disabled = !0, e.shopCart.vm.button.text = "结算中...", t.stopPropagation(), i.checkout()
                }, e.showCartHelper = function () {
                    angular.$("#shophelper").addClass("open")
                }
            }
        }
    }]
}, function (e, t) {
}, , , function (e, t) {
    var n = "/entry/main/shop/_block/shop-cart/shop-cart.html",
        a = '<div class=shop-cart><div class=shop-cartbasket id=shopbasket><div shop-groupswitcher cart=shopCart></div><div class=shop-cartbasket-empty ng-if=!shopCart.vm.groups[shopCart.currentGroupIndex].length><div class=icon-cart></div><primary>购物车是空的，赶紧选购吧</primary></div><div ng-repeat="item in shopCart.vm.groups[shopCart.currentGroupIndex]" class=shop-cartbasket-tablerow entityid={{item.id}}><div class="cell itemname" ng-bind=item.name title={{item.name}}></div><div class="cell itemquantity"><button ng-click="shopCart.subEntity(item, $event)">-</button><input ng-model=item.quantity ng-blur="shopCart.updateFromInput(item, item.quantity)"><button ng-click="shopCart.addEntity(item, $event)">+</button></div><div class="cell itemtotal" ng-bind="\'&yen;\' + ((item.price * item.quantity).toFixed(2) | number)"></div></div><div class=shop-cartbasket-tablerow ng-if=shopCart.packingFee><div class="cell itemname">餐盒费</div><div class="cell itemquantity"></div><div class="cell itemtotal">&yen;{{shopCart.packingFee}}</div></div></div><div class=shop-cartfooter ng-click=shopCart.toggleCart()><span class="icon-cart shop-carticon"><span class=shop-cartpieces ng-bind=shopCart.vm.quantity ng-if="shopCart.vm.quantity > 0"></span></span><primary class="shop-cartfooter-text price" ng-if="shopCart.vm.quantity > 0" ng-bind="shopCart.vm.total | number"></primary><div class="shop-cartfooter-text extras" ng-if="shopCart.vm.extras.length && !shopCart.vm.button.disabled"><primary ng-repeat="extra in shopCart.vm.extras">{{extra.name}}&yen;{{extra.fee}}</primary></div><div class="shop-cartfooter-text extras" ng-bind-html=shopCart.vm.picewiseText></div><button class=shop-cartfooter-checkout ng-class="{disabled: shopCart.vm.button.name !== \'CAN_ORDER\'}" ng-disabled=shopCart.vm.button.disabled ng-bind=shopCart.vm.button.text ng-click=checkout($event)></button></div><div class=shop-carthelper-opener ng-class="{show: shopCart.cartHelper.show}" ng-click=showCartHelper()></div><div id=shophelper shop-cart-helper group=shopCart.cartHelper.group cart=shopCart></div><div class=shop-flyitem></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t, n) {
    "use strict";
    var a = Function.prototype.bind;
    n(296);
    var i = n(298), r = {}, o = [], s = function (e) {
        return o.filter(function (t) {
            return e.some(function (e) {
                return t[0] === e
            })
        })[0]
    };
    e.exports = ["localCartView", "CartButtonView", "CartVirtualButtonView", function (e, t, n) {
        return {
            templateUrl: i, scope: {menuFood: "=food", buttonText: "@"}, controller: ["$scope", function (i) {
                i.text = i.buttonText || "加入购物车", i.$watch("menuFood", function (c) {
                    if (c) {
                        var u = angular.extend({id: c.food_id}, c);
                        if (u.hasSpec) {
                            if (i.cartSpec = s(u.specfoods_id), !i.cartSpec) {
                                var l = [u.specfoods_id, u, e];
                                i.cartSpec = new (a.apply(n, [null].concat(l))), o.push(i.cartSpec)
                            }
                        } else i.cartItem = r[u.id], i.cartItem || (i.cartItem = new t(u.id, e, [], u), r[u.id] = i.cartItem)
                    }
                })
            }]
        }
    }]
}, function (e, t) {
}, , function (e, t) {
    var n = "/entry/main/shop/_block/shop-cartbutton/shop-cartbutton.html",
        a = '<div ng-if=!menuFood.hasSpec><button class=shop-cartbutton ng-if="!cartItem.quantity && menuFood.stock" ng-click=cartItem.add($event)>{{text}}</button> <span class="shop-cartbutton disabled" ng-if=!menuFood.stock>已售完</span><div class=shop-cartctrl ng-if="cartItem.quantity > 0 || cartItem.quantity === \'\'"><button class="ctrl minus" ng-click=cartItem.sub($event)>-</button><input class="ctrl quantity" min="{{menuFood.min_purchase || 1}}" ng-model=cartItem.quantity ng-change=cartItem.update(cartItem.quantity)><button class="ctrl plus" ng-click=cartItem.add($event)>+</button></div></div><div ng-if=menuFood.hasSpec><button class=shop-cartbutton ng-if=!cartSpec.quantity shop-specmenu food=cartSpec>选规格</button><div class=shop-cartctrl ng-if=cartSpec.quantity><button class="ctrl minus" tooltip=多规格商品只能去购物车删除哦 tooltip-trigger=focus>-</button><input class="ctrl quantity" ng-model=cartSpec.quantity readonly><button class="ctrl plus" shop-specmenu food=cartSpec>+</button></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t, n) {
    "use strict";
    var a = n(300);
    n(301), e.exports = function () {
        return {
            restrict: "A",
            replace: !0,
            templateUrl: a,
            scope: {group: "=", shopCart: "=cart"},
            link: function (e, t) {
                e.closeCartHelper = function () {
                    t.removeClass("open")
                }
            }
        }
    }
}, function (e, t) {
    var n = "/entry/main/shop/_block/shop-carthelper/shop-carthelper.html",
        a = '<div class=shop-carthelper><div class="shopcarhelper-title clearfix"><span>凑一凑</span> <em>轻松凑满起送价</em> <a href=javascript: ng-click=closeCartHelper()>[ 关闭 ]</a></div><div class="shopcarthelper-container ui-scrollbar-light"><div ng-repeat="item in group track by $index" class=shop-cartbasket-tablerow entityid={{item.id}}><div class="cell itemname" ng-bind=item.name title={{item.name}}></div><div class="cell itemtotal" ng-bind="\'&yen;\' + item.price"></div><div class=cell><div shop-carthelperbutton food=item></div></div></div></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    n(304);
    var a = n(306), i = {};
    e.exports = ["localCartView", "CartButtonView", function (e, t) {
        return {
            templateUrl: a, scope: {food: "="}, controller: ["$scope", function (n) {
                var a = angular.extend({id: n.food.food_id}, n.food);
                a.hasSpec || (n.cartItem = i[a.id], n.cartItem || (n.cartItem = new t(a.id, e, [], a), i[a.id] = n.cartItem))
            }]
        }
    }]
}, function (e, t) {
}, , function (e, t) {
    var n = "/entry/main/shop/_block/shop-carthelperbutton/shop-carthelperbutton.html",
        a = "<div ng-if=!menuFood.hasSpec><button class=shop-carthelperbutton ng-click=cartItem.add($event)>添加</button></div>";
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t, n) {
    "use strict";
    n(308);
    var a = n(310);
    e.exports = ["localCartView", function (e) {
        return {
            templateUrl: a, scope: {shopCart: "=cart"}, controller: ["$scope", function (t) {
                t.addGroup = function () {
                    e.createGroup()
                }, t.removeGroup = function (t, n) {
                    n.stopPropagation(), e.removeGroup(t)
                }, t.switchGroup = function (t) {
                    e.changeGroup(t)
                };
                var n = "NO_GUIDE_GROUP";
                t.closeGuide = function () {
                    t.showGuide = !1, localStorage.setItem(n, !0)
                }, localStorage.getItem(n) || (t.showGuide = !0)
            }]
        }
    }]
}, function (e, t) {
}, , function (e, t) {
    var n = "/entry/main/shop/_block/shop-groupswitcher/shop-groupswitcher.html",
        a = '<ul class=shop-grouptab ng-if="shopCart.vm.groups.length > 1"><li ng-repeat="group in shopCart.vm.groups" ng-click=switchGroup($index) ng-class="{ light: $index === shopCart.currentGroupIndex }"><span ng-bind="$index + 1" ng-if="shopCart.vm.groups.length >= 4"></span> <span ng-bind="$index + 1 + \'号购物车\'" ng-if="shopCart.vm.groups.length < 4"></span> <a href=javascript: class=icon-close ng-click="removeGroup($index, $event)"></a></li><li class=plus ng-click=addGroup() ng-if="shopCart.vm.groups.length < 6" tooltip=添加购物车>+</li></ul><div class=shop-grouphead ng-class="{ single: shopCart.vm.groups.length === 1 }"><a href=javascript: class=icon-cart-add ng-if="shopCart.vm.groups.length === 1" ng-click=addGroup() tooltip=添加购物车></a><div class=shop-groupguidetip ng-if="showGuide && shopCart.vm.groups.length === 1">可以添加多个购物车，便于商家分类打包哦 <a class=icon-close ng-click=closeGuide()></a></div><div class=shop-grouphead-row><span ng-if="shopCart.vm.groups.length > 1" ng-bind="shopCart.currentGroupIndex + 1 + \'号\'"></span>购物车 <a href=javascript: ng-click=shopCart.clearGroup(shopCart.currentGroupIndex)>[清空]</a></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t, n) {
    "use strict";
    n(312);
    var a = n(314), i = n(315);
    e.exports = ["$q", "$http", "$templateCache", "$compile", "Popover", function (e, t, n, r, o) {
        var s = function (e, i) {
            return t.get(a, {cache: n}).then(function (t) {
                var n = o.extend({
                    defaults: {
                        modal: !0,
                        animation: !1,
                        placement: "right",
                        adjustLeft: 14,
                        adjustTop: 19,
                        attachToBody: !0,
                        trigger: "click",
                        target: i
                    }, render: function () {
                        return r(t.data)(e)[0]
                    }
                });
                return new n
            })
        };
        return {
            scope: {virtualFood: "=food"}, link: function (e, t) {
                return s(e, t[0]).then(function (n) {
                    t.on("click", function (t) {
                        t.stopPropagation(), n.show(), e.closeModal = function () {
                            return n.hide()
                        }, e.specsData = e.virtualFood.specifications;
                        var a = i.toSpecFilter(e.virtualFood.specfoods), r = function (e) {
                            var t = a(e);
                            return t ? {
                                food: t,
                                info: t.specs.map(function (e) {
                                    return e.value
                                }).join(" + "),
                                submitDisabled: t.stock <= 0,
                                submitText: t.stock > 0 ? "选好了，加入购物车" : "暂时缺货"
                            } : {
                                food: t,
                                info: "此规格未提供，请重新选择",
                                submitDisabled: !0,
                                submitText: "无法加入购物车",
                                hideReason: "NO_SPEC"
                            }
                        };
                        e.specs = e.specsData.reduce(function (e, t) {
                            return e[t.name] = t.values[0], e
                        }, {}), e.current = r(e.specs), e.$apply(), e.chooseSpec = function (t, n) {
                            e.specs[t] = n, e.current = r(e.specs)
                        }, e.addSpecfood = function (t, n) {
                            e.virtualFood.add(t.food_id, n), e.closeModal()
                        }
                    })
                })
            }
        }
    }]
}, function (e, t) {
}, , function (e, t) {
    var n = "/entry/main/shop/_block/shop-specmenu/shop-specmenu.html",
        a = '<div class=shop-specmenu><div class=shop-specmenu-specs><dl ng-repeat="spec in specsData"><dt ng-bind=spec.name><dd ng-repeat="value in spec.values" ng-bind=value ng-click="chooseSpec(spec.name, value)" ng-class="{current: value === specs[spec.name]}"></dl></div><div class=shop-specmenu-infogroup ng-if=!current.hideReason><primary>已选：<span ng-bind=current.info></span> <span class=shop-specmenu-stockleft ng-if="current.food.stock < 30 && current.food.stock > 0">仅剩 <span ng-bind=current.food.stock></span> 份</span></primary><primary class=shop-specmenu-price><span class=yen>&yen;</span><span ng-bind="current.food.price | number:2"></span> <del class=shop-specmenu-originprice ng-if=current.food.original_price ng-bind="&yen;\' + (current.food.original_price | number:2)"></del></primary></div><div class=shop-specmenu-infogroup ng-if=current.hideReason ng-bind=current.info></div><div class="shop-specmenu-infogroup buttons"><button class=btn-primary ng-disabled=current.submitDisabled ng-bind=current.submitText ng-click="addSpecfood(current.food, $event)"></button> <a class=shop-specmenu-cancel href=javascript: ng-click=closeModal()>不要了</a></div><div class=shop-specmenu-arrow></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
    "use strict";

    function n(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function a(e) {
        var t = function (e) {
            return angular.extend(e, e.specfoods[0])
        }, a = function (e) {
            return e.specs.reduce(function (e, t) {
                return e[t.name] = t.value, e
            }, {})
        }, i = function (e) {
            return angular.extend(e, {
                hasSpec: !0, specfoods_id: e.specfoods.map(function (e) {
                    return e.food_id
                }), price: Math.min.apply(Math, n(e.specfoods.map(function (e) {
                    return e.price
                }))), specsMaps: e.specfoods.map(function (e) {
                    return a(e)
                })
            })
        };
        return e.map(function (e) {
            return angular.extend(e, {
                foods: e.foods.map(function (e) {
                    return e.specfoods.length > 1 ? i(e) : t(e)
                })
            })
        })
    }

    function i(e) {
        var t, a = e.map(function (e) {
            return e.foods
        });
        return (t = []).concat.apply(t, n(a))
    }

    function r(e) {
        return i(e).reduce(function (e, t) {
            return t.hasSpec ? t.specfoods.forEach(function (t) {
                e[t.food_id] = t
            }) : e[t.food_id] = t, e
        }, {})
    }

    function o(e) {
        return function (t) {
            return e.filter(function (e) {
                return e.specs.some(function (e) {
                    return t[e.name] === e.value
                })
            })[0]
        }
    }

    e.exports = {toNormal: a, flatMenu: i, getMenuMap: r, toSpecFilter: o}
}, function (e, t, n) {
    "use strict";
    var a = n(317);
    n(319);
    var i = n(138), r = [67, 191, 1083, 1092, 1099, 1103, 1106, 1518, 5346],
        o = ["$rootScope", "Zero", function (e, t) {
            return {
                restrict: "A",
                replace: !0,
                templateUrl: a,
                scope: {shop: "=data", isdisabled: "="},
                link: function (n) {
                    var a = n.$watch("shop", function (o) {
                        if ("undefined" != typeof o) {
                            n.imgUrl = n.shop.image_path ? n.shop.image_path : i, t.reverseGeo.get({
                                latitude: o.latitude,
                                longitude: o.longitude
                            }).$promise.then(function (e) {
                                n.isJingHua = -1 !== r.indexOf(e.city_id)
                            }), n.shop.tip = {
                                2: {text: "当前过于繁忙", bgColor: "#ff7667"},
                                3: {text: "暂时只能通过手机订购", bgColor: "#c0c0c0"},
                                4: {text: "商家休息", bgColor: "#c0c0c0"},
                                5: {text: "预订中，" + o.next_business_time + "后开始送餐", bgColor: "#54ce75"},
                                6: {text: "只能通过手机订购", bgColor: "#c0c0c0"},
                                8: {text: "商家休息", bgColor: "#c0c0c0"},
                                9: {text: "即将休息", bgColor: "#ff7667"}
                            }[o.status];
                            var s = o.piecewise_agent_fee.rules;
                            1 === s.length ? n.shop.delivery_text = n.shop.float_delivery_fee + "元" : n.shop.delivery_text = s[s.length - 1].fee + "-" + s[0].fee + "元", o.in_delivery_area && (n.shop.tip = {
                                text: "超出配送范围",
                                bgColor: "#c0c0c0"
                            }), -1 !== [1, 5, 9].indexOf(o.status) && o.in_delivery_area || (n.isdisabled = !0);
                            var c = function (n) {
                                return t.favor[n]({
                                    userId: e.user.user_id,
                                    filter: "restaurants",
                                    filterId: o.id
                                }).$promise
                            }, u = localStorage.getItem("GEOHASH");
                            u && t.shopRatingScore(o.id).get({
                                restaurant_id: o.id,
                                latitude: Geohash.decode(u)[0],
                                longitude: Geohash.decode(u)[1]
                            }).$promise.then(function (e) {
                                n.shopRatingScore = e
                            }), c("get").then(function () {
                                return n.isFavorShop = !0
                            })["catch"](function () {
                                return n.isFavorShop = !1
                            }), n.favor = function () {
                                return e.user.user_id ? void(n.isFavorShop ? c("delete").then(function () {
                                    return n.isFavorShop = !1
                                }) : c("post").then(function () {
                                    return n.isFavorShop = !0
                                })) : void(location.href = e.ACCOUNTBASE + "/login/#redirect=" + location.href)
                            }, a()
                        }
                    })
                }
            }
        }];
    angular.module("eleme.page").filter("openhour", function () {
        return function (e) {
            return e ? e.map(function (e) {
                return e.replace("/", "-")
            }).join(" / ") : void 0
        }
    }).filter("compareRating", function () {
        return function (e) {
            if ("undefined" != typeof e) {
                var t;
                return e > 0 && (t = "高于周边商家"), 0 === e && (t = "与周边商家持平"), 0 > e && (t = "低于周边商家"), {
                    text: t,
                    number: (100 * Math.abs(e)).toFixed(1) + "%"
                }
            }
        }
    }), e.exports = o
}, function (e, t, n) {
    var a = "/entry/main/shop/_block/shop-guide/shop-guide.html",
        i = "<div class=shopguide><div class=container ng-show=shop itemscope itemtype=http://schema.org/Restaurant><div class=shopguide-info><meta itemprop=url content={{$root.ROOTBASE}}/shop/{{shop.id}}><img ng-src=\"{{imgUrl + '|95x95' | imgOptimize}}\" alt={{shop.name}} itemprop=image><div class=shopguide-info-wrapper><div><h1 title={{shop.name}} ng-class=\"{hastip: shop.tip}\" itemprop=name>{{shop.name}}</h1><span ng-if=shop.tip ng-style=\"{'background-color': shop.tip.bgColor}\" class=shopguide-tip>{{shop.tip.text}}</span> <a ng-href=\"{{ '/shop/' + shop.id + '/info' }}\"><img src=" + n(318) + ' alt="" ng-if=isJingHua class=shopguide-zheng></a></div><primary class=shopguide-info-rate><span rate-star rating=shop.rating></span> (<a ng-href=/shop/{{shop.id}}/rate>{{shop.rating_count}}</a>) <span>月售{{shop.recent_order_num}}单</span></primary><primary><span ng-repeat="flavor in shop.flavor" class=shopguide-tag itemprop=servesCuisine>{{flavor.name}}</span></primary></div><div class=shopguide-info-extra><ul><li class="shopguide-extra-item shopguide-extra-compete" ng-if=shopRatingScore><div itemscope itemprop=aggregateRating itemtype=http://schema.org/AggregateRating><h2 class=color-stress itemprop=ratingValue>{{shopRatingScore.star_level.toFixed(1)}}</h2><meta itemprop=bestRating content=5><meta itemprop=reviewCount content={{shop.rating_count}}><primary>综合评价<br><span class=color-mute>{{(shopRatingScore.compare_rating | compareRating).text}}</span> <span class=color-stress ng-if=shopRatingScore.compare_rating>{{(shopRatingScore.compare_rating | compareRating).number}}</span></primary></div><div><primary>服务态度<span rate-star rating=shopRatingScore.service_score></span> <span class=color-stress>{{shopRatingScore.service_score.toFixed(1)}}分</span></primary><primary>菜品评价<span rate-star rating=shopRatingScore.food_score></span> <span class=color-stress>{{shopRatingScore.food_score.toFixed(1)}}分</span></primary></div></li><li class=shopguide-extra-item ng-if=shop.description itemprop=description>{{shop.description}}</li><li class="shopguide-extra-item address"><primary itemscope itemprop=streetAddress itemtype=http://schema.org/PostalAddress><span class=label>商家地址：</span> <span>{{shop.address}}</span><meta itemprop=telephone content={{shop.phone}}></primary><primary><span class=label>营业时间：</span> <span itemprop=openingHours>{{shop.opening_hours | openhour}}</span></primary></li><li class=shopguide-extra-item><primary class=shopguide-extra-delivery>由<span>{{shop.delivery_mode.description || shop.name}}</span>提供配送服务</primary></li></ul></div></div><div class=shopguide-server><span ng-hide="shop.id == 656683"><em>起送价</em> <em class=shopguide-server-value>{{shop.float_minimum_order_amount}}元</em></span> <span ng-hide="shop.id == 656683"><em>配送费</em> <em class=shopguide-server-value>{{shop.piecewise_agent_fee.tips}}</em> <em class=shopguide-server-delivery ng-if=shop.delivery_mode.description>{{shop.delivery_mode.text}}</em></span> <span ng-hide="shop.id == 656683"><em>平均送达速度</em> <em class=shopguide-server-value>{{shop.order_lead_time}}分钟</em></span></div><a class=shopguide-favor href=javascript: ng-click=favor()><i ng-if=isFavorShop class=icon-unfavorite></i> <i ng-if=!isFavorShop class=icon-favorite></i> <span ng-if=isFavorShop>取消收藏</span> <span ng-if=!isFavorShop>收藏</span></a></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(a, i)
    }]), e.exports = a
}, function (e, t, n) {
    e.exports = n.p + "media/img/zheng.59d29c.png"
}, function (e, t) {
}, , , function (e, t, n) {
    "use strict";
    var a = n(323);
    n(324);
    var i = ["$location", function (e) {
        return {
            restrict: "A",
            templateUrl: a,
            scope: {filterData: "=", shop: "=data", displayType: "=", shopAction: "="},
            link: function (t) {
                var n = "-price";
                t.filter = function (e) {
                    "-price" === e && (n = "price" === n ? "-price" : "price", e = n), t.filterData = e
                }, t.changeDisplayType = function (e) {
                    return t.displayType = e
                }, t.search = function () {
                    return e.search("text", encodeURI(t.searchText))
                }
            }
        }
    }];
    e.exports = i
}, function (e, t) {
    var n = "/entry/main/shop/_block/shop-nav/shop-nav.html",
        a = '<div class=shopnav><div class="container clearfix"><div class=shopnav-left><a class=shopnav-tab href=/shop/{{shop.id}} ng-class="{active: shop.tab === \'index\'}">所有商品</a> <a class=shopnav-tab href=/shop/{{shop.id}}/rate ng-class="{active: shop.tab === \'rate\'}">评价</a> <a class=shopnav-tab href=/shop/{{shop.id}}/info ng-class="{active: shop.tab === \'info\'}">商家资质</a> <span class=shopnav-filter ng-if="shopAction === \'menu\'"><a href=javascript: ng-click="filter(\'default\')" ng-class="{active: filterData === \'default\'}">默认排序</a> <a href=javascript: ng-click="filter(\'-rating\')" ng-class="{active: filterData === \'-rating\'}">评分 <i class=icon-uniE02D></i></a> <a href=javascript: ng-click="filter(\'-month_sales\')" ng-class="{active: filterData === \'-month_sales\'}">销量 <i class=icon-uniE02D></i></a> <a href=javascript: ng-click="filter(\'-price\')" ng-class="{active: filterData === \'-price\' || filterData === \'price\'}">价格 <i class=icon-uniE02D ng-hide="filterData === \'price\'"></i> <i class=icon-uniE02C ng-show="filterData === \'price\'"></i></a> <span><a class="shopnav-filter-display icon-grid" href=javascript: title=以网格形式显示菜单 ng-click="changeDisplayType(\'grid\')" ng-class="{active: displayType === \'grid\'}"></a> <a class="shopnav-filter-display icon-list" href=javascript: title=以列表形式显示菜单 ng-click="changeDisplayType(\'list\')" ng-class="{active: displayType === \'list\'}"></a></span></span></div><div class=shopnav-search><form class=place-search role=search ng-submit=search()><button class="place-search-btn icon-search" ubt-click=403 ng-attr-ubt-data-keyword={{searchText}} title=搜索商家或美食></button><label for=globalsearch>搜索商家或美食</label><input id=globalsearch class=place-search-input ng-model=searchText autocomplete placeholder=搜索商家,美食...></form></div></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var i = n(327);
    n(328);
    var r = n(138), o = n(315), s = function (e) {
        var t = e.reduce(function (e, t) {
            return Object.assign(e, a({}, t.food_id, t.min_purchase || 1))
        }, {});
        window.localStorage.setItem("CART_RECORD", JSON.stringify(t))
    }, c = {}, u = ["$rootScope", "$location", "Dialog", "Zero", "notifyServerError", function (e, t, n, a, u) {
        return {
            restrict: "A",
            templateUrl: i,
            replace: !0,
            scope: {shopCache: "=", filterData: "=", displayType: "="},
            controller: ["$scope", function (i) {
                i.loading = !0, i.itemInfo = {}, i.$on("MENUITEM::SHOWINFO", function (e, t) {
                    e.stopPropagation(), i.itemInfo = t, n.show("ITEMINFO")
                }), c.promise = i.shopCache.promise.then(function (e) {
                    return c.id !== e.id ? (c.id = e.id, a.shoppingRst(e.id).query({restaurant_id: e.id}).$promise.then(function (t) {
                        return t[0] && "好评榜" === t[0].name && (t[0].id = 1), t[1] && "热销榜" === t[1].name && (t[1].id = 2), t = t.filter(function (e) {
                            return 1 !== e.id && 2 !== e.id
                        }), c.res = o.toNormal(t), {shop: e, res: c.res}
                    })) : {shop: e, res: c.res}
                }), c.promise.then(function (n) {
                    var a = n.shop, r = n.res;
                    i.loading = !1;
                    var c = [];
                    r.forEach(function (e) {
                        c.length < 5 && (c = c.concat(e.foods.slice(0, 5 - c.length).map(function (e) {
                            return e.name
                        })))
                    }), e.SEO.description = a.name + "位于" + a.address + "，主要美食有" + c.join("、") + "等，了解更多美食外卖，上饿了么网上订餐", i.categorys = r;
                    var u, l = o.flatMenu(i.categorys), d = decodeURI(t.search().text);
                    "undefined" !== d && (u = l.filter(function (e) {
                        return -1 !== e.name.indexOf(d)
                    }), i.searchEnv = {text: d}), i.foods = u || l, s(i.foods), window.setTimeout(v, 0)
                })["catch"](function (e) {
                    i.loading = !1, u(e)
                }), i.cartLink = c.promise.then(function (e) {
                    var t = e.shop, n = e.res;
                    return {
                        restaurantId: t.id,
                        restaurantStatus: t.status,
                        deliveryFee: t.float_delivery_fee,
                        minimumAmount: t.float_minimum_order_amount,
                        piecewiseAgentFee: t.piecewise_agent_fee,
                        menuMap: o.getMenuMap(n),
                        menuArray: o.flatMenu(n)
                    }
                });
                var l, d = {}, p = function () {
                    return document.documentElement.scrollTop || document.body.scrollTop
                }, h = angular.$(".shopmenu-main"), m = function () {
                    return d.dom.style.maxHeight = DomUtil.theElementViewHeight(h[0]) + "px"
                }, f = DomUtil.throttle(function () {
                    var e = l.filter(function (e) {
                        return p() >= e.top - d.height
                    }).pop();
                    "undefined" != typeof e && (i.currentCategory !== e.category && (i.currentCategory = e.category, i.$apply()), b && m())
                }, 100), g = function () {
                    if ("default" === i.filterData) {
                        var e = [].slice.call(angular.$(".shopmenu-title")), t = i.categorys;
                        l = e.map(function (e, n) {
                            return {category: t[n], top: e.offsetTop}
                        })
                    }
                };
                i.shopNavSticky = function (e) {
                    e || h.css({"margin-top": 0}), e && (b ? (m(), d.height = 0, h.css({"margin-top": 0})) : (d.height = d.dom.offsetHeight, h.css({"margin-top": d.dom.offsetHeight + "px"})), "default" === i.filterData && g())
                };
                var v = function () {
                    g(), d.dom = angular.$(".shopmenu-nav")[0], d.height = d.dom.offsetHeight, d.top = d.dom.offsetTop, angular.$(window).on("scroll", f);
                    var e = t.hash();
                    e && window.setTimeout(function () {
                        window.scrollTo(0, document.getElementById(e).offsetTop - d.height)
                    }, 1e3)
                }, y = 1500, b = !1;
                b = (window.innerWidth || document.documentElement.clientWidth) >= y, angular.$(window).on("resize", DomUtil.throttle(function () {
                    g(), b = (window.innerWidth || document.documentElement.clientWidth) >= y, b && m()
                })), i.scrollToCategory = function (e) {
                    "default" !== i.filterData && (i.filterData = "default", angular.$(window).on("scroll", f));
                    var t = i.categorys.indexOf(e);
                    angular.$("body").animate({scrollTop: [p(), l[t].top - d.height]}, 300), angular.$("html").animate({scrollTop: [p(), l[t].top - d.height]}, 300)
                }, i.$watch("filterData", function (e, t) {
                    "undefined" != typeof t && (i.filterText = {
                        "-rating": "评分从高到低排序",
                        "-month_sales": "销量从高到低排序",
                        "-price": "价格从高到低排序",
                        price: "价格从低到高排序"
                    }[e], "default" !== e ? angular.$(window).off("scroll", f) : angular.$(window).on("scroll", f))
                }), i.$watch("displayType", function (e, t) {
                    "undefined" != typeof t && g()
                }), i.defaultImg = r
            }]
        }
    }];
    e.exports = u
}, function (e, t) {
    var n = "/entry/main/shop/_block/shop-menu/shop-menu.html",
        a = '<div><div loading ng-show=loading></div><div ng-show="!loading && !searchEnv" class=shopmenu-nav sticky sticky-class=sticky sticky-body-class=shopmenu-nav-sticky sticky-fn=shopNavSticky><a href=javascript: ng-repeat="category in categorys" ng-click=scrollToCategory(category) ng-class="{active: currentCategory.id === category.id}">{{category.name}}</a></div><div ng-show=!loading class=shopmenu-main ng-class="{grid: displayType === \'grid\', list: displayType === \'list\'}"><div ng-if="filterData === \'default\' && !searchEnv"><div class="shopmenu-list clearfix" ng-repeat="category in categorys"><h3 class=shopmenu-title>{{category.name}} <span class=shopmenu-des>{{category.description}}</span></h3><div ng-repeat="food in category.foods" shop-menu-item food=food shop=shopCache></div></div></div><div ng-if="filterData !== \'default\' || searchEnv" class="shopmenu-list clearfix"><h3 class=shopmenu-title ng-if=!searchEnv>{{filterText}}</h3><h3 class=shopmenu-title ng-if=searchEnv>搜索<em class=color-stress>「{{searchEnv.text}}」</em>的结果</h3><div nodatatip ng-if="searchEnv && !foods.length" content=没有搜索结果，换个条件试试吧></div><dd shop-menu-item food=food shop=shopCache ng-repeat="food in foods | orderBy:filterData"></div><div shop-cart cart-link=cartLink ng-hide="shopCache.id == 656683"></div><div dialog=ITEMINFO><div shop-iteminfo item-info=itemInfo></div></div></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    var a = n(331);
    e.exports = function () {
        return {
            strict: "A", templateUrl: a, replace: !0, scope: {food: "=", shop: "="}, link: function (e) {
                e.showInfo = function (t) {
                    e.$emit("MENUITEM::SHOWINFO", t)
                }
            }
        }
    }
}, function (e, t) {
    var n = "/entry/main/shop/_block/shop-menu-item/shop-menu-item.html",
        a = '<div class=shopmenu-food ng-class="{noimg: !food.image_path}" id={{food.food_id}}><span class=col-1 ng-if=food.image_path><a href=javascript: ng-click=showInfo(food)><img ng-src="{{food.image_path + \'|100x100\' | imgOptimize}}" alt={{food.name}}的图片></a></span><div class="col-2 shopmenu-food-main"><h3 class="shopmenu-food-name ui-ellipsis">{{food.name}}</h3><primary class="color-mute ui-ellipsis" tooltip={{food.description}}>{{food.description}}</primary><primary><span rate-star rating=food.rating></span> <span class=color-mute>({{food.rating_count}})</span> <span class=color-mute>月售{{food.month_sales}}份</span></primary></div><span class="col-3 shopmenu-food-price color-stress">{{food.original_price || food.price}}<small>{{food.hasSpec && \'起\'}}</small> <span class=shopmenu-food-min-purchase ng-if="food.min_purchase && food.min_purchase > 1">{{food.min_purchase}}份起购</span></span> <span class=col-4><div shop-cartbutton food=food ng-hide="shop.id == \'656683\'"></div></span></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t, n) {
    "use strict";

    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    n(333);
    var i = n(335);
    e.exports = function () {
        return {
            templateUrl: i, scope: {itemInfo: "="}, controller: ["$q", "$scope", "Zero", function (e, t, n) {
                t.ratePageContext = {data: []};
                var i = function (e, n) {
                    t.ratingCount = n.length, t.ratePageContext.data = n, t.imagesPath = e.map(function (e) {
                        return e.image_path
                    })
                }, r = function () {
                    t.ratingCount = 0, t.ratePageContext.data = [], t.ratePageContext.currentPage = 1, t.imagesPath = [], t.currentImage = 0, t.showImageOffset = 0
                };
                t.focusImage = function (e) {
                    t.currentImage = e;
                }, t.showImageNext = function (e) {
                    var n = t.showImageOffset + e;
                    n > t.imagesPath.length - 1 || 0 > n || (t.showImageOffset = n)
                }, t.$watch("itemInfo", function (t) {
                    if (t && t.name) {
                        r();
                        var o = [];
                        t.specfoods_id ? o = o.concat(t.specfoods_id) : o.push(t.food_id), e.all([n.shoppingFood.query({"food_ids[]": o}).$promise, n.ugcFoodRating.query({
                            offset: 0,
                            limit: 999,
                            has_text: 1,
                            "food_ids[]": o
                        }).$promise]).then(function (e) {
                            return i.apply(void 0, a(e))
                        })["catch"](function () {
                        })
                    }
                })
            }]
        }
    }
}, function (e, t) {
}, , function (e, t) {
    var n = "/entry/main/shop/_block/shop-iteminfo/shop-iteminfo.html",
        a = '<div class=shop-iteminfo><div class=iteminfo-imagegroup><img class=mainimage ng-src="{{imagesPath[currentImage] ? imagesPath[currentImage] + \'|360x360\' : \'\' | imgOptimize}}" alt={{itemInfo.name}}的图片><div ng-show="imagesPath.length > 1"><a href=javascript: ng-click=showImageNext(-4) class="imagegroup-ctrl icon-profile-left-arrow"></a><ul class=imagelist><li ng-repeat="imagePath in imagesPath track by $index" ng-show="$index >= showImageOffset"><a href=javascript: ng-click=focusImage($index) ng-class="{ focus: currentImage === $index }"><img ng-src="{{imagePath + \'|60x60\' | imgOptimize}}" alt={{itemInfo.name}}的顾客上传图片></a></li></ul><a href=javascript: ng-click=showImageNext(4) class="imagegroup-ctrl icon-profile-right-arrow"></a></div></div><section class=iteminfo-info><h5 ng-bind=itemInfo.name></h5><primary ng-show=!!itemInfo.description class=description ng-bind=itemInfo.description></primary><div class=iteminfo-cartitem><div class=iteminfo-price><span class=price><span class=yen>&yen;</span> <span class=price ng-bind="(itemInfo.original_price || itemInfo.price) + (itemInfo.specfoods_id.length > 1 ? \'起\' : \'\')"></span></span></div><div ng-if=itemInfo.name shop-cartbutton food=itemInfo button-text=立即购买 ng-hide="shop.id == \'656683\'"></div></div><div class=iteminfo-rate><h6 ng-if=ratingCount>商品评价（<span ng-bind=ratingCount></span>）</h6><ul class=rategroup><li ng-repeat="item in ratePageContext.pageData"><div><span rate-star rating=item.rating_star></span> <span ng-bind="item.rated_at | date: \'yyyy-MM-dd\'"></span><div class=rateuser><span ng-bind=item.asterisk_username></span><img ng-src="{{item.avatar + \'|25x25\' | imgOptimize}}"></div></div><primary class=ratetext ng-bind=item.rating_text></primary></li></ul><div pagination pagination-context=ratePageContext pagination-pagesize=3></div></div></section></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t, n) {
    "use strict";
    var a = n(337);
    n(338);
    var i = n(234), r = function () {
        return {
            restrict: "A", replace: !0, templateUrl: a, controller: ["$scope", function (e) {
                var t = e.comment;
                e.avatarImgUrl = t.avatar ? t.avatar : i, e.foodImgUrl = t.item_rating_list.filter(function (e) {
                    return e.image_hash
                }), e.isFoodComment = 2 === t.rating_type, e.rateConfig = {style: "star"}, e.rate = {value: t.rating_star || 0}
            }]
        }
    };
    e.exports = r
}, function (e, t) {
    var n = "/entry/main/shop/_block/comment-item/comment-item.html",
        a = '<li class=commentitem><span class=commentitem-avatar><img ng-src="{{avatarImgUrl + \'|60x60\' | imgOptimize}}" alt={{comment.username}}></span><div class=commentitem-content><h4 class=commentitem-username>{{comment.username}}</h4><div class=commentitem-main><span class=commentitem-stars config=rateConfig value=rate isreadonly=true rate></span> <span class=commentitem-time class=color-mute ng-bind=comment.time_spent_desc></span><primary class=commentitem-text ng-if=comment.rating_text>{{comment.rating_text}}</primary></div><div item-rating-list data=food class=shoprate-itemrating ng-if=comment.item_rating_list ng-repeat="food in comment.item_rating_list"></div><span class=commentitem-date>{{comment.rated_at | date:\'yyyy-MM-dd hh:mm:ss\'}}</span><div class=commentitem-reply ng-if=comment.reply_text><h6>商家回复：</h6>{{comment.reply_text}}</div><img ng-if="foodImgUrl.length > 0" ng-repeat="item in foodImgUrl" ng-src="{{item.image_hash + \'|60x60\' | imgOptimize}}" alt={{item.rate_name}} class=commentitem-foodimage></div></li>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    var a = n(341);
    n(342), e.exports = function () {
        return {
            restrict: "A",
            replace: !0,
            templateUrl: a,
            scope: {data: "="},
            controller: ["$scope", "$location", function (e, t) {
                e.ratingValue = {value: e.data.rating_star}, e.linkToFood = function (e) {
                    return t.url(location.pathname.replace("/rate", "") + "#" + e)
                }
            }]
        }
    }
}, function (e, t) {
    var n = "/entry/main/shop/_block/item-rating-list/item-rating-list.html",
        a = "<div class=shoprate-itemratinglist><span class=shoprate-itemratinglist-name>{{data.rate_name}}</span> <span class=commentitem-stars config=rateConfig value=ratingValue isreadonly=true rate></span> <a href=javascript: ng-click=linkToFood(data.food_id)>查看商品</a><primary class=shoprate-itemratinglist-text ng-if=data.rating_text>{{data.rating_text}}</primary><div class=commentitem-reply ng-if=data.reply_text><h6>商家回复：</h6>{{data.reply_text}}</div></div>";
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    var a = n(345);
    n(346);
    var i = {promise: {}, page: {}},
        r = ["$rootScope", "$routeParams", "Zero", "notifyServerError", function (e, t, n, r) {
            return {
                templateUrl: a, restrict: "A", link: function (e) {
                    var a = t.id;
                    e.loading = !0, e.ratingStorage = {}, e.filter = {};
                    var o = 10, s = function () {
                        e.loading = !0;
                        var t = e.filter.type, i = e.ratingStorage[t];
                        n.ugc(a).query({
                            action: "ratings",
                            id: a,
                            record_type: t,
                            offset: (i.page - 1) * o,
                            limit: o
                        }).$promise.then(function (t) {
                            e.loading = !1, t.length || angular.$(window).off("scroll", u), i.data = i.data.concat(t), i.page++
                        })["catch"](function (e) {
                            return r(e)
                        })
                    };
                    i.typePromise || (i.typePromise = n.ugc(a).query({
                        id: a,
                        action: "rating_categories"
                    }).$promise), i.typePromise.then(function (t) {
                        e.ratingTypeList = t, e.filter.type = t[0].record_type, t.forEach(function (t) {
                            return e.ratingStorage[t.record_type] = {page: 1, data: []}
                        }), s()
                    })["catch"](function (e) {
                        return r(e)
                    }), e.select = function (t) {
                        t !== e.filter.type && (e.filter.type = t, e.ratingStorage[t].data.length || s())
                    };
                    var c = document.getElementById("ratinglist"), u = function () {
                        var t = c.getBoundingClientRect().bottom - (window.innerHeight || document.documentElement.clientHeight),
                            n = e.ratingStorage[e.filter.type];
                        n && 0 > t && !n["page" + n.page] && (n["page" + n.page] = !0, s())
                    };
                    angular.$(window).on("scroll", u)
                }
            }
        }];
    e.exports = r
}, function (e, t) {
    var n = "/entry/main/shop/_block/shop-rate/shop-rate.html",
        a = '<div class=commentbox><div class=commentfilter><a class=commentfilter-item ng-repeat="item in ratingTypeList" ng-class="{active: filter.type === item.record_type}" ng-click=select(item.record_type)>{{item.name}}({{item.amount}})</a></div><ul id=ratinglist class=commentlist><li comment-item ng-repeat="comment in ratingStorage[filter.type].data"></li></ul><div loading ng-show=loading></div><div nodatatip ng-if="!loading && !ratingStorage[filter.type].data.length"></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    var a = n(349);
    n(350);
    var i = ["$rootScope", "Zero", "MessageBox", "notifyServerError", "Dialog", function (e, t, n, i, r) {
        return {
            restrict: "A", templateUrl: a, scope: {shop: "=data"}, replace: !0, link: function (a) {
                var o = a.$watch("shop", function (s) {
                    void 0 !== s && (s.identification && (a.identificateResult = {
                        1: "良好",
                        2: "一般",
                        3: "较差"
                    }[s.identification.identificate_result]), o(), a.testLogin = function () {
                        return e.user.user_id ? void r.show("complaintDialog") : void(location.href = e.ACCOUNTBASE + "/login/#redirect=" + location.href)
                    }, a.complaintObj = {}, a.complaint = function () {
                        t.shopComplaint.post({
                            userId: e.user.user_id,
                            rstId: s.id,
                            complaint_type: 100,
                            content: a.complaintObj.text
                        }).$promise.then(function () {
                            r.close("complaintDialog"), n("投诉成功", "感谢您的投诉", "success")
                        })["catch"](function (e) {
                            return i(e)
                        })
                    })
                })
            }
        }
    }];
    e.exports = i
}, function (e, t) {
    var n = "/entry/main/shop/_block/shop-bulletin/shop-bulletin.html",
        a = "<div class=shopmain-right><div class=shopbulletin><div class=shopbulletin-section><h3 class=shopbulletin-section-title>商家公告</h3><primary class=shopbulletin-content>{{shop.promotion_info}}</primary><div class=shopbulletin-delivery><h4>配送说明：</h4><primary>{{shop.piecewise_agent_fee.description}}</primary></div><ul class=shopbulletin-supports><li ng-repeat=\"support in shop.supports\"><span ng-style=\"{'background-color': '#' + support.icon_color}\">{{support.icon_name}}</span> {{support.description}}</li></ul><a href=javascript: class=shopcomplaint ng-click=testLogin()>举报商家</a></div><div dialog=complaintDialog><h5 class=complaint-title>举报商家</h5><form ng-submit=complaint()><label class=complaint-field><textarea class=shopcomplaint-textarea ng-model=complaintObj.text rows=6 cols=40></textarea></label><div class=complaint-field><button type=submit class=btn-primary>提交</button></div></form></div></div></div>";
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , , function (e, t, n) {
    "use strict";
    var a = n(354);
    n(355);
    var i = ["$sce", function (e) {
        return {
            restrict: "A", templateUrl: a, replace: !0, scope: {shop: "=data"}, link: function (t) {
                var n = t.$watch("shop", function (a) {
                    a && (t.shop = a, t.src = e.trustAsResourceUrl("https://h5.ele.me/shop/certification/#/?restaurant_id=" + a.authentic_id + "&realId=" + a.id), n())
                })
            }
        }
    }];
    e.exports = i
}, function (e, t) {
    var n = "/entry/main/shop/_block/shop-info/shop-info.html",
        a = '<div><iframe class=shopinfo-iframe ng-src="{{ src }}" frameborder=0></iframe></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    var a = n(358);
    n(359), e.exports = function () {
        return {
            restrict: "A", replace: !0, templateUrl: a, link: function (e) {
                e.backToTop = function () {
                    angular.$(0 === document.body.scrollTop ? document.documentElement : document.body).animate({scrollTop: [t(), 0]}, 300)
                };
                var t = function () {
                    return Math.max(document.documentElement.scrollTop || 0, window.scrollY || 0)
                }
            }
        }
    }
}, function (e, t, n) {
    var a = "/entry/main/shop/_block/side-tools/side-tools.html",
        i = '<div class=sidetools><a href=http://kaidian.ele.me class="sidetools-item icon-visit-history" target=_blank title=我要开店 tooltip=我要开店 tooltip-placement=left></a><div class="sidetools-item icon-qrcode"><img class=sidetools-qrcode src=' + n(112) + ' alt=扫描二维码免费下载手机App></div><a href=JavaScript: class="sidetools-item icon-service" title=在线客服 tooltip=在线客服 tooltip-placement=left online-service target=_blank></a> <a href=JavaScript: class="sidetools-item icon-arrow-up" title=回到顶部 tooltip=回到顶部 tooltip-placement=left ng-click=backToTop()></a></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(a, i)
    }]), e.exports = a
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";

    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    var i = n(362);
    n(363), angular.module("eleme.page").factory("checkoutMobileVerify", n(367)).factory("checkoutSetPassword", n(371)).factory("checkoutService", n(375)).factory("checkoutCartView", n(377)).directive("checkoutCart", n(378)).directive("checkoutCartgarnish", n(384)).directive("checkoutGuide", n(388)).directive("checkoutAddress", n(392)).directive("quicksubmitTrigger", function () {
        return {
            scope: {submitVisable: "="}, link: function (e, t) {
                var n = t[0], a = function () {
                    return document.documentElement.scrollTop || document.body.scrollTop
                }, i = function () {
                    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                }, r = function () {
                    var e = i(), t = a();
                    return t + e > n.offsetTop
                }, o = function () {
                    var t = r();
                    e.submitVisable !== t && (e.submitVisable = t, e.$apply())
                };
                e.submitVisable = r(), document.addEventListener("scroll", o), window.addEventListener("resize", o), e.$on("$destroy", function () {
                    document.removeEventListener("scroll", o), window.removeEventListener("resize", o)
                })
            }
        }
    }), e.exports = {
        templateUrl: i,
        controller: ["$q", "$rootScope", "$scope", "$location", "Zero", "notifyServerError", "MessageBox", "escapeHtml", "Address", "checkoutService", "LocalCart", "checkoutCartView", function (e, t, n, i, r, o, s, c, u, l, d, p) {
            if (!t.user.user_id) return void(location.href = t.ACCOUNTBASE + "/login/#redirect=" + location.href);
            localStorage.getItem("GEOHASH") || (location.href = t.MAINBASE + "/?force"), t.layoutState = {
                type: "checkout",
                hideSidebar: !0
            }, n.checkout = {submitVisable: !0}, n.$on("$destroy", function () {
                return t.layoutState = {}
            }), n.guide = {step: 2, text: "订单信息"};
            var h = function (e, n) {
                angular.extend(t.layoutState, {rstUrl: e || "", rstName: n || ""})
            }, m = function (t) {
                return t.checkout().then(function (t) {
                    t.invoice.is_available = !1, t.invoice.status_text = "仅在饿了么 APP 中支持开发票哦", t.cart.sig = t.sig;
                    var i = t.cart, r = t.current_address;
                    if (!i.group.length) return e.reject("EMPTY_CART");
                    n.checkoutData = t, n.cart = i;
                    var o = -1;
                    if (n.payList = t.payments.map(function (e) {
                            return 1 === e.select_state && (o = n.payId = e.id), angular.extend({
                                1: {
                                    id: 1,
                                    type: "online",
                                    title: "在线支付",
                                    tip: "支持微信、支付宝、QQ钱包及大部分银行卡",
                                    disabledText: "该商家仅支持货到付款"
                                },
                                0: {id: 0, type: "offline", title: "货到付款", tip: "送货上门后再付款", disabledText: "该商家仅支持在线支付"}
                            }[e.id], {disabled: -1 === e.select_state})
                        }), n.hongbaoCount = t.hongbao_info.valid_hongbao_count, t.deliver_times.length) {
                        n.showDeliverTime = !0;
                        var s = [];
                        5 === n.checkoutData.cart.restaurant_status ? s.push({
                            text: "请选择送达时间",
                            value: -1,
                            disabled: !0,
                            select: !0
                        }) : s.push({
                            text: "立即送达",
                            value: "",
                            select: !0
                        }), n.bookTimes = t.deliver_times.reduce(function (e, t) {
                            var n = t.time_description, i = t.time;
                            return [].concat(a(e), [{text: n, value: i}])
                        }, s)
                    } else n.showDeliverTime = !1;
                    return n.invoice = t.invoice.is_available, {
                        checkoutData: t,
                        cartData: i,
                        paymethod_id: o,
                        current_address: r
                    }
                })
            }, f = function (e) {
                return r.shoppingRestaurant(e).get({
                    "fields[]": ["name", "only_use_poi", "delivery_mode"],
                    id: e
                }).$promise.then(function (t) {
                    var a = t.name, i = t.only_use_poi, r = t.delivery_mode;
                    return h(e, a), n.delivery = {1: "蜂鸟专送", 2: a, 3: "商家"}[(r || {id: 2}).id], {
                        name: a,
                        only_use_poi: i,
                        delivery_mode: r
                    }
                })
            }, g = function () {
                return n.user.$promise.then(function (e) {
                    return r.invoice.query({userId: e.user_id}).$promise
                }).then(function (e) {
                    return n.invoices = e, e
                })["catch"](function () {
                })
            }, v = function (e) {
                n.checkoutData.invoice = e
            };
            n.loading = !0, n.nofood = !0, n.cartView = p, n.orderButton = p.orderButton, n.nofoodWatcher = p.nofood, n.$watch("nofoodWatcher.nofood", function (e) {
                e && (n.nofood = !0)
            });
            var y = new d, b = l.checker;
            f(y.restaurant_id).then(function (t) {
                try {
                    if (!y.cartMap[y.restaurant_id][0].entities.length) return e.reject("EMPTY_CART")
                } catch (n) {
                }
                return t
            }).then(function (t) {
                return e.all({rstInfo: t, invoiceInfo: g(), checkoutDatas: m(y)})
            }).then(function (e) {
                var a = e.checkoutDatas, i = e.rstInfo, r = a.cartData, o = a.paymethod_id, s = a.current_address;
                n.isBaishengRst = i.only_use_poi, n.address = s, n.loading = !1, n.nofood = !1, b.init({
                    userId: t.user.user_id || "anonymous",
                    invoiceAvailable: v
                }, r, s, o, i)
            })["catch"](function (e) {
                switch (n.loading = !1, e) {
                    case"EMPTY_CART":
                        n.nofood = !0;
                        break;
                    default:
                        o(e)
                }
            }), n.selectPay = function (e, t) {
                e !== n.payId && (t || b.updatePaymethod(e).then(function () {
                    return n.payId = e
                }))
            }, n.updateDeliverTime = function (e) {
                e || (e = {}), b.updateOrderParams({deliver_time: e.value})
            }, n.invoiceRef = {}, n.toggleInvoice = function (e) {
                n.user.user_id && n.checkoutData.invoice.is_available && n.invoices.length && (n.showInvoice = "mouseover" === e.type)
            }, n.selectInvoice = function (e) {
                n.showInvoice = !1, n.invoiceRef.invoiceValue = e.name, b.updateOrderParams({invoice: e.name})
            }, n.updateInvoice = function (e) {
                b.updateOrderParams({invoice: e})
            }, n.deleteInvoice = function (e, t) {
                e.stopPropagation(), r.invoice["delete"]({
                    userId: n.user.user_id,
                    invoiceId: t.id
                }).$promise.then(function () {
                    angular.element(e.target).parent().remove(), n.showInvoice = !1
                })
            }, n.updateDescription = function (e) {
                b.updateOrderParams({description: e})
            };
            var _ = function (t) {
                var n = e.defer();
                return t.is_mobile_valid ? (n.resolve(0), n.promise) : (s({
                    title: "你的手机没有绑定，是否绑定手机？",
                    showCancelButton: !0,
                    type: "warning"
                }, function (e) {
                    "confirm" === e ? n.resolve(1) : n.resolve(0)
                }), n.promise)
            };
            n.orderSubmit = function () {
                n.orderButton.text = "下单中...", n.orderButton.disabled = !0, e.all().then(function () {
                    return b.checkOrderParams()
                }).then(function () {
                    return n.user.user_id && _(n.user)
                }).then(function (e) {
                    return {params: b.updateOrderParams({bind_mobile: e}), mobile: b.addressData.phone || !1}
                }).then(function (e) {
                    var t = e.params, a = e.mobile;
                    return l.cartOrder(t, a, n.user.user_id)
                }).then(function () {
                    n.user.fetch(), y.clearCart()
                })["catch"](function (e) {
                    n.orderButton.text = "确认下单", n.orderButton.disabled = !1, "NO_ADDRESS" === e && s("下单出错", "请添加您的收货地址", "warning"), "ADDRESS_UNVALID" === e && s("下单出错", "系统无法识别您的地址，请修改地址", "warning"), "ADDRESS_IS_TOO_FAR" === e && s({
                        title: "所选地址超出商家配送范围",
                        message: "你选择的地址超出<b>" + c(b.rstInfo.name) + "</b>的配送范围",
                        type: "warning",
                        confirmButtonText: "换个商家下单",
                        showCancelButton: !0,
                        cancelButtonText: "重新选择地址"
                    }, function (e) {
                        "confirm" === e && (i.url("/place/" + b.addressData.st_geohash), n.$apply()), "cancel" === e && window.scroll(0, 0)
                    }), "NOT_SELECT_TIME" === e && s("下单出错", "请选择送达时间", "warning")
                })
            }
        }]
    }
}, function (e, t, n) {
    var a = "/entry/main/checkout/checkout.html",
        i = '<div checkout-guide guide=guide></div><div class="container clearfix"><div ng-if=loading loading content=正在查询购物车...></div><div ng-if="!loading && nofood" nodatatip content="你的购物车是空的，去<a href=\'/place\'>下单</a>吧"></div><div ng-if="!loading && !nofood" class=checkout-cart checkout-cart=cart></div><div ng-if="!loading && !nofood" class=checkout-content><div class=checkout-select checkout-address checkout-data=checkoutData address-list=addressList address=address isbaisheng=isBaishengRst></div><div class=checkout-select><h2 class=checkout-title>付款方式<span class="color-tip checkout-pay-tip">推荐使用在线支付，不用找零，优惠更多</span></h2><ul class=clearfix><li class=checkout-pay ng-repeat="pay in payList" ng-click="selectPay(pay.id, pay.disabled)" ng-class="{active: payId === pay.id, disabled: pay.disabled}" tooltip="{{pay.disabled ? pay.disabledText : \'\'}}"><primary ng-bind=pay.title></primary><primary class=color-mute ng-bind=pay.tip></primary></li></ul></div><div class=checkout-select><h2 class=checkout-title>选择优惠</h2><primary class=checkout-info><span class=checkout-infolabel>使用红包</span> <span class=color-mute>无可用红包<em class=color-stress ng-if=checkout.hongbaoCount>（你有<em ng-bind=checkout.hongbaoCount></em>个手机端专用红包，下载app立即使用）</em></span></primary><primary class=checkout-info><span class=checkout-infolabel>使用优惠券</span> <span class=color-mute>网站不支持<em class=color-stress>（仅手机客户端可用）</em></span></primary></div><div class=checkout-select><h2 class=checkout-title>其他信息</h2><div class=checkout-info><span class=checkout-infolabel>配送方式</span> <span>本订单由<a ng-bind="\' [\' + delivery + \'] \'"></a>提供配送</span></div><div class=checkout-info ng-show=showDeliverTime><span class=checkout-infolabel>送达时间</span><div formselect data=bookTimes choosed=time selectfn=updateDeliverTime></div></div><div class=checkout-info><span class=checkout-infolabel>发票信息</span> <span class=checkout-invoice ng-mouseenter=toggleInvoice($event) ng-mouseleave=toggleInvoice($event)><input class=checkout-input placeholder={{checkoutData.invoice.status_text}} ng-disabled=!checkoutData.invoice.is_available ng-model=invoiceRef.invoiceValue ng-change=updateInvoice(invoiceRef.invoiceValue)><ul class=checkout-invoice-list ng-show=showInvoice><li ng-repeat="item in invoices" ng-click=selectInvoice(item)>{{item.name}} <i class=checkout-invoice-delete ng-click="deleteInvoice($event, item)">x</i></li></ul></span></div><div class=checkout-info><span class=checkout-infolabel>订单备注</span> <span><input class=checkout-input ng-model=note ng-change=updateDescription(note)></span></div></div><div><button quicksubmit-trigger submit-visable=checkout.submitVisable class="btn-stress btn-lg" ng-disabled=orderButton.disabled ng-bind=orderButton.text ng-click=orderSubmit()>确认下单</button><div class=checkout-dapp><primary class=checkout-dapp-tip>扫码下载APP<br>APP下单立享优惠</primary><i class="icon-qrcode checkout-dapp-qrcode"></i> <i class="icon-uniE029 checkout-dapp-arrow"></i> <img src=' + n(112) + ' alt="扫一扫下载饿了么手机 App"></div></div></div></div><div class=checkout-quicksubmit ng-hide="checkout.submitVisable || nofood"><div class=container><span class=quick-text>应付金额 <span class=yen>&yen;</span><span class=total ng-bind=cartView.vm.total></span></span> <button class="btn-stress btn-lg" ng-disabled=orderButton.disabled ng-bind=orderButton.text ng-click=orderSubmit()>确认下单</button></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(a, i)
    }]), e.exports = a
}, function (e, t) {
}, , , , function (e, t, n) {
    "use strict";
    n(368);
    var a = n(370);
    e.exports = ["$q", "$rootScope", "$http", "$templateCache", "$compile", "Popup", "FormModel", function (e, t, n, i, r, o, s) {
        var c = t.$new(), u = function (e) {
            return o.extend({
                defaults: {modal: !0, animation: !1, target: "center", updatePositionOnResize: !0},
                render: function () {
                    return r(e)(c)[0]
                }
            })
        };
        return function (t) {
            return n.get(a, {cache: i}).then(function (n) {
                var a = e.defer(), i = u(n.data), r = new i, o = t.response, l = {
                    mobile_sms: "sms",
                    mobile_sms_review: "sms",
                    mobile_voice_first: "audio",
                    mobile_voice_review: "audio",
                    mobile_login: "sms",
                    mobile_register: "audio"
                }, d = l[o.validation_type];
                switch (o.validation_type) {
                    case"mobile_register":
                        c.topTip = "为了保证你的资金安全，我们需要验证你的手机", c.bottomTip = "验证成功后，将自动为你创建饿了么账户并完成下单";
                        break;
                    case"mobile_login":
                        c.topTip = "你的手机号已注册过饿了么账户，为了保证你的资金安全，我们需要验证你的手机", c.bottomTip = "验证成功后，将自动登录你的饿了么账户并完成下单";
                        break;
                    default:
                        c.topTip = "为了保证你的资金安全，我们需要验证你的手机", c.bottomTip = "验证成功后，将完成下单"
                }
                return r.show(), c.closeModal = function () {
                    r.hide(), a.reject("USER_CANCEL")
                }, c.link = {
                    origin: {labelName: "你的手机号", content: t.mobile},
                    verify: {
                        type: "mobile",
                        startCount: d,
                        startVerify: "audio" === d,
                        link: s({
                            $validators: {
                                validate_code: [{
                                    type: "required",
                                    hintMessage: "验证码是必填项",
                                    errorMessage: "请输入手机验证码",
                                    method: "blur"
                                }]
                            },
                            mobile: t.mobile,
                            api: t.params.api,
                            apiParams: t.params.apiParams,
                            version: t.version,
                            scene: t.scene,
                            autoSend: t.autoSend,
                            sendType: d,
                            apiExtra: function (e) {
                                return "audio" === e.type ? angular.extend(e, {type: "voice"}) : e
                            }
                        })
                    },
                    submitText: "下一步",
                    submit: function () {
                        var e = c.link.verify.link;
                        e.$validate() && (r.hide(), a.resolve({
                            validation_code: e.validate_code,
                            validation_token: e.validate_token || o.validation_token
                        }))
                    }
                }, a.promise
            })
        }
    }]
}, function (e, t) {
}, , function (e, t) {
    var n = "/entry/main/checkout/_block/checkout-verifymobile/checkout-verifymobile.html",
        a = '<div class=checkoutverify-modal><a href=javascript: class="modalclose icon-close" ng-click=closeModal()></a><h5>手机验证</h5><primary class=formtip-top ng-bind=topTip></primary><div security-verify-form link=link></div><primary class=formtip-bottom ng-bind=bottomTip></primary></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t, n) {
    "use strict";
    n(372);
    var a = n(374);
    e.exports = ["$q", "$rootScope", "$http", "$templateCache", "$compile", "Popup", "FormModel", "Zero", "notifyServerError", function (e, t, n, i, r, o, s, c, u) {
        var l = t.$new(), d = function (e) {
            return o.extend({
                defaults: {modal: !0, animation: !1, target: "center", updatePositionOnResize: !0},
                render: function () {
                    return r(e)(l)[0]
                }
            })
        };
        return function (t, r) {
            return n.get(a, {cache: i}).then(function (t) {
                var n = e.defer(), a = d(t.data), i = new a;
                return i.show(), l.mobile = r, l.formLink = s({
                    $validators: {
                        new_password: {
                            type: "length",
                            min: 6,
                            max: 20,
                            errorMessage: "密码需要是字母或数字，最小6位，最大20位",
                            method: "blur"
                        }
                    }
                }), l.closeModal = function () {
                    i.hide(), n.resolve("USER_CANCEL")
                }, l.submit = function () {
                    return l.formLink.$validate() ? c.profile.put({
                        action: "password",
                        type: "user_id",
                        new_password: l.formLink.new_password
                    }).$promise.then(function () {
                        i.hide(), n.resolve("SUCCESS")
                    })["catch"](function (e) {
                        return e.data && u(e, "设置密码失败")
                    }) : void 0
                }, n.promise
            })
        }
    }]
}, function (e, t) {
}, , function (e, t) {
    var n = "/entry/main/checkout/_block/checkout-setpassword/checkout-setpassword.html",
        a = '<div class="checkoutverify-modal checkoutpassword-modal"><a href=javascript: class="modalclose icon-close" ng-click=closeModal()></a><h5>注册并下单</h5><primary class=formtip-top>你已经成功注册饿了么，之后可使用你验证过的手机号码登录饿了么</primary><form class=security-service ng-submit=submit() novalidate><div ng-if=!firstSet form-field label=手机号码 class=field-default><span class="field-default-value default-mobile" ng-bind=mobile></span></div><div form-field label=登录密码 model=formLink property=new_password><input type=password name=new_password ng-model=formLink.new_password></div><div form-field class=form-group><button type=submit class="btn-primary btn-lg">设置密码并完成下单</button></div><div class=passwordmodal-cancelset><a href=javascript: ng-click=closeModal()>稍后设置密码，先下单</a></div></form></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t, n) {
    "use strict";

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var i = function () {
        function e(e, t) {
            var n = [], a = !0, i = !1, r = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0) ;
            } catch (c) {
                i = !0, r = c
            } finally {
                try {
                    !a && s["return"] && s["return"]()
                } finally {
                    if (i) throw r
                }
            }
            return n
        }

        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(), r = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }

        return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    e.exports = ["$q", "$location", "Zero", "checkoutMobileVerify", "checkoutSetPassword", "MessageBox", "notifyServerError", "Loading", "checkoutCartView", function (e, t, o, s, c, u, l, d, p) {
        var h = function y(t) {
            return s(t).then(function (e) {
                return o.cartOrder.post(angular.extend({}, t.params, e)).$promise
            }).then(function (e) {
                return angular.extend(e, {validation_type: t.response.validation_type})
            })["catch"](function (n) {
                if (n.data && ("INVALID_VALIDATE_CODE" === n.data.name || "INVALID_VERIFY_CODE" === n.data.name)) {
                    var a = function () {
                        var n = e.defer();
                        return u({title: "验证码错误", message: "请重新填写验证码", type: "error"}, function () {
                            return n.resolve(y(t))
                        }), {v: n.promise}
                    }();
                    if ("object" == typeof a) return a.v
                }
                return e.reject(n)
            })
        }, m = function (e, t) {
            return c(e.user_id, t).then(function () {
                return e
            })
        }, f = function (a, r, s) {
            return e.all().then(function () {
                return o.cartOrder.post(a).$promise
            }).then(function (e) {
                return e.need_validation ? (angular.extend(a, {
                    api: o.cart.post,
                    apiParams: {action: "verify_code", cartId: a.cartId, sig: a.sig}
                }), h({params: a, response: e, mobile: e.validation_phone})) : e
            }).then(function (e) {
                return "mobile_register" === e.validation_type ? m(e, r) : e
            }).then(function (e) {
                return 0 === a.paymethod_id ? t.url("/order/" + e.unique_id + "/success/offline") : !e.is_new_pay && e.hasOwnProperty("is_new_pay") && 1 === a.paymethod_id ? t.url("/order/" + e.unique_id + "/pay") : (e.user_profile && (s = e.user_profile.user_id), o.makeTransaction.query({
                    userId: s,
                    orderId: e.unique_id
                }).$promise.then(function (t) {
                    var a = n(376), r = "", o = localStorage.getItem("GEOHASH");
                    if (o) {
                        var c = Geohash.decode(o), u = i(c, 2), l = u[0], d = u[1];
                        r = "loc=" + d + "," + l
                    }
                    new a({
                        merchantId: t.merchant_id,
                        transOrderInfoList: [{busiOrderNo: e.unique_id, partnerId: 501001}],
                        type: "web",
                        from: "WAIMAI_PC",
                        userId: s,
                        xShard: r
                    }).open()
                }))
            })["catch"](function (t) {
                return "FINISHED" !== t && t.data ? (l(t, "下单出错"), e.reject("CATCHED")) : e.reject(t)
            })
        }, g = function (e, t) {
            return !e.st_geohash || 1 === e.poi_type && t ? (e.needupgrade = !0, !0) : e.is_deliverable ? !1 : !0
        }, v = function () {
            function t() {
                a(this, t)
            }

            return r(t, [{
                key: "init", value: function () {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        a = arguments.length <= 3 || void 0 === arguments[3] ? -1 : arguments[3],
                        i = arguments.length <= 4 || void 0 === arguments[4] ? {} : arguments[4];
                    this.orderParamsData = angular.extend({
                        userId: "anonymous",
                        cartId: t.id,
                        come_from: "web",
                        sig: t.sig,
                        paymethod_id: a,
                        description: "",
                        deliver_time: "",
                        invoice: "",
                        bind_mobile: ""
                    }, e), this.cartData = t, this.addressData = n || {}, this.paymethod_id = a, this.rstInfo = i, this.invoiceAvailable = e.invoiceAvailable
                }
            }, {
                key: "updateOrderParams", value: function (e) {
                    return angular.extend(this.orderParamsData, e)
                }
            }, {
                key: "updateCart", value: function (e) {
                    return this.post({entities: e})
                }
            }, {
                key: "updateAddress", value: function (e) {
                    var t = this;
                    return this.post({address_id: e}).then(function () {
                        t.updateOrderParams({address_id: e})
                    })
                }
            }, {
                key: "updatePaymethod", value: function (e) {
                    return this.post({paymethod_id: e})
                }
            }, {
                key: "post", value: function (t) {
                    var n = this, a = (new d).init("加载中...");
                    return a.show(), o.cart.post(angular.extend({
                        action: "checkout",
                        come_from: "web",
                        geohash: localStorage.getItem("GEOHASH"),
                        cartId: this.cartData.cartId,
                        sig: this.cartData.sig,
                        address_id: t.address_id || this.orderParamsData.address_id,
                        entities: t.entities || this.cartData.group,
                        paymethod_id: t.paymethod_id || this.paymethod_id
                    }, t)).$promise.then(function (t) {
                        var i = t.cart, r = t.sig, o = t.current_address, s = t.payments, c = t.invoice;
                        return c.is_available = !1, c.status_text = "仅在饿了么 APP 中支持开发票哦", null === o ? e.reject({
                            data: {
                                name: "ADDRESS_NO_VALID",
                                message: "地址超出配送范围,请重新添加"
                            }
                        }) : (a.hide(), n.cartData = i, p.vm = p.$sort(i), n.addressData = o, n.paymethod_id = s.filter(function (e) {
                            return 1 === e.select_state
                        })[0].id, n.invoiceAvailable(c), n.updateOrderParams({
                            cartId: i.id,
                            sig: r,
                            paymethod_id: n.paymethod_id
                        }), {cartData: i, current_address: o})
                    })["catch"](function (t) {
                        return l(t), a.hide(), e.reject({name: "SYSTEM_ERROR"})
                    })
                }
            }, {
                key: "checkOrderParams", value: function () {
                    var t = this.addressData || {};
                    return t.id ? t.st_geohash ? this.rstInfo.only_use_poi && 1 === t.poi_type ? e.reject("ADDRESS_UNVALID") : this.cartData.is_address_too_far ? e.reject("ADDRESS_IS_TOO_FAR") : -1 === this.orderParamsData.deliver_time ? e.reject("NOT_SELECT_TIME") : this.orderParamsData : e.reject("ADDRESS_UNVALID") : e.reject("NO_ADDRESS")
                }
            }]), t
        }();
        return {cartOrder: f, isAddressUnvalid: g, checker: new v}
    }]
}, function (e, t, n) {
    !function (t, n) {
        e.exports = n()
    }(this, function () {
        return function (e) {
            function t(a) {
                if (n[a]) return n[a].exports;
                var i = n[a] = {i: a, l: !1, exports: {}};
                return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports
            }

            var n = {};
            return t.m = e, t.c = n, t.i = function (e) {
                return e
            }, t.d = function (e, n, a) {
                t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: a})
            }, t.n = function (e) {
                var n = e && e.__esModule ? function () {
                    return e["default"]
                } : function () {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 3)
        }([function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            t.TYPE = {mobile: "mobile", web: "web"}, t.DOMAIN = {
                mobile: {
                    apirouter: "pay.faas.ar.elenet.me",
                    ar: "pay.faas.ar.elenet.me",
                    azone: "pay.faas.alta.elenet.me",
                    alta: "pay.faas.alta.elenet.me",
                    bzone: "pay.faas.altb.elenet.me",
                    altb: "pay.faas.altb.elenet.me",
                    alpha: "pay.faas.alpha.elenet.me",
                    prd: "pay.faas.ele.me",
                    prod: "pay.faas.ele.me"
                },
                web: {
                    apirouter: "webpay.faas.ar.elenet.me",
                    ar: "webpay.faas.ar.elenet.me",
                    azone: "webpay.faas.alta.elenet.me",
                    alta: "webpay.faas.alta.elenet.me",
                    bzone: "webpay.faas.altb.elenet.me",
                    altb: "webpay.faas.altb.elenet.me",
                    alpha: "webpay.faas.alpha.elenet.me",
                    prd: "webpay.faas.ele.me",
                    prod: "webpay.faas.ele.me"
                }
            }, t.ENV_LIST = ["apirouter", "ar", "azone", "alta", "bzone", "altb", "alpha", "beta", "prd", "prod", "local"]
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = {
                isHttps: {
                    apirouter: !0,
                    ar: !0,
                    azone: !0,
                    alta: !0,
                    bzone: !0,
                    altb: !0,
                    alpha: !0,
                    prd: !0,
                    prod: !0
                },
                error: {prefix: "[饿了么支付SDK]: "},
                requiredParams: ["merchantId", "transOrderInfoList", "userId", "env", "xShard"]
            }
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, i = (t.assign = function (e) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                e = Object(e);
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (null != n) for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }, t.map = function (e, t) {
                var n, a, i;
                if (null == this) throw new TypeError("this is null or not defined");
                var r = Object(this), o = r.length >>> 0;
                if ("[object Function]" !== Object.prototype.toString.call(e)) throw new TypeError(e + " is not a function");
                for (t && (n = t), a = new Array(o), i = 0; o > i;) {
                    var s, c;
                    i in r && (s = r[i], c = e.call(n, s, i, r), a[i] = c), i++
                }
                return a
            }), r = (t.includes = function (e, t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var n = Object(this), a = n.length >>> 0;
                if (0 === a) return !1;
                for (var i = 0 | t, r = Math.max(i >= 0 ? i : a - Math.abs(i), 0); a > r;) {
                    if (n[r] === e) return !0;
                    r++
                }
                return !1
            }, t.reduce = function (e, t) {
                if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                if ("function" != typeof e) throw new TypeError(e + " is not a function");
                var n, a = Object(this), i = a.length >>> 0, r = 0;
                if (arguments.length >= 2) n = arguments[1]; else {
                    for (; i > r && !(r in a);) r++;
                    if (r >= i) throw new TypeError("Reduce of empty array with no initial value");
                    n = a[r++]
                }
                for (; i > r; r++) r in a && (n = e(n, a[r], r, a));
                return n
            }, t.isArray = function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }), o = t.toString = function (e) {
                if (null === e || void 0 === e) return "";
                if (r(e)) {
                    var t = i.call(e, function (e) {
                        return "'" + e + "'"
                    }).join(",");
                    return "[" + t + "]"
                }
                switch ("undefined" == typeof e ? "undefined" : a(e)) {
                    case"string":
                        return e;
                    default:
                        return e.toString ? e.toString() : ""
                }
            };
            t.toQueryString = function (e) {
                if ("object" !== ("undefined" == typeof e ? "undefined" : a(e))) return "";
                var t = [];
                for (var n in e) {
                    var i = o(e[n]);
                    if (i) {
                        var r = n + "=" + encodeURIComponent(i);
                        t.push(r)
                    }
                }
                return t.join("&")
            }
        }, function (e, t, n) {
            "use strict";

            function a(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function i(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e) {
                var t = e.env, n = e.xShard;
                if (n && (e.xShard = window.decodeURIComponent(n)), "local" === t) return e;
                var a = e.url, i = e.env, r = e.type, o = e.isHttps;
                return (0, d.assign)({}, e, {
                    url: a || l.DOMAIN[r][i],
                    type: r,
                    env: i,
                    isHttps: o || h["default"].isHttps[i]
                })
            }

            function s(e) {
                var t = d.reduce.call(h["default"].requiredParams, function (t, n) {
                    return n in e ? t : [].concat(i(t), [n])
                }, []);
                if (t.length > 0) {
                    var n = t.join(",");
                    throw new Error(h["default"].error.prefix + "以下字段缺失: " + n)
                }
                if ("local" === e.env && !e.url) throw new Error(h["default"].error.prefix + "本地开发环境必须填写 url");
                var a = d.includes.call(l.ENV_LIST, e.env);
                if (!a) throw new Error(h["default"].error.prefix + "参数 env 不合法");
                return !0
            }

            function c(e) {
                var t = e.isHttps ? "https://" : "http://", n = (0, d.toQueryString)({
                    merchantId: e.merchantId,
                    transOrderInfoList: JSON.stringify(e.transOrderInfoList),
                    userId: e.userId,
                    from: e.from || "",
                    buyerId: e.buyerId || "",
                    xShard: e.xShard || ""
                });
                return "" + t + e.url + "?" + n
            }

            var u = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }

                return function (t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(), l = n(0), d = n(2), p = n(1), h = a(p), m = {type: l.TYPE.mobile, env: "prd"}, f = function () {
                function e(t) {
                    r(this, e);
                    var n = (0, d.assign)({}, m, t);
                    return s(n), this.init(n), this
                }

                return u(e, [{
                    key: "init", value: function (e) {
                        var t = o(e);
                        (0, d.assign)(this, t), this.url = c(t)
                    }
                }, {
                    key: "open", value: function () {
                        try {
                            window.location.href = this.url
                        } catch (e) {
                            throw new Error(h["default"].error.prefix + "无法打开页面, " + e)
                        }
                    }
                }]), e
            }();
            f.version = "1.0.0", e.exports = f
        }])
    })
}, function (e, t) {
    "use strict";

    function n(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }

        return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    e.exports = function () {
        return new (function () {
            function e() {
                a(this, e), this.orderButton = {}, this.nofood = {}
            }

            return i(e, [{
                key: "init", value: function (e, t, n) {
                    return this.vm = this.$sort(e), this.pieces = this.$count(e), this.$localCart = t, this.$checker = n, this.updateOrderButton(e), this
                }
            }, {
                key: "findMinPurchase", value: function (e) {
                    if (this.cacheMins && this.cacheMins[e]) return this.cacheMins[e];
                    var t = window.localStorage.getItem("CART_RECORD"), n = {};
                    try {
                        n = JSON.parse(t || "{}")
                    } catch (a) {
                    }
                    return n && n[e] ? (this.cacheMins = n, n[e]) : 1
                }
            }, {
                key: "$sort", value: function (e) {
                    return e.group = e.group.map(function (e) {
                        return e.sort(function (e, t) {
                            return t.id - e.id
                        })
                    }), e
                }
            }, {
                key: "$count", value: function (e) {
                    var t;
                    return (t = []).concat.apply(t, n(e.group)).reduce(function (e, t) {
                        return e + t.quantity
                    }, 0)
                }
            }, {
                key: "add", value: function (e) {
                    return this.updateVM(e, e.quantity + 1)
                }
            }, {
                key: "sub", value: function (e) {
                    var t = this.findMinPurchase(e.id), n = e.quantity <= t ? 0 : +e.quantity - 1;
                    return this.updateVM(e, n)
                }
            }, {
                key: "update", value: function (e) {
                    if (e.quantity) {
                        var t = this.findMinPurchase(e.id), n = +e.quantity > t ? +e.quantity : t;
                        return this.updateVM(e, n)
                    }
                }
            }, {
                key: "blur", value: function (e) {
                    return e.quantity = 1, this.updateVM(e, e.quantity)
                }
            }, {
                key: "updateOrderButton", value: function (e) {
                    var t, a = (t = []).concat.apply(t, n(e.group)).reduce(function (e, t) {
                            return e + t.quantity * t.price
                        }, 0), i = (e.restaurant_minimum_order_amount - a).toFixed(2),
                        r = this.$localCart.getOrderState(!this.pieces, i, e.restaurant_status), o = r.name, s = r.text,
                        c = r.disabled;
                    "CAN_ORDER" === o && (s = "确认下单"), angular.extend(this.orderButton, {text: s, disabled: c})
                }
            }, {
                key: "updateVM", value: function (e, t) {
                    var n = this;
                    if (!this.disabledState) {
                        var a = parseInt(t, 10);
                        return e.quantity = isNaN(a) ? 1 : a, this.disabledState = !0, this.orderButton.disabled = !0, this.vm.group = this.vm.group.map(function (e) {
                            return e.filter(function (e) {
                                return e.quantity > 0
                            })
                        }).filter(function (e) {
                            return e.length > 0
                        }), this.vm.group.length ? this.$checker.updateCart(this.vm.group).then(function (e) {
                            var t = e.cartData;
                            n.$localCart.updateFromCartData(t), n.disabledState = !1, n.vm = n.$sort(t), n.pieces = n.$count(t), n.updateOrderButton(t)
                        })["catch"](function () {
                            n.disabledState = !1
                        }) : (this.$localCart.clearCart(), angular.extend(this.nofood, {nofood: !0}))
                    }
                }
            }]), e
        }())
    }
}, function (e, t, n) {
    "use strict";
    n(379);
    var a = n(383);
    e.exports = ["LocalCart", "checkoutCartView", "checkoutService", function (e, t, n) {
        return {
            templateUrl: a, scope: {cartData: "=checkoutCart"}, controller: ["$scope", function (a) {
                var i = new e, r = n.checker;
                a.cart = t.init(a.cartData, i, r)
            }]
        }
    }]
}, function (e, t) {
}, , , , function (e, t) {
    var n = "/entry/main/checkout/_block/checkout-cart/checkout-cart.html",
        a = '<div class=checkoutcart-container><div class=checkoutcart-title><h2>订单详情</h2><a ng-href=/shop/{{$root.layoutState.rstUrl}}>&lt; 返回商家修改</a></div><div class="checkoutcart-tablerow tablehead"><div class="cell itemname">商品</div><div class="cell itemquantity">份数</div><div class="cell itemtotal">小计（元）</div></div><dl ng-if=basket.length ng-repeat="basket in cart.vm.group" class=checkoutcart-group><dt ng-bind="$index + 1 + \'号购物车\'" class=checkoutcart-grouptitle><dd ng-repeat="item in basket"><div class=checkoutcart-tablerow><div class="cell itemname" ng-bind=item.name title={{item.name}}></div><div class="cell itemquantity"><button ng-click=cart.sub(item)>-</button><input ng-model=item.quantity ng-change=cart.update(item) ng-blur=cart.blur(item)><button ng-click=cart.add(item)>+</button></div><div class="cell itemtotal" ng-bind="\'&yen;\' + (item.price * item.quantity | number:2)"></div></div></dl><ul ng-if="cart.vm.extra || cart.vm.records"><li ng-repeat="item in cart.vm.extra" class="checkoutcart-tablerow extra"><div class="cell itemname"><span ng-bind=item.name title={{item.name}}></span> <span ng-if="item.name === \'配送费\'" class=icon-circle-help tooltip={{cart.vm.service_fee_explanation}} tooltip-placement=left></span></div><div class="cell itemquantity"></div><div class="cell itemtotal" ng-class="{minus: item.price < 0}" ng-bind="\'&yen;\' + (item.price | number:2)"></div></li><li ng-repeat="item in cart.vm.records"><div class="cell itemname" ng-bind=item.name title={{item.name}}></div><div class="cell itemquantity"></div><div class="cell itemtotal" ng-class="{minus: item.amount < 0}" ng-bind="\'&yen;\' + (item.amount | number:2)"></div></li></ul><div class="checkoutcart-total color-stress">&yen;<span class=num ng-bind="cart.vm.total | number: 2"></span></div><div class=checkoutcart-totalextra>共 <span ng-bind=cart.pieces></span> 份商品<span ng-if=cart.vm.benefit>，已优惠 <span ng-bind=""></span> 元<span></span></span></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t, n) {
    "use strict";
    n(385);
    var a = n(387);
    e.exports = ["$q", "$rootScope", "$http", "$templateCache", "$compile", "Popup", "checkoutService", "notifyServerError", function (e, t, n, i, r, o, s, c) {
        var u = function (e) {
            return n.get(a, {cache: i}).then(function (t) {
                var n = o.extend({
                    defaults: {modal: !0, animation: !1, target: "center", updatePositionOnResize: !0},
                    render: function () {
                        return r(t.data)(e)[0]
                    }
                });
                return new n
            })
        };
        return {
            scope: {cart: "="}, link: function (e, t) {
                return u(e).then(function (n) {
                    var a = {}, i = void 0;
                    t.on("click", function () {
                        n.dom = null, n.show(), i = angular.element(n.dom.querySelector("#cartmini"))
                    }), e.showCartMini = function (e, t) {
                        var n = t.target.parentNode;
                        a = e, i.css({display: "block"}), n.appendChild(i[0])
                    }, e.hideCartMini = function () {
                        return i.css({display: "none"})
                    }, e.addGarnishTo = function (t) {
                        e.hideCartMini(), s.addGarnish(a, t).then(function () {
                            return a.quantity++
                        })["catch"](function (e) {
                            return c(e, "配菜添加失败！")
                        })
                    }, e.closeModal = function () {
                        e.hideCartMini(), n.hide()
                    }
                })
            }
        }
    }]
}, function (e, t) {
}, , function (e, t) {
    var n = "/entry/main/checkout/_block/checkout-cartgarnish/checkout-cartgarnish.html",
        a = '<div class=checkoutgarnish-modal><a class="icon-close modalclose" href=javascript: ng-click=closeModal()></a><h4>添加配菜</h4><div class=checkoutgarnish-listbox><ul><li class=checkoutgarnish-row ng-repeat="garnish in garnishList"><span class="cell name" ng-bind=garnish.name></span> <span class="cell price"><span class="cellitem yen">&yen;</span><span class="cellitem num" ng-bind=garnish.price></span> <span ng-if=garnish.quantity><span class="cellitem x">x</span><span ng-bind=garnish.quantity></span></span></span> <span class="cell action"><button class="cellitem button" type=button ng-click="showCartMini(garnish, $event)">添加到</button></span></li></ul><div class=checkoutgarnish-cart id=cartmini><dl class=checkoutgarnish-cartgroup ng-repeat="basket in cart.group"><dt ng-bind="$index + 1 + \'号购物车\'"><dd class="cell itemname" ng-repeat="item in basket" ng-bind=item.name title={{item.name}} ng-click=addGarnishTo(item)></dl><div class="checkoutgarnish-arrow icon-profile-right-arrow"></div></div></div><button class="modalconfirm btn-lg" type=button ng-click=closeModal()>选好了</button></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t, n) {
    "use strict";
    var a = n(389);
    n(390);
    var i = function () {
        return {
            restrict: "A", replace: !0, templateUrl: a, scope: {guide: "="}, link: function (e) {
                e.a = 1
            }
        }
    };
    e.exports = i
}, function (e, t) {
    var n = "/entry/main/checkout/_block/checkout-guide/checkout-guide.html",
        a = '<div class=checkoutguide><div class=container><a class="checkoutguide-logo icon-logo" href="/"></a> <span class=checkoutguide-text ng-bind=guide.text></span><div class="checkoutguide-content step{{guide.step}}" ng-if=guide.step><span class=checkoutguide-item ng-class="{active: guide.step >= 1}">选择商品</span> <span class=checkoutguide-item ng-class="{active: guide.step >= 2}">确认订单信息</span> <span class=checkoutguide-item ng-class="{active: guide.step >= 3}">成功提交订单</span><primary class=checkoutguide-line><span class="line line1"></span> <span class="line line2"></span> <span class="line line3"></span> <span class="line line4"></span></primary></div></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    var a = n(393);
    n(394);
    var i = ["$rootScope", "Address", "MessageBox", "checkoutService", "Zero", function (e, t, n, i, r) {
        return {
            restrict: "A",
            replace: !0,
            templateUrl: a,
            scope: {checkoutData: "=", addressList: "=", address: "=", isbaisheng: "="},
            controller: ["$scope", function (a) {
                "undefined" == typeof a.addressList && (a.addressList = [], a.address && a.addressList.push(a.address));
                var o = i.checker, s = i.isAddressUnvalid;
                a.$$postDigest(function () {
                    t.init({
                        userId: e.user.user_id,
                        geohash: e.geohash,
                        poiOnly: !0
                    }), r.cartAddress.query({
                        cartId: a.checkoutData.cart.id,
                        sig: a.checkoutData.sig
                    }).$promise.then(function (e) {
                        a.addressList = e, a.address ? o.updateOrderParams({address_id: a.address.id}) : a.noInitAddress = !0
                    })
                }), a.selectAddress = function (e, t) {
                    s(t, a.isbaisheng) || "click" !== e.type || a.address && a.address.id === t.id || (a.address = t, o.updateAddress(a.address.id))
                }, a.addAddress = function () {
                    t.add(function (e) {
                        o.updateAddress(e.id).then(function () {
                            a.address = e, a.addressList.unshift(e)
                        })["catch"](function () {
                            a.address = {}
                        })
                    })
                }, a.removeAddress = function (e, i) {
                    e.stopPropagation(), n({title: "确定删除送货地址？", type: "warning", showCancelButton: !0}, function (e) {
                        "confirm" === e && t.remove(i).then(function () {
                            a.addressList.splice(a.addressList.indexOf(i), 1), a.address.id === i.id && (a.address = a.addressList[0], a.address ? o.updateAddress(a.address.id) : o.updateAddress(null))
                        })
                    })
                }, a.editAddress = function (e, n) {
                    e.stopPropagation(), t.edit(n, function (e) {
                        n.st_geohash = e.st_geohash, a.address = angular.extend(n, e), o.updateAddress(a.address.id)
                    })
                }
            }]
        }
    }];
    e.exports = i
}, function (e, t) {
    var n = "/entry/main/checkout/_block/checkout-address/checkout-address.html",
        a = '<div><h2>收货地址 <a ng-show=addressList.length class=checkout-addaddress href=javascript: ng-click=addAddress()>添加新地址</a></h2><a class=checkout-noaddress ng-if=!addressList.length href=javascript: ng-click=addAddress()>+ 添加新地址</a><ul ng-hide=!addressList.length class=checkout-address-list ng-class="{ showmore: showMoreAddress, showfirst: noInitAddress }"><li class=checkout-address ng-repeat="item in addressList" ng-click="selectAddress($event, item)" ng-class="{active: address.id === item.id}" ng-mouseenter="selectAddress($event, item)"><i class="checkout-address-icon icon-location-line"></i><div class=checkout-address-info><primary ng-bind="item.name + [\' \', \' 先生 \', \' 女士 \'][item.sex] + item.phone"></primary><primary class=color-weak ng-bind="item.address + item.address_detail"></primary></div><div class=checkout-address-edit><a href=javascript: ng-click="editAddress($event, item)">修改</a> <a href=javascript: ng-click="removeAddress($event, item)">×</a></div><primary ng-if=!item.st_geohash ng-show=item.needupgrade class=checkout-address-needupgrade>为了提供更好的配送服务，需要你完善地址信息 <button class="btn-stress btn-sm" ng-click="editAddress($event, item)">升级地址</button></primary><primary ng-if=!item.is_deliverable ng-show=!item.is_deliverable class=checkout-address-needupgrade>地址超出配送范围</primary><primary ng-if="item.st_geohash && item.poi_type === 1 && isbaisheng" ng-show=item.needupgrade class=checkout-address-needupgrade>商家未能识别你的位置信息，你需要为商家提供准确的送货位置 <button class="btn-stress btn-sm" ng-click="editAddress($event, item)">升级地址</button></primary></li><a class=checout-showmoreaddress href=javascript: ng-click="showMoreAddress = true" ng-show="!showMoreAddress && addressList.length > 1">显示更多地址<i class=icon-arrow-down></i></a> <a class=checout-showmoreaddress href=javascript: ng-click="showMoreAddress = false" ng-show="showMoreAddress && addressList.length > 1">收起<i class=icon-arrow-up></i></a></ul></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , function (e, t, n) {
    "use strict";
    var a = n(397);
    n(398);
    var i = ["$rootScope", "$scope", "$routeParams", "$location", "$filter", "$interval", "$q", "$http", "checkoutMobileVerify", "Zero", "notifyServerError", "FormModel", "Dialog", "MessageBox", function (e, t, n, a, i, r, o, s, c, u, l, d, p, h) {
        e.layoutState = {type: "checkout", hideSidebar: !0}, t.$on("$destroy", function () {
            return e.layoutState = {}
        }), t.guide = {text: "收银台"}, t.forgetUrl = e.ACCOUNTBASE + ("/forget?redirect_url=" + encodeURIComponent(location.href));
        var m = n.orderId, f = function (e) {
            var n = e[0];
            if (t.address = {
                    name: n.consignee,
                    phone: n.phone,
                    address: n.address
                }, -5 !== n.status_code && -3 !== n.status_code) return void(location.href = "/profile/order/id/" + m);
            void function () {
                var e = Date.parse(n.pay_expired_time), a = function s() {
                    var s = e - (new Date).getTime();
                    0 >= s && (r.cancel(o), location.href = "/profile/order/id/" + m), t.timeDown = i("date")(s, "mm:ss")
                };
                a();
                var o = r(a, 1e3)
            }();
            var a = e[1];
            t.payWay = a.web_online_paymethods.filter(function (e) {
                return e.is_selected
            })[0], t.payInfo = a, a.balance_paid_amount && (t.payInfo.balance_pay = a.balance_paid_amount > a.total ? a.total : a.balance_paid_amount)
        };
        t.user.$promise.then(function () {
            return o.all([u.order().get({
                userId: t.user.user_id,
                filter: m
            }).$promise, u.order().get({
                userId: t.user.user_id,
                filter: m,
                action: "payments",
                "extras[]": ["web_online_paymethods"],
                hongbao_action: 0
            }).$promise])
        }).then(function (e) {
            return f(e)
        })["catch"](function (e) {
            switch (e.data.name) {
                case"HTTP_NOT_FOUND":
                    a.url("/404");
                    break;
                case"HTTP_UNAUTHORIZED":
                    location.href = t.ACCOUNTBASE + ("/login?redirect_url=" + encodeURIComponent(location.href));
                    break;
                default:
                    l(e, "出错了")
            }
        }), t.selectPayWay = function (e) {
            return t.payWay = e
        }, t.pay = {};
        var g, v = function () {
            h({
                title: "请在打开的页面上完成付款",
                message: "付款完成前请不要关闭此窗口",
                type: "warning",
                showCancelButton: !0,
                confirmButtonText: "已完成付款",
                cancelButtonText: "付款遇到问题",
                buttons: [{action: "reset", content: '<a class="payreset-btn" href="javascript:">返回选择其他支付方式 &gt;</a>'}]
            }, function (e) {
                "confirm" === e && (a.url("/order/" + m + "/success/online"), t.$apply()), "cancel" === e && window.open("/support/question/payment")
            })
        }, y = function () {
            return u.payRecord.get({userId: t.user.user_id, payId: t.payId}).$promise
        };
        t.$on("$destroy", function () {
            return r.cancel(g)
        });
        var b = function (e) {
            return r.cancel(g), t.payId = e.web.payrecord_id, e.is_completed ? a.url("/order/" + m + "/success/online") : void("tenpay" === t.payWay.icon_name ? (t.pay.wechatQrcode = {
                content: e.web.pay_url,
                width: 260,
                height: 260
            }, p.show("wechatPayDialog"), g = r(function () {
                y().then(function (e) {
                    2 === e.pay_status && (a.url("/order/" + m + "/success/online"), r.cancel(g))
                })
            }, 1e3)) : (window.open(e.web.pay_url), v()))
        }, _ = function (e) {
            var n = o.defer(), a = {
                come_from: "web",
                pay_company_id: t.payWay.company,
                pay_bank: t.payWay.bank,
                password: t.pay.password
            };
            e && (a.validation_token = e.validation_token, a.validation_code = e.validation_code);
            var i = new XMLHttpRequest, r = t.user.user_id;
            return i.open("post", "restapi/v1/users/" + r + "/orders/" + m + "/payments", !1), i.onreadystatechange = function () {
                if (4 === i.readyState && 200 === i.status) n.resolve({data: JSON.parse(i.responseText)}); else {
                    var e = JSON.parse(i.responseText);
                    "USER_AUTH_FAIL" === e.name && (e.message = "请输入正确的登录密码"), n.reject({data: e})
                }
            }, i.send(JSON.stringify(a)), n.promise
        };
        t.payment = function () {
            if (!t.payInfo.need_password || t.pay.password) {
                t.payInfo.paying = !0;
                var e = {
                    mobile: t.user.mobile,
                    params: {},
                    autoSend: !0,
                    version: "v2",
                    scene: "payment_limit",
                    response: {validation_type: "mobile_sms"}
                };
                o.all().then(function () {
                    return t.payInfo.payment_limit_need_validate && c(e)
                }).then(function (e) {
                    return _(e)
                }).then(function (e) {
                    t.payInfo.paying = !1, b(e.data)
                })["catch"](function (e) {
                    t.payInfo.paying = !1, l(e, "支付失败")
                })
            }
        }
    }];
    e.exports = {templateUrl: a, controller: i}
}, function (e, t) {
    var n = "/entry/main/checkout/pay/pay.html",
        a = '<div checkout-guide guide=guide></div><div class="pay-header container"><i class="icon-circle-check pay-header-icon"></i><div class=pay-header-info><h2>您的订单已提交成功！付款咯~</h2><span class=color-weak>送货至： <em ng-bind=address.name></em> <em ng-bind="address.phone | mobileMask"></em> <em class=pay-header-address ng-bind=address.address></em></span></div><span class=pay-header-money>应付总额：<em class="color-stress ui-arial">&yen;{{payInfo.total}}</em></span></div><form class="pay-main container" ng-submit=payment()><h2 class=pay-main-title>请选择以下支付方式 <span class="color-mute pay-timetip">剩余支付时间<em class=color-stress>{{timeDown}}</em>，逾期订单将自动取消</span></h2><div class=pay-type ng-if=payInfo.balance_pay><h3 class=pay-main-subtitle>余额支付<em class=color-mute>（使用饿了么账户余额支付）</em></h3><primary class=ui-block-stress>饿了么可用余额<span class="pay-balance ui-arial" ng-bind="\'&yen;\' + (payInfo.balance | number:float)"></span> <span class="color-stress pay-balance-useup ui-arial">-&yen;{{payInfo.balance_pay}}</span></primary></div><div class=pay-type ng-if=payInfo.online_payment_amount><h3 class=pay-main-subtitle>剩余<span class="color-stress ui-arial" ng-bind="\'&yen;\' + payInfo.online_payment_amount"></span>支付 <em>（请选择剩余金额的支付方式）</em></h3><ul class="pay-way clearfix" ng-click=selectPayWay><li class={{way.icon_name}} ng-repeat="way in payInfo.web_online_paymethods" ng-click=selectPayWay(way) ng-class="{active: payWay.name === way.name}" title=使用{{way.name}}支付></li></ul></div><div ng-if=payInfo.need_password><primary>为保障饿了么账户资金安全，请验证登录密码才可以使用余额哦</primary><div class=pay-password><span>登录密码</span> <input type=password ng-model=pay.password> <a ng-href={{forgetUrl}}>忘记密码？</a></div></div><button class="btn-stress btn-lg" ng-disabled="payInfo.paying || (payInfo.need_password && !pay.password)">确认支付</button></form><div dialog=wechatPayDialog class=wechatpay-dialog><h3 class=wechatpay-dialog-title>使用微信支付<span class=color-stress ui-arial>&yen;{{payInfo.online_payment_amount}}</span></h3><div content2qrcode config=pay.wechatQrcode class=wechat-qrcode></div><div class=wechatpay-dialog-tip><i class=icon-scan></i><primary>请使用微信扫一扫<br>扫描二维码完成支付</primary></div></div><div dialog=mobileVerify><div security-verify-form link=link></div></div>';
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(n, a)
    }]), e.exports = n
}, function (e, t) {
}, , , , function (e, t, n) {
    "use strict";
    var a = n(403);
    n(404);
    var i = ["$rootScope", "$scope", "$routeParams", "$location", "$sce", "Zero", "notifyServerError", function (e, t, n, a, i, r, o) {
        e.layoutState = {type: "checkout", hideSidebar: !0}, t.$on("$destroy", function () {
            return e.layoutState = {}
        }), t.guide = {step: 3, text: "完成订单"}, t.loading = !0;
        var s = n.orderId, c = function (e) {
            var n = {};
            n.name = e.consignee, n.phone = e.phone, n.address = e.address, t.address = n, t.order = e, t.loading = !1, e.is_book ? t.leadTime = e.deliver_time : t.leadTime = (new Date).getTime() + 6e4 * e.restaurant.order_lead_time, e.is_online_paid && -1 !== [-5, -4, -3].indexOf(e.status_code) && (location.href = "profile/order/id/" + s)
        };
        t.user.$promise.then(function () {
            return r.order(s).get({userId: t.user.user_id, filter: s, "extras[]": ["restaurant"]}).$promise
        }).then(function (e) {
            return c(e)
        })["catch"](function (e) {
            switch (e.data.name) {
                case"HTTP_NOT_FOUND":
                    a.url("/404");
                    break;
                case"HTTP_UNAUTHORIZED":
                    location.href = t.ACCOUNTBASE + ("/login/#redirect=" + encodeURIComponent(location.href));
                    break;
                default:
                    o(e, "出错了")
            }
        })
    }];
    e.exports = {templateUrl: a, controller: i}
}, function (e, t, n) {
    var a = "/entry/main/checkout/success/success.html",
        i = '<div checkout-guide guide=guide></div><div loading ng-if=loading></div><div class="ordersuccess pay-header container" ng-show=!loading><i class="icon-circle-check pay-header-icon"></i><div class=pay-header-info><h2 ng-if=order.is_online_paid>订单已成功提交并付款，请耐心等待你的外卖</h2><h2 ng-if=!order.is_online_paid>订单已成功提交，请耐心等待你的外卖</h2><span class=color-weak>送货至： <em ng-bind=address.name></em> <em ng-bind="address.phone | mobileMask"></em> <em class=pay-header-address ng-bind=address.address></em></span><div class=ordersuccess-tip><primary>享受完美食后评价订单还能获得金币哦~ 查看<a href=/profile/points hardjump>我的金币</a></primary><primary>预测送餐时间为<em class=color-stress ng-bind="leadTime | date:\'HH:mm\'"></em>，请保持手机畅通</primary></div><div class=ordersuccess-action><a class="btn-primary btn-lg" hardjump ng-href=/profile/order/id/{{order.unique_id}}>订单详情</a> <a class=inherit hardjump href=/profile/order>我的订单</a></div></div><div class=ordersuccess-aside><img src=' + n(112) + " alt=下载饿了么APP><primary class=color-mute>使用手机APP下单，优惠更多</primary></div></div>";
    window.angular.module("ng").run(["$templateCache", function (e) {
        e.put(a, i)
    }]), e.exports = a
}, function (e, t) {
}]);