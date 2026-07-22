"use strict";
(self.webpackChunkcompass_ssr_template = self.webpackChunkcompass_ssr_template || []).push([
    [1338], {
        28638: (e, n, t) => {
            function r() {}
            t.d(n, {
                u: () => r
            })
        },
        43732: (e, n, t) => {
            t.d(n, {
                A: () => s
            });
            var r = t(7225),
                a = t(75277),
                l = t(50649),
                i = t(7195),
                o = l.lazy(function() {
                    return t.e(8702).then(t.t.bind(t, 88702, 23))
                }),
                c = new Map;
            const s = function(e) {
                var n, t = (0, l.useState)(null === (n = c.get(null == e ? void 0 : e.loadJsonUrl)) || void 0 === n ? void 0 : n.result),
                    s = (0, a.A)(t, 2),
                    u = s[0],
                    A = s[1],
                    m = e.loadJsonUrl;
                return (0, l.useEffect)(function() {
                    if (m) {
                        var e = c.get(m);
                        if ("pending" !== (null == e ? void 0 : e.status))
                            if ("fulfilled" !== (null == e ? void 0 : e.status)) {
                                "rejected" === (null == e ? void 0 : e.status) && c.delete(m);
                                var n = (0, i.n)();
                                fetch(m).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    n.complete(e), A(e)
                                }).catch(function() {
                                    n.fail(null)
                                }), c.set(m, n)
                            } else A(null == e ? void 0 : e.result);
                        else null == e || e.promise.then(function(e) {
                            A(e)
                        })
                    }
                }, [m]), l.createElement(l.Suspense, {
                    fallback: e.fallback ? e.fallback : null
                }, m ? Boolean(m && u) && l.createElement(o, (0, r.A)({}, e, {
                    animationData: u
                })) : l.createElement(o, e))
            }
        },
        45156: (e, n, t) => {
            t.d(n, {
                A: () => o
            });
            var r = t(50498),
                a = t(35411),
                l = t(50649),
                i = t(25851);
            const o = function(e) {
                var n = (0, l.useRef)(null),
                    t = (0, l.useRef)(Date.now()),
                    o = (0, i.A)(function() {
                        var n = Date.now(),
                            l = n - t.current;
                        l < 500 || (a.fK.event("stay_time", (0, r.A)({
                            c: "stay",
                            d: "time",
                            staytime: l
                        }, e)), t.current = n)
                    }),
                    c = (0, l.useCallback)(function() {
                        t.current = Date.now(), n.current && clearInterval(n.current), n.current = setInterval(o, 5e3)
                    }, [o]);
                (0, l.useEffect)(function() {
                    var e = function() {
                        "visible" === document.visibilityState ? c() : (o(), n.current && clearInterval(n.current), n.current = null)
                    };
                    return document.addEventListener("visibilitychange", e), "visible" === document.visibilityState && c(),
                        function() {
                            document.removeEventListener("visibilitychange", e)
                        }
                }, [c, o]), (0, l.useEffect)(function() {
                    return function() {
                        n.current && (o(), clearInterval(n.current))
                    }
                }, [o])
            }
        },
        64785: (e, n, t) => {
            t.d(n, {
                NL: () => y,
                oH: () => k
            });
            var r = t(50498),
                a = t(35461),
                l = t(21132),
                i = t(75277),
                o = t(87513),
                c = t(50649),
                s = t(57599),
                u = t(46261),
                A = t(87058),
                m = t(75265),
                d = t(3834),
                p = t(8750),
                f = t(95833),
                v = t(92158),
                h = t(26037),
                g = t(65312),
                E = t(25851),
                b = t(81146),
                w = t(29608),
                x = t(71584),
                S = c.createContext({
                    onSubmit: function(e, n, t, r) {},
                    onSubmitNextQuestion: function(e, n) {
                        return Promise.resolve()
                    },
                    onSubmitLongTask: function(e, n, t) {
                        return Promise.resolve()
                    },
                    sessionId: "",
                    content: "",
                    setContent: function(e) {},
                    submitState: "init"
                }),
                N = 0,
                k = function(e) {
                    var n = (0, m.A)("init"),
                        t = (0, i.A)(n, 3),
                        k = t[0],
                        y = t[1],
                        B = t[2],
                        C = (0, u.x)(function(e) {
                            return e.currentSessionId
                        }),
                        M = (0, u.x)(function(e) {
                            return e.completeMessage
                        }),
                        D = (0, u.x)(function(e) {
                            return e.clear
                        }),
                        G = (0, g.g)(function(e) {
                            return e.complete
                        }),
                        R = (0, u.x)(function(e) {
                            return e.selectedModel || x.D4
                        }),
                        T = (0, u.x)(function(e) {
                            return e.fetchChatModels
                        }),
                        I = (0, u.x)(function(e) {
                            return e.models
                        }),
                        P = (0, u.x)(function(e) {
                            return e.isOpen
                        }),
                        Q = (0, u.x)(function(e) {
                            return e.toggleDrawer
                        }),
                        F = (0, c.useMemo)(function() {
                            return N++, (0, p.V)(function(e) {
                                return {
                                    content: v.B || "",
                                    setContent: function(n) {
                                        e({
                                            content: n
                                        })
                                    }
                                }
                            }, {
                                name: "".concat(p.c.queryInput, "_").concat(N),
                                browserStorage: sessionStorage
                            })
                        }, []),
                        L = (0, i.A)(F, 1)[0],
                        q = L(function(e) {
                            return e.content
                        }),
                        V = L(function(e) {
                            return e.setContent
                        }),
                        U = (0, s.B)(function(e) {
                            return e
                        }),
                        K = U.insertSession,
                        H = (U.updateSession, (0, u.x)(function(e) {
                            return e.updateLoginState
                        })),
                        z = ((0, s.B)(function(e) {
                            return e.sessions
                        }), (0, A.Zp)()),
                        X = (0, c.useRef)(),
                        j = (0, c.useRef)(),
                        J = (0, c.useRef)(!1),
                        O = (0, u.x)(function(e) {
                            return e.messageStores
                        }),
                        W = (0, E.A)(function() {
                            return !("h5" === (0, w.p)() || !(null == I ? void 0 : I.premium_models.some(function(e) {
                                return e.id === (null == R ? void 0 : R.id)
                            })) || (null == I ? void 0 : I.premium_model_usage) !== (null == I ? void 0 : I.premium_model_quota) || (u.x.getState().isLogin ? b.O.getState().setShowModal({
                                openFrom: "home_search",
                                visible: !0
                            }) : H("showLoginModel", {
                                openFrom: "home_search",
                                visible: !0
                            }), 0))
                        }),
                        Z = (0, E.A)(function(e) {
                            return "h5" === (0, w.p)() ? e : !(!R || "deepseek-r1" !== R.name.toLocaleLowerCase()) || e
                        }),
                        Y = (0, E.A)(function() {
                            var e = (0, l.A)((0, a.A)().mark(function e(n, t) {
                                var r, l, i, c, s, u = arguments;
                                return (0, a.A)().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = u.length > 2 && void 0 !== u[2] && u[2], l = u.length > 3 && void 0 !== u[3] && u[3], "sending" !== B.current) {
                                                e.next = 1;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 1:
                                            if (n) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (!W()) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            e.prev = 3, i = null != t && t.forceNewSession ? "" : C, y("sending"), c = Z(null == t ? void 0 : t.enableReasoning), (!i || null != t && t.forceNewSession) && (X.current = null == t ? void 0 : t.filter, j.current = {
                                                enableReasoning: c,
                                                searchType: null == t ? void 0 : t.searchType
                                            }, I && (null == I ? void 0 : I.premium_model_quota) <= 100 && (null == I ? void 0 : I.premium_model_usage) < (null == I ? void 0 : I.premium_model_quota) && -1 !== (null == I ? void 0 : I.premium_models.findIndex(function(e) {
                                                return (null == e ? void 0 : e.id) === (null == R ? void 0 : R.id)
                                            })) && h.l.start(T), D(), l && P && Q(), M({
                                                question: n,
                                                newSessionId: i
                                            }, null == t ? void 0 : t.filter, {
                                                enableReasoning: c,
                                                searchType: null == t ? void 0 : t.searchType,
                                                model: null == R ? void 0 : R.id,
                                                modelName: null == R ? void 0 : R.name,
                                                createdTime: Date.now().toString(),
                                                insertSession: !0,
                                                onFirstChunk: function(e) {
                                                    null != e && e.session_id && (z("/session/".concat(e.session_id), {
                                                        replace: r
                                                    }), K({
                                                        session_id: e.session_id,
                                                        status: 1,
                                                        message_updated_at: Date.now(),
                                                        title: n,
                                                        folder_ids: [],
                                                        session_type: o.d.Normal
                                                    })), V(""), y("init")
                                                },
                                                onError: function() {
                                                    y("init")
                                                }
                                            })), e.next = 5;
                                            break;
                                        case 4:
                                            throw e.prev = 4, s = e.catch(3), y("init"), f.Ay.error("Search fail. Please try again later"), s;
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [3, 4]
                                ])
                            }));
                            return function(n, t) {
                                return e.apply(this, arguments)
                            }
                        }()),
                        _ = function() {
                            var e = (0, l.A)((0, a.A)().mark(function e(n, t) {
                                var l, i, o, c, s, u, A, m, p;
                                return (0, a.A)().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!J.current) {
                                                e.next = 1;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 1:
                                            if (!W()) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            J.current = !0, u = null !== (l = null == t ? void 0 : t.filter) && void 0 !== l ? l : X.current, A = Z(null !== (i = null == t ? void 0 : t.enableReasoning) && void 0 !== i ? i : null === (o = j.current) || void 0 === o ? void 0 : o.enableReasoning), m = {
                                                enableReasoning: A,
                                                searchType: null !== (c = null == t ? void 0 : t.searchType) && void 0 !== c ? c : null === (s = j.current) || void 0 === s ? void 0 : s.searchType
                                            };
                                            try {
                                                I && (null == I ? void 0 : I.premium_model_quota) <= 100 && (null == I ? void 0 : I.premium_model_usage) < (null == I ? void 0 : I.premium_model_quota) && -1 !== (null == I ? void 0 : I.premium_models.findIndex(function(e) {
                                                    return (null == e ? void 0 : e.id) === (null == R ? void 0 : R.id)
                                                })) && h.l.start(T), p = O[O.length - 1].getState(), M({
                                                    question: n,
                                                    newSessionId: C,
                                                    messageId: "",
                                                    retry: p.status === d.Bu.AUDIT_ERROR,
                                                    isNextQuestion: !0
                                                }, u, (0, r.A)((0, r.A)({}, m), {}, {
                                                    model: null == R ? void 0 : R.id,
                                                    modelName: null == R ? void 0 : R.name,
                                                    createdTime: Date.now().toString()
                                                }))
                                            } finally {
                                                J.current = !1
                                            }
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(n, t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        $ = function() {
                            var e = (0, l.A)((0, a.A)().mark(function e(n, t) {
                                var r, l, i, c, s, u, A, m, d, p = arguments;
                                return (0, a.A)().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = p.length > 2 && void 0 !== p[2] && p[2], "sending" !== B.current) {
                                                e.next = 1;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 1:
                                            return e.prev = 1, y("sending"), A = null !== (l = null == t ? void 0 : t.filter) && void 0 !== l ? l : X.current, m = {
                                                enableReasoning: null !== (i = null == t ? void 0 : t.enableReasoning) && void 0 !== i ? i : null === (c = j.current) || void 0 === c ? void 0 : c.enableReasoning,
                                                searchType: null !== (s = null == t ? void 0 : t.searchType) && void 0 !== s ? s : null === (u = j.current) || void 0 === u ? void 0 : u.searchType
                                            }, e.next = 2, new Promise(function(e, t) {
                                                G({
                                                    question: n,
                                                    onSessionCreated: function(n) {
                                                        e(n), V(""), r && P && Q()
                                                    }
                                                }, A, m).catch(function(e) {
                                                    return t(e)
                                                })
                                            });
                                        case 2:
                                            d = e.sent, K({
                                                session_id: d,
                                                status: 1,
                                                message_updated_at: Date.now(),
                                                title: n,
                                                folder_ids: [],
                                                session_type: o.d.LongTask
                                            });
                                        case 3:
                                            return e.prev = 3, y("init"), e.finish(3);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [1, , 3, 4]
                                ])
                            }));
                            return function(n, t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return c.createElement(S.Provider, {
                        value: {
                            onSubmit: Y,
                            onSubmitNextQuestion: _,
                            onSubmitLongTask: $,
                            sessionId: C,
                            content: q,
                            setContent: V,
                            submitState: k
                        }
                    }, e.children)
                },
                y = function() {
                    return c.useContext(S)
                }
        },
        66716: (e, n, t) => {
            t.d(n, {
                A: () => r
            });
            const r = {
                appBar: "appBar--XzkA9",
                appBarDivide: "appBarDivide--R0zxV",
                fixed: "fixed--l15l9",
                appBarSection: "appBarSection--Is4eD",
                leftSection: "leftSection--TbZRL",
                centerSection: "centerSection--sXWjW",
                rightSection: "rightSection--wv2yQ",
                appBarTitle: "appBarTitle--vnq_7",
                iconButton: "iconButton--s_EGe",
                logo: "logo--hC6Nz"
            }
        },
        79439: (e, n, t) => {
            var r = t(50649),
                a = t(18888);
            t(37586);
            var l = t(3550),
                i = t(35461),
                o = t(21132),
                c = t(87058),
                s = t(75277);
            var u = t(99927);
            const A = "sellingItem--w8Bh9",
                m = "sellingInfo--QqzNg",
                d = function() {
                    return r.createElement("div", {
                        className: "sellingPoints--lcKmu"
                    }, r.createElement("div", {
                        className: A
                    }, r.createElement("i", {
                        "data-img": "1"
                    }), r.createElement("div", {
                        className: m
                    }, "Content traceability")), r.createElement("div", {
                        className: A
                    }, r.createElement("i", {
                        "data-img": "2"
                    }), r.createElement("div", {
                        className: m
                    }, "Efficient literature retrieval")), r.createElement("div", {
                        className: A
                    }, r.createElement("i", {
                        "data-img": "3"
                    }), r.createElement("div", {
                        className: m
                    }, "Literature summary")))
                };
            var p = t(80340),
                f = t(64785);
            var v = t(35411),
                h = t(40184),
                g = t(95833),
                E = function(e) {
                    var n = (e || {}).onClose;
                    return (0, r.useEffect)(function() {
                        v.fK.exposure("page_quicite_home_mobile", {
                            a: "quicite",
                            b: "home_mobile",
                            c: "desktop",
                            d: "show"
                        })
                    }, []), r.createElement(r.Fragment, null, r.createElement("div", {
                        onClick: n,
                        className: "zzcBg--yTXHx"
                    }), r.createElement("div", {
                        className: "popupDesktopTips--FDZG1"
                    }, r.createElement("div", {
                        className: "popupDesktopTipsBox--jyNPs"
                    }, r.createElement("img", {
                        className: "pcImg--zlR1N",
                        src: "https://img.ucshare.app/s/uae/g/1y/fea/prod/file/20250714/68d355d062108394c5ea64da72454c28.png",
                        alt: ""
                    }), r.createElement("img", {
                        onClick: function() {
                            null == n || n()
                        },
                        className: "closeBtn--pGAVM",
                        src: "https://img.ucshare.app/s/uc_inter_fe/s/upload/2025/abbdbecee210d35919f1269c63bd98b4.png",
                        alt: ""
                    }), r.createElement("div", {
                        className: "textTips--iB2Er"
                    }, r.createElement("div", null, "Visit ", r.createElement("span", null, "www.quicite.com")), r.createElement("div", null, "on desktop for"), r.createElement("div", null, "more functions")), r.createElement("div", {
                        onClick: function() {
                            (0, h.E)("https://www.quicite.com", function() {
                                g.Ay.success("Copied to clipboard!")
                            }), null == n || n(), v.fK.click("page_quicite_home_mobile", {
                                a: "quicite",
                                b: "home_mobile",
                                c: "desktop",
                                d: "click"
                            })
                        },
                        className: "btn--Ic7Wn"
                    }, "Copy www.quicite.com"))))
                },
                b = t(45156),
                w = t(46261),
                x = t(56044),
                S = t(64944),
                N = t(89425),
                k = function(e) {
                    var n = e.onClick;
                    return r.createElement("div", {
                        className: "visitOnDesktop--bmY6_",
                        onClick: n
                    }, r.createElement("i", null), r.createElement("p", null, "Visit us on desktop"))
                },
                y = (0, S.$Z)("entry"),
                B = (0, S.$Z)("keyword"),
                C = "search_engine" === y && B;
            const M = function() {
                var e = (0, f.NL)(),
                    n = e.setContent,
                    t = e.content,
                    a = e.onSubmit,
                    l = (0, r.useState)(!1),
                    i = (0, s.A)(l, 2),
                    o = i[0],
                    A = i[1],
                    m = (0, w.x)(function(e) {
                        return e
                    }),
                    h = m.timerCount,
                    g = m.updateLoginState,
                    S = (0, r.useRef)(!1),
                    y = (0, c.Zp)(),
                    M = (0, w.x)(function(e) {
                        return e.clear
                    });
                return (0, r.useEffect)(function() {
                    h <= 0 && g("loginStep", x.SW.Login)
                }, [h]), (0, r.useEffect)(function() {
                    if (!S.current) return C && B && (document.documentElement.style.setProperty("--message-header-height", "50px"), a(B.trim(), {
                            forceNewSession: !0,
                            searchType: "PAPER",
                            enableReasoning: !1
                        }, !0), S.current = !0),
                        function() {
                            C = !1
                        }
                }, []), (0, b.A)({
                    a: "quicite",
                    b: "home_mobile"
                }), (0, r.useEffect)(function() {
                    v.fK.updateParam({
                        b: v.uu.home_mobile,
                        spmb: v.uu.home_mobile
                    }), v.fK.pv(v.pj.page_quicite_home_mobile, {}), v.fK.exposure("feature_show", {
                        a: "quicite",
                        b: "home_mobile",
                        c: "feature",
                        d: "show"
                    })
                }, []), C ? r.createElement("div", {
                    className: "layoutResult--L2wIv"
                }, r.createElement(u.A, {
                    centerContent: r.createElement("div", {
                        className: "barCenter--sUrJg",
                        onClick: function() {
                            y("/home"), M()
                        }
                    }, r.createElement("div", {
                        className: "barNew--k5buU"
                    }, r.createElement("i", null), r.createElement("span", null, "New")))
                }), r.createElement(N.A, {
                    style: {
                        paddingTop: "100px"
                    },
                    loadingText: "Looking over the research... "
                })) : r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "page--MjGXX"
                }, r.createElement(u.A, {
                    rightContent: r.createElement(k, {
                        onClick: function() {
                            return A(!0)
                        }
                    })
                }), r.createElement("div", {
                    className: "layout--hZ4C_"
                }, r.createElement("img", {
                    className: "bg--mp7V4",
                    src: "https://img.ucshare.app/s/uc_inter_fe/s/upload/2025/2954e52b1aef9675b97789b519de2047.png",
                    alt: ""
                }), r.createElement("div", {
                    className: "logoWrap--tXCTX"
                }, r.createElement("img", {
                    className: "logo--tgxsX",
                    src: "https://cdn.jsdelivr.net/gh/setia0028-spec/Frind@main/Icon.svg",
                    alt: ""
                }), r.createElement("div", {
                    className: "text1--a6SB1"
                }, "Beyond AI Search, Professional Insight.")), r.createElement("div", {
                    className: "senderInput--tdOt6"
                }, r.createElement(p.A, {
                    content: t,
                    setContent: n,
                    remberDeepThink: !0,
                    initFilterData: {}
                })), r.createElement(d, null))), o ? r.createElement(E, {
                    onClose: function() {
                        return A(!1)
                    }
                }) : null)
            };
            t(57725);
            var D = t(92158),
                G = t(53893),
                R = t(57599),
                T = t(77638),
                I = t(36789),
                P = function() {
                    return Promise.all([t.e(292), t.e(3705), t.e(775), t.e(2154)]).then(t.bind(t, 68080))
                },
                Q = r.lazy(P),
                F = function() {
                    return r.createElement(r.Suspense, null, r.createElement(Q, null))
                },
                L = function() {
                    return Promise.all([t.e(292), t.e(3705), t.e(775), t.e(2056)]).then(t.bind(t, 8702))
                },
                q = r.lazy(L),
                V = function() {
                    return r.createElement(r.Suspense, null, r.createElement(q, null))
                },
                U = function() {
                    return Promise.all([t.e(8782), t.e(839), t.e(1003), t.e(7337), t.e(292), t.e(8485), t.e(775), t.e(3328), t.e(4354), t.e(84), t.e(1096), t.e(2134), t.e(9391)]).then(t.bind(t, 70620))
                },
                K = r.lazy(U),
                H = function() {
                    return r.createElement(r.Suspense, null, r.createElement(K, null))
                },
                z = function() {
                    return Promise.all([t.e(8782), t.e(839), t.e(1003), t.e(7337), t.e(292), t.e(8485), t.e(775), t.e(3328), t.e(4354), t.e(84), t.e(1096), t.e(2134), t.e(6279)]).then(t.bind(t, 28433))
                },
                X = r.lazy(z),
                j = function() {
                    return r.createElement(r.Suspense, null, r.createElement(X, null))
                },
                J = function() {
                    return t.e(2581).then(t.bind(t, 22104))
                },
                O = r.lazy(J),
                W = function() {
                    return r.createElement(r.Suspense, null, r.createElement(O, null))
                },
                Z = function() {
                    return Promise.all([t.e(7337), t.e(3328), t.e(8333), t.e(1740)]).then(t.bind(t, 99215))
                },
                Y = r.lazy(Z),
                _ = function() {
                    return r.createElement(r.Suspense, null, r.createElement(Y, null))
                },
                $ = Boolean((0, S.$Z)("disableLazyLoad"));
            const ee = function() {
                var e = (0, w.x)(function(e) {
                        return e.isOpen
                    }),
                    n = (0, w.x)(function(e) {
                        return e.toggleDrawer
                    }),
                    t = (0, R.B)(function(e) {
                        return e.initRemoteSession
                    }),
                    a = (0, w.x)(function(e) {
                        return e.checkoutServiceTicket
                    }),
                    l = (0, R.B)(function(e) {
                        return e.setSessions
                    }),
                    s = (0, w.x)(function(e) {
                        return e.isLogin
                    }),
                    u = (0, w.x)(function(e) {
                        return e.loginInitPromise
                    });
                return (0, r.useEffect)(function() {
                    a(), G.A.report({
                        msg: D.g,
                        category: 112,
                        wl_avgv1: Math.floor(Date.now() - window._t0),
                        wl_avgv2: Math.floor(window._t0 - performance.timeOrigin),
                        c1: "h5_router"
                    }), $ || (P(), L(), U(), z(), J())
                }, []), (0, r.useEffect)(function() {
                    (0, o.A)((0, i.A)().mark(function e() {
                        var n, r, a;
                        return (0, i.A)().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, !s) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.next = 1, t();
                                case 1:
                                    a = e.sent, e.next = 3;
                                    break;
                                case 2:
                                    a = [];
                                case 3:
                                    if (null != (n = a) && n.length) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 4, u.done;
                                case 4:
                                    if (e.sent) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 5, T.A.loadConversationList();
                                case 5:
                                    null != (r = e.sent) && r.length && l(r);
                                case 6:
                                    e.next = 9;
                                    break;
                                case 7:
                                    return e.next = 8, u;
                                case 8:
                                    e.sent || "1" === localStorage.getItem("temp_conversation_sync") || (console.warn("synced"), T.A.saveConversationsList(n), localStorage.setItem("temp_conversation_sync", "1"));
                                case 9:
                                    return e.prev = 9, w.x.getState().sessionInitPromise.complete(!0), e.finish(9);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [0, , 9, 10]
                        ])
                    }))()
                }, [s]), r.createElement(r.Fragment, null, r.createElement(c.BV, null, r.createElement(c.qh, {
                    path: "/"
                }, r.createElement(c.qh, {
                    index: !0,
                    element: r.createElement(M, null)
                }), r.createElement(c.qh, {
                    path: "/home",
                    element: r.createElement(M, null)
                }), r.createElement(c.qh, {
                    path: "/session/:id",
                    element: r.createElement(H, null)
                }), r.createElement(c.qh, {
                    path: "/share/:id",
                    element: r.createElement(j, null)
                }), r.createElement(c.qh, {
                    path: "/contact-us",
                    element: r.createElement(F, null)
                }), r.createElement(c.qh, {
                    path: "/login",
                    element: r.createElement(V, null)
                }), r.createElement(c.qh, {
                    path: "/about",
                    element: r.createElement(W, null)
                }))), r.createElement(I.A, {
                    placement: "left",
                    open: e,
                    closable: !1,
                    bodyStyle: {
                        padding: 0
                    },
                    maskClosable: !0,
                    width: "69vw",
                    onClose: function() {
                        n(!1)
                    }
                }, r.createElement(_, null)))
            };
            var ne = t(40557),
                te = t(99382);
            var re = te.o;

            function ae() {
                if (e = (0, r.useState)(0), n = (0, s.A)(e, 2), n[0], t = n[1], a = (0, r.useCallback)(function() {
                        var e = window.innerHeight;
                        document.documentElement.style.setProperty("--vh", "".concat(e, "px")), t(e)
                    }, []), (0, r.useEffect)(function() {
                        a();
                        var e = 0,
                            n = function() {
                                e && cancelAnimationFrame(e), e = requestAnimationFrame(function() {
                                    a()
                                })
                            };
                        return window.addEventListener("resize", n), window.addEventListener("orientationchange", n),
                            function() {
                                window.removeEventListener("resize", n), window.removeEventListener("orientationchange", n), e && cancelAnimationFrame(e)
                            }
                    }, [a]), -1 === window.location.href.indexOf("#")) return (0, r.useEffect)(function() {
                    g.Ay.config({
                        top: window.innerHeight - 140
                    })
                }, []), r.createElement(ne.A, null, r.createElement("div", {
                    id: "app"
                }, r.createElement(l.Kd, {
                    basename: re
                }, r.createElement(f.oH, null, r.createElement(ee, null)))));
                var e, n, t, a;
                window.location.href = window.location.href.replace("#", "")
            }
            window.location.pathname.startsWith(re) || history.replaceState(null, "", re);
            var le = t(72935);
            (0, le.perfMark)("bootstrapExecute");
            var ie = (0, le.getInitialPropsFromDocument)();
            console.log("[=== DEBUG ===] hydrate's App props initialProps:", ie), a.createRoot(document.getElementById("root")).render(r.createElement(ae, {
                initialProps: ie
            }))
        },
        80340: (e, n, t) => {
            t.d(n, {
                A: () => b
            });
            var r = t(50498),
                a = t(75277),
                l = t(50649);
            const i = "menuItem--PRScX";
            var o = t(8656);
            const c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAD5UExURUdwTFM941M/5FM841VV/1o84VM+41M+41VC41I+4lM+41M+41M+400z5lM+41M+41M/41I94lU541M+41Q941I+4lQ+4lI/5AAA/1Q/4lM+41FD5FJC5lU951M+41VE3UlJ21M+41Q/41M+41M+41VA6lM/41M+41M+41M+41U75VM+41I95FM+5FM941M+41BA31I+404761M+4lM+41M+41U/5FNA5VBA31s321M+41M+41M941M+41M+41M/41Q+41M941I95FM74V1G6E5D3lU941M/5FM+5FQ+41M/41I94FNA4lJA5FM+5FU5408+5VM+41M+46MRnCsAAABSdFJOUwBcZjcDEffmG3zL+ewK2/KvYAn1t06PggFq9hMfFZAPB8VJ6coM1M+1+CfZVN9T3iDJDanO0zlEEA784prx16Nb3MMrCxc2zITlbhk0HNYSHf6rtlYqAAABjElEQVRIx52WZ3uDIBDHiUkkjjgSNTvde++9927v+3+YqqStIBqv/zcC/u55DrgBIaIafuBZpmGYlhf4DTJGVddpQkJNx63m4HXNhpRsrZ6BVxQKUlGlIuNrOmRKr6X5MoUc0bLIl1TIlVoSeBgrzqKsjjdQE17VKBQQ/d15RYdC0n9OV4GCUkb3S4saUHbnGhSWFsebXdzAjiLRBYTc0MDJ+X+62et0kwtOmC/NbH4Yudzh8qNB/Gx+MT73D27NJ8NMfm+bhQG3GBCPp66ftRM2mumza2px/z1icfOdNiETW9FoaZ/x08ccYBGTmy9HzOFDOLpk/M0Z74FJDG5+xGrHArQYP1gTNmYIBuuM6z224+/kFKQMeJee+lwiXqSOzhQ2DRufCV4SlpZ4rHD1V1FWv9IGHgnEpZWXEf/aldxmIAmN87uYf5PmlS8LvvlByN/uyvgw+GTh/X4wdz8rjS/nPwmETlF0EcCXGXQhw5dKdDHGl3t8Q8G3LHxTxLddfGPHPx3+8Tgp8vz5Bnkt+/wOmZn4AAAAAElFTkSuQmCC";
            var s = t(9675),
                u = t.n(s),
                A = t(64785),
                m = t(37201),
                d = t(29918),
                p = t(69429),
                f = t(25851),
                v = t(35411),
                h = t(20180),
                g = {
                    Scholar: "PAPER",
                    General: "GENERAL"
                },
                E = {
                    Scholar: "data:image/png;base64,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",
                    General: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAALa0lEQVRoBe1aDYxVxRWeM/fu27fC8g8CLotAo8CqLWxh2V3QFVJStPyzamubaJNqbI01aY0pkYipkdba1Kb+RNu0JP2LLrL8mJLalm5hd+FpVyryI01RkEUEKrjswv68e2f6nXvfzLvv7XvLLto2Jk7yds6cc+bMOTNnzpyZu0J8Wv6/M0Af5/C1tbVOa6sY6jhisOd5g7SrL9PaIemr867rnvd90VFSItrq6ur8j2vcj2xAdfWSYk8WTJLCn6+VnC+0vpykKNaahkLJEQIIocVZ4Nq0Eu1E+qSQYrsSznZXJd9patrS/lGMuWQDqqqWj1FC3AYBKzSJ6VBi9AAVOU1aHBAkN5BWLzY3158aYP+AfcAGzJtXO7pHq+UY9E5ImI2fvJSBTR+sjyISr2qSv4qRrN+5s+60ofWndvrDZHgqr185Qyn/GSHUvUJQKfDRCehG2zW88JtjJOUaoXSLILoK+MFpmriAjgXchvIsowSudZPSauaESWX7Wo8efN/wXqzurwFUVbXqNqHVU1qICgxrZx2jH4KP10MTkEQJDwilzuDvd3c31v+i9dhbfx1fenWb0HQD8PGALvQ+LeV64IrQfxx3wY9lTiGta0onXPPvOXPKDh44cIBl9lkuakBNTY07dvzMx7Xw10Kz8RFph7XWj/nSWYONCovobtACeZj95xJNm54wvMePHdozoXTqFdCTXQ7a0nBJ9IxUeh0ap6D9RKBHpfhHCVIL2s6JUa3HDv4phctb2ZnMzbFWdidH3CtI3w3li1M8ShP9UUi6JdG86ceDXP+MFPoOKB24BHgOKHJ+hjo6e9oR6iko/i+WAUJcaXFXLOZe2NVU/wTWbhWwf2YaFw0DNel7KipX3ifE2j517JNYUfXmV6DYashM+a8+hxl7Uvfo23fv3Pg6D9blyzLgZjHMBeFz42uNL70dttJ/ES4PQdZWi1Hq8xeSaiq3EYH2aU99FWH2ORh3gXFYlctIqtVzqt/4MrfzlbwGVN+wah426/fRMQyPpLFJZV37Wfd7r75a/4EV6Isl8KBB3Magp6X2NlpaFuAIehEhty1AEw13yf+iYUkktpwsKhx6P/bJC5DTkcKPQZR6NNTFcGbWOQ3gw8n31QMQdiWzY1aV0PLnya7kffv31/UYEcyHpa4ybZwL/xCi8C3T7l17+6EceMKiBNVUVtYWmXZDw/qu4cVd98DI5+FHEIdJgQ6sC49l+KJ1TgOUkLcgGiy0jKTqoPyDLS1bg+U1eK3lFAjgQywsJLbv2lXXaZrZderUbbR4racpt2eSbQPYtm1bd9x1H8ZybrB46MI62XYE6GXA3Lm1pfDDb+FXmOI7qpO0Llt5pnlaTgcf0gUUEt2udpoCuI8/iDw7+PAKWWi89gomZ7M3NNR1YE88AqHBpge9kHVi3bJ5exngqeTN6DjDMpJ+AT7/hm1HACI10za1OExER207P3BYkn7HkJHp2QBgcFwnEpsPkNC/BgjdudAMT3s3hXD6b4YBNTV3xBEilxky/G+vVPIZ086q+QydZnFanBg3Thy37TxALDbsOHz/PUPGnrjGwNm1K91nof4eg8d+W8Y6mjbXGQZ0dp4vw4FqZxWb9+Xm5o05Z7W8ZvFIEjKdwElxpj9pMm9USeKcVYL02PLyWs5ce5UgL5KiwRBgbDnraNpcZxggY8mlCInBicjhjqSzOcochR0lirECwyxO6/ctfDFAiZOGhbQcGouZc8Zg07WjqQ4+9GGAgW6BjmlypgHI5+1y4nR883xR2/4IbwaIgTn82dCG5bVukcGYowGFThg0YByS3TaUGrypu7qSezHzVo+ojsxjVyAVZ8eYjqiP7n3llfORdiaIRAwHRHrpFbVmMvTRIhHlLVZuwWX5uDn6KcrYW2OiZ4I1wPflSJy81qexQw/lE8p4+DG7j5k55ZLOuVdyy4jwkh5C2jNycrIj1zqYJqjRoa4hBqsTlqqqFbNg6Q5ELbPLW7C86ZTBMKZqNgDxfHaq2Y390Ih2v+66iG4OosuN6JuaQNqNPCm9sbPGgpKYXFEeoqkD7roo0VgfHIhumlczbJRndLm1Ls1kISgbLYVQaEFf/FFmE9nTOD2n331J4w6hkqavdSGD+KTVkRUgD8p3XaoLYUGaMIv9cyFEHvCz+6UuVJSAC4VZao4ZhNy0C2nqxPXJ3D3Sd1il1GmIexdH9lWBDNIvJxo3rc0hL0BVzlu2AGeGuYQUuEKtbWravDMffxQ/p3rZIozzhwBHAhPnfzvRuDkR5YnCldUr1sDA1B5Q72GqWw3dupDjKGxYaV8EcNxPM0y5atyo+HAxmaf0NE3MxZcLp5RMJ2WazmlyjZxc7Ngy+uo0QZ4OdQ0x1oBUqmvfZqQWV5SXL84bn3HN7ESynl52EhPSg/QNSSe8/Ke42qWXvJCvx3ULF/JlKTo5p6KPYdYAFoAr3D4jCD5aFo8XXGfa2TXuODxr7QYPPx1n4IvWWlle9MPtqzDvCgzqHFqGtOZaIxMZ6psG5jrDANVTsBkCAzdCPcwnXRtljsK+xDOhTl0PmUA0NkrvC0bafbmhI6Z/2NNjr5AGbWut/KUYJzjxWTfluVssEUCGAUVFg5BzaJu+4tpRwy9x0Q4GbmnY+oESyroceEfw466h56sXLVpUiP0zxNKRBLa01KVd0RKEwOE6EdnxlwxKkX491NFgsgzgVBdPGvWWTGKGp7x7bDsTwN4SBy2KxLgTJwTefvoubW2FJXADy4fxMGk5CympvokD07oxadrEOka5M1aACS65CG92FbB69LWKiqXTo50MjDvx6wZGKjEFD13RzWZJWcAU+NuVBqeV85qBo/Xs2cuvg8K3pnF6T6hbGsNQLwMaG+veha89jR+eUbjoz5ArH66pqUXam1lcUrj28TMiihaFHvnVmRy9W0rS9cAaVztObvLtbK4g+sX0agQSMyHdrBPrls3bywBmkELh/YZescx4OevyvEfYfy0OAO7EhxVe4ixOi/nRZxKLTwGpNHiuxZN4S3qxd2wbACtfEC/4IfxnlcVDF9bJtiNATgM4zjqO/BH870jAi7sjfOmus+3xZ6N3UubDMjcbeRD2OSzcVNPuXbtlmFXwhAVpckP0GaasrDZWGHd/irfRb2DzBrqxDqxLNPab/lznNIAJTX/bgLQAz+NCBJEGAw+GsFs7u9uerKhYYsMgnGELDrXz3Ac8oxW5KxjOVXyh8d4UhkRchs4qT4bpBJjh8yOLh3vrkNLXIkUxK30KqfdDoS65JPZhALMnmq/9HS426+BOgYLwQ7xXiruxJ35TXb2yjHnijtoPze1GxMytmDV35WSmRQvc52rIWmxxRH+Px51/cnvu3GXlFKPfQvH7IcvE/HZcHx/b3fTZ39s+OQCzmXKQGNWg8cSdmFAybQQUQ26Ea2RQaDLOgAWlpdPiyqd9PgzE8/rNILG80bitdOK7wPaQN+xQUjr9UazQQm5hIrqkpIe6lDh3ZenUO31NjwM3KyQFdL7cPB+PnVl35Mj6PjPcixjAwwlROeeav5zrUEcxg3zpH8U4wFx/Ad+HbpRadwDBV8zAtaDo1Aml047DiODYn1W1nH36O+hlXGM3PiwNwXnAkeZ29BuBX1BgyCHkNA/satr4kyNHjiBG9F3A3//Cn5iEr36AE2w+lIncJSADeTr2QmqFWCYdh3JP4xw5iwjCe2k8Y8MCXhHlDbA809vJkQ/u2vFSOhtI9chXDcgAFsKpRVJ4y5A6fB3N2fjlDQTMf9HC76T4yAcpvywQ7qaBfuQbsAFGofAzK92K1ViFSIH98Qn5zGoMMDUfTlkfusciUiHk8oduzb7NOVPOD91FjnybX6KNrEupL3kFcg2W/a8GooCKlMIDpRIdOIwu/Df+1SCXHp/i/pcz8B9s5DLxqFLgeAAAAABJRU5ErkJggg=="
                };
            const b = function(e) {
                var n, t, s, b, w, x = e.setContent,
                    S = e.content,
                    N = e.placeholder,
                    k = void 0 === N ? "Access over 100 million papers through AI search" : N,
                    y = e.onFocus,
                    B = e.onBlur,
                    C = e.focus,
                    M = void 0 !== C && C,
                    D = e.blur,
                    G = void 0 !== D && D,
                    R = e.isNextQuestion,
                    T = void 0 !== R && R,
                    I = e.isFromResultHeader,
                    P = void 0 !== I && I,
                    Q = e.messageStore,
                    F = (0, l.useRef)(null),
                    L = (0, l.useState)("GENERAL" === (null == e || null === (n = e.initSearchConfig) || void 0 === n ? void 0 : n.searchType) ? "General" : "Scholar"),
                    q = (0, a.A)(L, 2),
                    V = q[0],
                    U = q[1],
                    K = (0, l.useState)(e.initSearchConfig || {}),
                    H = (0, a.A)(K, 2),
                    z = H[0],
                    X = (H[1], (0, l.useState)(void 0 !== (null == e || null === (t = e.initSearchConfig) || void 0 === t ? void 0 : t.enableReasoning) ? null == e || null === (s = e.initSearchConfig) || void 0 === s ? void 0 : s.enableReasoning : null !== (w = (0, m.CD)(m.B$.ai_scholar_search_deepthink)) && !(null == w || !w.isOpen))),
                    j = (0, a.A)(X, 2),
                    J = j[0],
                    O = j[1],
                    W = (0, l.useState)((null == e ? void 0 : e.initFilterData) || {}),
                    Z = (0, a.A)(W, 2),
                    Y = Z[0],
                    _ = Z[1],
                    $ = (0, A.NL)(),
                    ee = $.onSubmit,
                    ne = $.submitState,
                    te = $.onSubmitNextQuestion;
                (0, l.useLayoutEffect)(function() {
                    var n;
                    e.autoFocus && (null == F || null === (n = F.current) || void 0 === n || n.focus())
                }, []), (0, l.useEffect)(function() {
                    var e;
                    M && (null == F || null === (e = F.current) || void 0 === e || e.focus())
                }, [M]), (0, l.useEffect)(function() {
                    var e;
                    G && (null == F || null === (e = F.current) || void 0 === e || e.blur())
                }, [G]), (0, d.A)(function() {
                    var n;
                    e.remberDeepThink && (n = J, (0, m.ZB)(m.B$.ai_scholar_search_deepthink, {
                        isOpen: n
                    }))
                }, [J]);
                var re = (0, l.useMemo)(function() {
                        return [{
                            key: "Scholar",
                            label: l.createElement("div", {
                                className: i,
                                onClick: function() {
                                    return U("Scholar")
                                },
                                "data-active": +("Scholar" === V)
                            }, l.createElement("i", {
                                "data-icon": "scholar"
                            }), l.createElement("span", null, "Scholar"), "Scholar" === V ? l.createElement("img", {
                                src: c,
                                alt: "",
                                style: {
                                    width: 16,
                                    height: 16
                                }
                            }) : null)
                        }, {
                            key: "General",
                            label: l.createElement("div", {
                                className: i,
                                onClick: function() {
                                    U("General"), _({})
                                },
                                "data-active": +("General" === V)
                            }, l.createElement("i", {
                                "data-icon": "general"
                            }), l.createElement("span", null, "General"), "General" === V ? l.createElement("img", {
                                src: c,
                                alt: "",
                                style: {
                                    width: 16,
                                    height: 16
                                }
                            }) : null)
                        }]
                    }, [V]),
                    ae = function() {
                        var e;
                        return (0, r.A)({
                            deep_think: +(null != J && J),
                            search_type: (null === (e = z.searchType) || void 0 === e ? void 0 : e.toLowerCase()) || "",
                            category: Y.category || "",
                            rigorous_journal: Y.rigorous_journal || "",
                            start_year: Y.start_year || "",
                            end_year: Y.end_year || "",
                            writing_style: ""
                        }, (0, h.Td)(null == Q ? void 0 : Q.getState))
                    },
                    le = (0, f.A)(function() {
                        v.fK.exposure("searchbox_show", (0, r.A)({
                            a: "quicite",
                            b: "home_mobile",
                            c: "searchbox",
                            d: "show"
                        }, ae())), (T || P) && (v.fK.exposure(P ? "askpaperbox_toast_show" : "askpaperbox_show", (0, r.A)({
                            c: "askpaperbox",
                            d: "show"
                        }, ae())), v.fK.exposure("generate_show", (0, r.A)({
                            c: "generate",
                            d: "show"
                        }, ae())))
                    });
                return l.createElement(p.ExposeItem, {
                    onAppear: le
                }, l.createElement("div", {
                    className: "search--oTBgD"
                }, l.createElement("textarea", {
                    ref: F,
                    value: S,
                    className: "searchInput--oz5Hv",
                    placeholder: k,
                    onChange: function(e) {
                        return x(e.target.value)
                    },
                    onBlur: function() {
                        !S || null != S && S.trim() || x(""), B && B()
                    },
                    onFocus: function() {
                        v.fK.click("searchbox_click", (0, r.A)({
                            c: "searchbox",
                            d: "click"
                        }, ae())), P && v.fK.click("askpaperbox_toast_click", (0, r.A)({
                            c: "askpaperbox",
                            d: "click"
                        }, ae())), y && y()
                    }
                }), l.createElement("div", {
                    className: "searchFooter--VUxf7"
                }, l.createElement("div", {
                    className: "depthSwitch--xwKYd",
                    "data-open": +!!J,
                    onClick: function() {
                        O(!J), v.fK.click("deep_think_click", (0, r.A)({
                            c: "deep_think",
                            d: "click"
                        }, ae()))
                    }
                }, l.createElement("i", null), "Deep Think"), l.createElement(o.A, {
                    placement: "bottom",
                    menu: {
                        items: re,
                        selectable: !1
                    },
                    overlayClassName: "dropdownMenu--FKTrR",
                    onOpenChange: function() {
                        setTimeout(function() {
                            var e = document.getElementsByClassName("ant-dropdown-menu-item");
                            null != e && e.length && Array.from(e).forEach(function(e) {
                                e.style.userSelect = "none", e.style.webkitTapHighlightColor = "transparent", e.style.backgroundColor = "transparent"
                            })
                        }, 150), v.fK.click("scholar_click", (0, r.A)({
                            c: "scholar",
                            d: "click"
                        }, ae()))
                    }
                }, l.createElement("div", {
                    className: "paperType--fHDaA"
                }, l.createElement("img", {
                    className: "iconPaperType--Nb2Oh",
                    src: E[V],
                    alt: ""
                }), V, l.createElement("img", {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURUdwTBMXGxUVHBIWGgAAABIWGxIWGhIWGhEVHBUVFRMXGRIWGhUVHBIWGhIWGhQYGxEaGhIXGRMWGhMXGhIWGhm1WY0AAAAUdFJOUwB7JdQBre/9Sgx61ST760EecFBP7NrfRQAAAHRJREFUSMftlEkSgCAMBNl3xSX/f6um9AHMQQ7CnKer0pCKEDMDZ4tYv67WIP19IZJA/6Q7PrQDxjLhVDsRNRMZEC+OCUQ8eCYQ8dRLXAPiqoO4RMVR4BkpfSYdM/as78eV0YTbN/VAVwI+M/ghw0/lzB9zAV7+Cd/CM8EJAAAAAElFTkSuQmCC",
                    alt: "",
                    className: "iconNext--uJ24H"
                }))), l.createElement("div", {
                    className: "buttonGroup--GHmkJ"
                }, l.createElement("div", {
                    className: u()("menuSearch--R58Td", "menuNext--eI3R_"),
                    "data-has-content": +(!(null == e || null === (b = e.content) || void 0 === b || !b.trim()) && "init" === ne),
                    onClick: function() {
                        var n, t, a, l = null == e || null === (n = e.content) || void 0 === n ? void 0 : n.trim();
                        l && (v.fK.click("generate_click", (0, r.A)({
                            c: "generate",
                            d: "click",
                            way: "click",
                            query_words: l
                        }, ae())), "init" === ne && (null === (t = (a = window).gtag) || void 0 === t || t.call(a, "event", "conversion", {
                            send_to: "AW-17163749131/LtasCJ-Z0JIbEIuOqPg_",
                            value: 1,
                            currency: "HKD"
                        }), null != e && e.isNextQuestion ? te(l, {
                            filter: Y,
                            enableReasoning: J,
                            searchType: g[V]
                        }) : ee(l, {
                            filter: Y,
                            forceNewSession: !0,
                            enableReasoning: J,
                            searchType: g[V]
                        })))
                    }
                }, l.createElement("img", {
                    className: "menuSearchIconLoading--PtrS_",
                    style: {
                        display: "sending" !== ne ? "none" : "block"
                    },
                    src: "https://img.ucshare.app/s/uc_inter_fe/s/upload/2025/8fad474d1cfdeaca6a2b7db98f830bd8.png"
                }), l.createElement("div", {
                    className: "menuSearchIcon--_VfED",
                    style: {
                        display: "sending" === ne ? "none" : "block"
                    }
                }))))))
            }
        },
        81146: (e, n, t) => {
            t.d(n, {
                O: () => r
            });
            var r = (0, t(63151).v)(function(e) {
                return {
                    showModal: {
                        visible: !1,
                        openFrom: ""
                    },
                    setShowModal: function(n) {
                        return e({
                            showModal: n
                        })
                    }
                }
            })
        },
        99927: (e, n, t) => {
            t.d(n, {
                A: () => s
            });
            var r = t(50649),
                a = t(66716),
                l = t(9675),
                i = t.n(l),
                o = t(46261),
                c = function(e) {
                    return r.createElement(r.Fragment, null, r.createElement("div", {
                        onClick: e.onClick,
                        className: a.A.iconButton
                    }, r.createElement("i", null)))
                };
            const s = function(e) {
                var n = e.leftContent,
                    t = e.centerContent,
                    l = e.rightContent,
                    s = e.title,
                    u = e.className,
                    A = void 0 === u ? "" : u,
                    m = e.fixed,
                    d = void 0 === m || m,
                    p = e.customContent,
                    f = e.divide,
                    v = void 0 !== f && f,
                    h = (e.pageType, (0, o.x)(function(e) {
                        return e.toggleDrawer
                    }));
                return p ? r.createElement("div", {
                    className: i()(a.A.appBar, A, d ? a.A.fixed : "")
                }, p) : r.createElement("header", {
                    className: i()(a.A.appBar, A, d ? a.A.fixed : "", v && a.A.appBarDivide)
                }, r.createElement("div", {
                    className: i()(a.A.appBarSection, a.A.leftSection)
                }, n || r.createElement(c, {
                    onClick: function() {
                        return h(!0)
                    }
                })), r.createElement("div", {
                    className: i()(a.A.appBarSection, a.A.centerSection)
                }, t || r.createElement("h1", {
                    className: a.A.appBarTitle
                }, s)), r.createElement("div", {
                    className: i()(a.A.appBarSection, a.A.rightSection)
                }, l || null))
            }
        }
    }
]);