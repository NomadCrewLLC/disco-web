/*! For license information please see background.bundle.js.LICENSE.txt */
;(() => {
    'use strict'
    var e,
        t,
        r,
        s,
        n = {
            907: (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        Headers: () => o,
                        Request: () => a,
                        Response: () => c,
                        default: () => i,
                        fetch: () => n,
                    })
                var s = (function () {
                    if ('undefined' != typeof self) return self
                    if ('undefined' != typeof window) return window
                    if (void 0 !== r.g) return r.g
                    throw new Error('unable to locate global object')
                })()
                const n = s.fetch,
                    i = s.fetch.bind(s),
                    o = s.Headers,
                    a = s.Request,
                    c = s.Response
            },
        },
        i = {}
    function o(e) {
        var t = i[e]
        if (void 0 !== t) return t.exports
        var r = (i[e] = { exports: {} })
        return n[e](r, r.exports, o), r.exports
    }
    ;(o.m = n),
        (t = Object.getPrototypeOf
            ? (e) => Object.getPrototypeOf(e)
            : (e) => e.__proto__),
        (o.t = function (r, s) {
            if ((1 & s && (r = this(r)), 8 & s)) return r
            if ('object' == typeof r && r) {
                if (4 & s && r.__esModule) return r
                if (16 & s && 'function' == typeof r.then) return r
            }
            var n = Object.create(null)
            o.r(n)
            var i = {}
            e = e || [null, t({}), t([]), t(t)]
            for (
                var a = 2 & s && r;
                'object' == typeof a && !~e.indexOf(a);
                a = t(a)
            )
                Object.getOwnPropertyNames(a).forEach(
                    (e) => (i[e] = () => r[e])
                )
            return (i.default = () => r), o.d(n, i), n
        }),
        (o.d = (e, t) => {
            for (var r in t)
                o.o(t, r) &&
                    !o.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        }),
        (o.f = {}),
        (o.e = (e) =>
            Promise.all(
                Object.keys(o.f).reduce((t, r) => (o.f[r](e, t), t), [])
            )),
        (o.u = (e) => e + '.bundle.js'),
        (o.miniCssF = (e) => {}),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis
            try {
                return this || new Function('return this')()
            } catch (e) {
                if ('object' == typeof window) return window
            }
        })()),
        (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r = {}),
        (s = 'chrome-extension:'),
        (o.l = (e, t, n, i) => {
            if (r[e]) r[e].push(t)
            else {
                var a, c
                if (void 0 !== n)
                    for (
                        var h = document.getElementsByTagName('script'), l = 0;
                        l < h.length;
                        l++
                    ) {
                        var u = h[l]
                        if (
                            u.getAttribute('src') == e ||
                            u.getAttribute('data-webpack') == s + n
                        ) {
                            a = u
                            break
                        }
                    }
                a ||
                    ((c = !0),
                    ((a = document.createElement('script')).charset = 'utf-8'),
                    (a.timeout = 120),
                    o.nc && a.setAttribute('nonce', o.nc),
                    a.setAttribute('data-webpack', s + n),
                    (a.src = e)),
                    (r[e] = [t])
                var d = (t, s) => {
                        ;(a.onerror = a.onload = null), clearTimeout(f)
                        var n = r[e]
                        if (
                            (delete r[e],
                            a.parentNode && a.parentNode.removeChild(a),
                            n && n.forEach((e) => e(s)),
                            t)
                        )
                            return t(s)
                    },
                    f = setTimeout(
                        d.bind(null, void 0, { type: 'timeout', target: a }),
                        12e4
                    )
                ;(a.onerror = d.bind(null, a.onerror)),
                    (a.onload = d.bind(null, a.onload)),
                    c && document.head.appendChild(a)
            }
        }),
        (o.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (() => {
            var e
            o.g.importScripts && (e = o.g.location + '')
            var t = o.g.document
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var r = t.getElementsByTagName('script')
                if (r.length)
                    for (
                        var s = r.length - 1;
                        s > -1 && (!e || !/^http(s?):/.test(e));

                    )
                        e = r[s--].src
            }
            if (!e)
                throw new Error(
                    'Automatic publicPath is not supported in this browser'
                )
            ;(e = e
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (o.p = e)
        })(),
        (() => {
            var e = { 471: 0 }
            o.f.j = (t, r) => {
                var s = o.o(e, t) ? e[t] : void 0
                if (0 !== s)
                    if (s) r.push(s[2])
                    else {
                        var n = new Promise((r, n) => (s = e[t] = [r, n]))
                        r.push((s[2] = n))
                        var i = o.p + o.u(t),
                            a = new Error()
                        o.l(
                            i,
                            (r) => {
                                if (
                                    o.o(e, t) &&
                                    (0 !== (s = e[t]) && (e[t] = void 0), s)
                                ) {
                                    var n =
                                            r &&
                                            ('load' === r.type
                                                ? 'missing'
                                                : r.type),
                                        i = r && r.target && r.target.src
                                    ;(a.message =
                                        'Loading chunk ' +
                                        t +
                                        ' failed.\n(' +
                                        n +
                                        ': ' +
                                        i +
                                        ')'),
                                        (a.name = 'ChunkLoadError'),
                                        (a.type = n),
                                        (a.request = i),
                                        s[1](a)
                                }
                            },
                            'chunk-' + t,
                            t
                        )
                    }
            }
            var t = (t, r) => {
                    var s,
                        n,
                        [i, a, c] = r,
                        h = 0
                    if (i.some((t) => 0 !== e[t])) {
                        for (s in a) o.o(a, s) && (o.m[s] = a[s])
                        c && c(o)
                    }
                    for (t && t(r); h < i.length; h++)
                        (n = i[h]), o.o(e, n) && e[n] && e[n][0](), (e[n] = 0)
                },
                r = (self.webpackChunkchrome_extension =
                    self.webpackChunkchrome_extension || [])
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
        })(),
        (() => {
            class e extends Error {
                constructor(e, t = 'FunctionsError', r) {
                    super(e), (this.name = t), (this.context = r)
                }
            }
            class t extends e {
                constructor(e) {
                    super(
                        'Failed to send a request to the Edge Function',
                        'FunctionsFetchError',
                        e
                    )
                }
            }
            class r extends e {
                constructor(e) {
                    super(
                        'Relay Error invoking the Edge Function',
                        'FunctionsRelayError',
                        e
                    )
                }
            }
            class s extends e {
                constructor(e) {
                    super(
                        'Edge Function returned a non-2xx status code',
                        'FunctionsHttpError',
                        e
                    )
                }
            }
            var n
            !(function (e) {
                ;(e.Any = 'any'),
                    (e.ApNortheast1 = 'ap-northeast-1'),
                    (e.ApNortheast2 = 'ap-northeast-2'),
                    (e.ApSouth1 = 'ap-south-1'),
                    (e.ApSoutheast1 = 'ap-southeast-1'),
                    (e.ApSoutheast2 = 'ap-southeast-2'),
                    (e.CaCentral1 = 'ca-central-1'),
                    (e.EuCentral1 = 'eu-central-1'),
                    (e.EuWest1 = 'eu-west-1'),
                    (e.EuWest2 = 'eu-west-2'),
                    (e.EuWest3 = 'eu-west-3'),
                    (e.SaEast1 = 'sa-east-1'),
                    (e.UsEast1 = 'us-east-1'),
                    (e.UsWest1 = 'us-west-1'),
                    (e.UsWest2 = 'us-west-2')
            })(n || (n = {}))
            class i {
                constructor(
                    e,
                    { headers: t = {}, customFetch: r, region: s = n.Any } = {}
                ) {
                    ;(this.url = e),
                        (this.headers = t),
                        (this.region = s),
                        (this.fetch = ((e) => {
                            let t
                            return (
                                (t =
                                    e ||
                                    ('undefined' == typeof fetch
                                        ? (...e) =>
                                              Promise.resolve()
                                                  .then(o.bind(o, 907))
                                                  .then(({ default: t }) =>
                                                      t(...e)
                                                  )
                                        : fetch)),
                                (...e) => t(...e)
                            )
                        })(r))
                }
                setAuth(e) {
                    this.headers.Authorization = `Bearer ${e}`
                }
                invoke(e, n = {}) {
                    var i, o, a, c, h
                    return (
                        (o = this),
                        (a = void 0),
                        (h = function* () {
                            try {
                                const { headers: o, method: a, body: c } = n
                                let h,
                                    l = {},
                                    { region: u } = n
                                u || (u = this.region),
                                    u && 'any' !== u && (l['x-region'] = u),
                                    c &&
                                        ((o &&
                                            !Object.prototype.hasOwnProperty.call(
                                                o,
                                                'Content-Type'
                                            )) ||
                                            !o) &&
                                        (('undefined' != typeof Blob &&
                                            c instanceof Blob) ||
                                        c instanceof ArrayBuffer
                                            ? ((l['Content-Type'] =
                                                  'application/octet-stream'),
                                              (h = c))
                                            : 'string' == typeof c
                                              ? ((l['Content-Type'] =
                                                    'text/plain'),
                                                (h = c))
                                              : 'undefined' !=
                                                      typeof FormData &&
                                                  c instanceof FormData
                                                ? (h = c)
                                                : ((l['Content-Type'] =
                                                      'application/json'),
                                                  (h = JSON.stringify(c))))
                                const d = yield this.fetch(`${this.url}/${e}`, {
                                        method: a || 'POST',
                                        headers: Object.assign(
                                            Object.assign(
                                                Object.assign({}, l),
                                                this.headers
                                            ),
                                            o
                                        ),
                                        body: h,
                                    }).catch((e) => {
                                        throw new t(e)
                                    }),
                                    f = d.headers.get('x-relay-error')
                                if (f && 'true' === f) throw new r(d)
                                if (!d.ok) throw new s(d)
                                let p,
                                    g = (
                                        null !==
                                            (i =
                                                d.headers.get(
                                                    'Content-Type'
                                                )) && void 0 !== i
                                            ? i
                                            : 'text/plain'
                                    )
                                        .split(';')[0]
                                        .trim()
                                return (
                                    (p =
                                        'application/json' === g
                                            ? yield d.json()
                                            : 'application/octet-stream' === g
                                              ? yield d.blob()
                                              : 'text/event-stream' === g
                                                ? d
                                                : 'multipart/form-data' === g
                                                  ? yield d.formData()
                                                  : yield d.text()),
                                    { data: p, error: null }
                                )
                            } catch (e) {
                                return { data: null, error: e }
                            }
                        }),
                        new ((c = void 0) || (c = Promise))(function (e, t) {
                            function r(e) {
                                try {
                                    n(h.next(e))
                                } catch (e) {
                                    t(e)
                                }
                            }
                            function s(e) {
                                try {
                                    n(h.throw(e))
                                } catch (e) {
                                    t(e)
                                }
                            }
                            function n(t) {
                                var n
                                t.done
                                    ? e(t.value)
                                    : ((n = t.value),
                                      n instanceof c
                                          ? n
                                          : new c(function (e) {
                                                e(n)
                                            })).then(r, s)
                            }
                            n((h = h.apply(o, a || [])).next())
                        })
                    )
                }
            }
            var a = o(907)
            class c extends Error {
                constructor(e) {
                    super(e.message),
                        (this.name = 'PostgrestError'),
                        (this.details = e.details),
                        (this.hint = e.hint),
                        (this.code = e.code)
                }
            }
            class h {
                constructor(e) {
                    ;(this.shouldThrowOnError = !1),
                        (this.method = e.method),
                        (this.url = e.url),
                        (this.headers = e.headers),
                        (this.schema = e.schema),
                        (this.body = e.body),
                        (this.shouldThrowOnError = e.shouldThrowOnError),
                        (this.signal = e.signal),
                        (this.isMaybeSingle = e.isMaybeSingle),
                        e.fetch
                            ? (this.fetch = e.fetch)
                            : 'undefined' == typeof fetch
                              ? (this.fetch = a.default)
                              : (this.fetch = fetch)
                }
                throwOnError() {
                    return (this.shouldThrowOnError = !0), this
                }
                then(e, t) {
                    void 0 === this.schema ||
                        (['GET', 'HEAD'].includes(this.method)
                            ? (this.headers['Accept-Profile'] = this.schema)
                            : (this.headers['Content-Profile'] = this.schema)),
                        'GET' !== this.method &&
                            'HEAD' !== this.method &&
                            (this.headers['Content-Type'] = 'application/json')
                    let r = (0, this.fetch)(this.url.toString(), {
                        method: this.method,
                        headers: this.headers,
                        body: JSON.stringify(this.body),
                        signal: this.signal,
                    }).then(async (e) => {
                        var t, r, s
                        let n = null,
                            i = null,
                            o = null,
                            a = e.status,
                            h = e.statusText
                        if (e.ok) {
                            if ('HEAD' !== this.method) {
                                const t = await e.text()
                                '' === t ||
                                    (i =
                                        'text/csv' === this.headers.Accept ||
                                        (this.headers.Accept &&
                                            this.headers.Accept.includes(
                                                'application/vnd.pgrst.plan+text'
                                            ))
                                            ? t
                                            : JSON.parse(t))
                            }
                            const s =
                                    null === (t = this.headers.Prefer) ||
                                    void 0 === t
                                        ? void 0
                                        : t.match(
                                              /count=(exact|planned|estimated)/
                                          ),
                                c =
                                    null ===
                                        (r = e.headers.get('content-range')) ||
                                    void 0 === r
                                        ? void 0
                                        : r.split('/')
                            s && c && c.length > 1 && (o = parseInt(c[1])),
                                this.isMaybeSingle &&
                                    'GET' === this.method &&
                                    Array.isArray(i) &&
                                    (i.length > 1
                                        ? ((n = {
                                              code: 'PGRST116',
                                              details: `Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                                              hint: null,
                                              message:
                                                  'JSON object requested, multiple (or no) rows returned',
                                          }),
                                          (i = null),
                                          (o = null),
                                          (a = 406),
                                          (h = 'Not Acceptable'))
                                        : (i = 1 === i.length ? i[0] : null))
                        } else {
                            const t = await e.text()
                            try {
                                ;(n = JSON.parse(t)),
                                    Array.isArray(n) &&
                                        404 === e.status &&
                                        ((i = []),
                                        (n = null),
                                        (a = 200),
                                        (h = 'OK'))
                            } catch (r) {
                                404 === e.status && '' === t
                                    ? ((a = 204), (h = 'No Content'))
                                    : (n = { message: t })
                            }
                            if (
                                (n &&
                                    this.isMaybeSingle &&
                                    (null ===
                                        (s = null == n ? void 0 : n.details) ||
                                    void 0 === s
                                        ? void 0
                                        : s.includes('0 rows')) &&
                                    ((n = null), (a = 200), (h = 'OK')),
                                n && this.shouldThrowOnError)
                            )
                                throw new c(n)
                        }
                        return {
                            error: n,
                            data: i,
                            count: o,
                            status: a,
                            statusText: h,
                        }
                    })
                    return (
                        this.shouldThrowOnError ||
                            (r = r.catch((e) => {
                                var t, r, s
                                return {
                                    error: {
                                        message: `${null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : 'FetchError'}: ${null == e ? void 0 : e.message}`,
                                        details: `${null !== (r = null == e ? void 0 : e.stack) && void 0 !== r ? r : ''}`,
                                        hint: '',
                                        code: `${null !== (s = null == e ? void 0 : e.code) && void 0 !== s ? s : ''}`,
                                    },
                                    data: null,
                                    count: null,
                                    status: 0,
                                    statusText: '',
                                }
                            })),
                        r.then(e, t)
                    )
                }
            }
            class l extends h {
                select(e) {
                    let t = !1
                    const r = (null != e ? e : '*')
                        .split('')
                        .map((e) =>
                            /\s/.test(e) && !t ? '' : ('"' === e && (t = !t), e)
                        )
                        .join('')
                    return (
                        this.url.searchParams.set('select', r),
                        this.headers.Prefer && (this.headers.Prefer += ','),
                        (this.headers.Prefer += 'return=representation'),
                        this
                    )
                }
                order(
                    e,
                    {
                        ascending: t = !0,
                        nullsFirst: r,
                        foreignTable: s,
                        referencedTable: n = s,
                    } = {}
                ) {
                    const i = n ? `${n}.order` : 'order',
                        o = this.url.searchParams.get(i)
                    return (
                        this.url.searchParams.set(
                            i,
                            `${o ? `${o},` : ''}${e}.${t ? 'asc' : 'desc'}${void 0 === r ? '' : r ? '.nullsfirst' : '.nullslast'}`
                        ),
                        this
                    )
                }
                limit(e, { foreignTable: t, referencedTable: r = t } = {}) {
                    const s = void 0 === r ? 'limit' : `${r}.limit`
                    return this.url.searchParams.set(s, `${e}`), this
                }
                range(e, t, { foreignTable: r, referencedTable: s = r } = {}) {
                    const n = void 0 === s ? 'offset' : `${s}.offset`,
                        i = void 0 === s ? 'limit' : `${s}.limit`
                    return (
                        this.url.searchParams.set(n, `${e}`),
                        this.url.searchParams.set(i, '' + (t - e + 1)),
                        this
                    )
                }
                abortSignal(e) {
                    return (this.signal = e), this
                }
                single() {
                    return (
                        (this.headers.Accept =
                            'application/vnd.pgrst.object+json'),
                        this
                    )
                }
                maybeSingle() {
                    return (
                        'GET' === this.method
                            ? (this.headers.Accept = 'application/json')
                            : (this.headers.Accept =
                                  'application/vnd.pgrst.object+json'),
                        (this.isMaybeSingle = !0),
                        this
                    )
                }
                csv() {
                    return (this.headers.Accept = 'text/csv'), this
                }
                geojson() {
                    return (this.headers.Accept = 'application/geo+json'), this
                }
                explain({
                    analyze: e = !1,
                    verbose: t = !1,
                    settings: r = !1,
                    buffers: s = !1,
                    wal: n = !1,
                    format: i = 'text',
                } = {}) {
                    var o
                    const a = [
                            e ? 'analyze' : null,
                            t ? 'verbose' : null,
                            r ? 'settings' : null,
                            s ? 'buffers' : null,
                            n ? 'wal' : null,
                        ]
                            .filter(Boolean)
                            .join('|'),
                        c =
                            null !== (o = this.headers.Accept) && void 0 !== o
                                ? o
                                : 'application/json'
                    return (
                        (this.headers.Accept = `application/vnd.pgrst.plan+${i}; for="${c}"; options=${a};`),
                        this
                    )
                }
                rollback() {
                    var e
                    return (
                        (null !== (e = this.headers.Prefer) && void 0 !== e
                            ? e
                            : ''
                        ).trim().length > 0
                            ? (this.headers.Prefer += ',tx=rollback')
                            : (this.headers.Prefer = 'tx=rollback'),
                        this
                    )
                }
                returns() {
                    return this
                }
            }
            class u extends l {
                eq(e, t) {
                    return this.url.searchParams.append(e, `eq.${t}`), this
                }
                neq(e, t) {
                    return this.url.searchParams.append(e, `neq.${t}`), this
                }
                gt(e, t) {
                    return this.url.searchParams.append(e, `gt.${t}`), this
                }
                gte(e, t) {
                    return this.url.searchParams.append(e, `gte.${t}`), this
                }
                lt(e, t) {
                    return this.url.searchParams.append(e, `lt.${t}`), this
                }
                lte(e, t) {
                    return this.url.searchParams.append(e, `lte.${t}`), this
                }
                like(e, t) {
                    return this.url.searchParams.append(e, `like.${t}`), this
                }
                likeAllOf(e, t) {
                    return (
                        this.url.searchParams.append(
                            e,
                            `like(all).{${t.join(',')}}`
                        ),
                        this
                    )
                }
                likeAnyOf(e, t) {
                    return (
                        this.url.searchParams.append(
                            e,
                            `like(any).{${t.join(',')}}`
                        ),
                        this
                    )
                }
                ilike(e, t) {
                    return this.url.searchParams.append(e, `ilike.${t}`), this
                }
                ilikeAllOf(e, t) {
                    return (
                        this.url.searchParams.append(
                            e,
                            `ilike(all).{${t.join(',')}}`
                        ),
                        this
                    )
                }
                ilikeAnyOf(e, t) {
                    return (
                        this.url.searchParams.append(
                            e,
                            `ilike(any).{${t.join(',')}}`
                        ),
                        this
                    )
                }
                is(e, t) {
                    return this.url.searchParams.append(e, `is.${t}`), this
                }
                in(e, t) {
                    const r = Array.from(new Set(t))
                        .map((e) =>
                            'string' == typeof e && new RegExp('[,()]').test(e)
                                ? `"${e}"`
                                : `${e}`
                        )
                        .join(',')
                    return this.url.searchParams.append(e, `in.(${r})`), this
                }
                contains(e, t) {
                    return (
                        'string' == typeof t
                            ? this.url.searchParams.append(e, `cs.${t}`)
                            : Array.isArray(t)
                              ? this.url.searchParams.append(
                                    e,
                                    `cs.{${t.join(',')}}`
                                )
                              : this.url.searchParams.append(
                                    e,
                                    `cs.${JSON.stringify(t)}`
                                ),
                        this
                    )
                }
                containedBy(e, t) {
                    return (
                        'string' == typeof t
                            ? this.url.searchParams.append(e, `cd.${t}`)
                            : Array.isArray(t)
                              ? this.url.searchParams.append(
                                    e,
                                    `cd.{${t.join(',')}}`
                                )
                              : this.url.searchParams.append(
                                    e,
                                    `cd.${JSON.stringify(t)}`
                                ),
                        this
                    )
                }
                rangeGt(e, t) {
                    return this.url.searchParams.append(e, `sr.${t}`), this
                }
                rangeGte(e, t) {
                    return this.url.searchParams.append(e, `nxl.${t}`), this
                }
                rangeLt(e, t) {
                    return this.url.searchParams.append(e, `sl.${t}`), this
                }
                rangeLte(e, t) {
                    return this.url.searchParams.append(e, `nxr.${t}`), this
                }
                rangeAdjacent(e, t) {
                    return this.url.searchParams.append(e, `adj.${t}`), this
                }
                overlaps(e, t) {
                    return (
                        'string' == typeof t
                            ? this.url.searchParams.append(e, `ov.${t}`)
                            : this.url.searchParams.append(
                                  e,
                                  `ov.{${t.join(',')}}`
                              ),
                        this
                    )
                }
                textSearch(e, t, { config: r, type: s } = {}) {
                    let n = ''
                    'plain' === s
                        ? (n = 'pl')
                        : 'phrase' === s
                          ? (n = 'ph')
                          : 'websearch' === s && (n = 'w')
                    const i = void 0 === r ? '' : `(${r})`
                    return (
                        this.url.searchParams.append(e, `${n}fts${i}.${t}`),
                        this
                    )
                }
                match(e) {
                    return (
                        Object.entries(e).forEach(([e, t]) => {
                            this.url.searchParams.append(e, `eq.${t}`)
                        }),
                        this
                    )
                }
                not(e, t, r) {
                    return (
                        this.url.searchParams.append(e, `not.${t}.${r}`), this
                    )
                }
                or(e, { foreignTable: t, referencedTable: r = t } = {}) {
                    const s = r ? `${r}.or` : 'or'
                    return this.url.searchParams.append(s, `(${e})`), this
                }
                filter(e, t, r) {
                    return this.url.searchParams.append(e, `${t}.${r}`), this
                }
            }
            class d {
                constructor(e, { headers: t = {}, schema: r, fetch: s }) {
                    ;(this.url = e),
                        (this.headers = t),
                        (this.schema = r),
                        (this.fetch = s)
                }
                select(e, { head: t = !1, count: r } = {}) {
                    const s = t ? 'HEAD' : 'GET'
                    let n = !1
                    const i = (null != e ? e : '*')
                        .split('')
                        .map((e) =>
                            /\s/.test(e) && !n ? '' : ('"' === e && (n = !n), e)
                        )
                        .join('')
                    return (
                        this.url.searchParams.set('select', i),
                        r && (this.headers.Prefer = `count=${r}`),
                        new u({
                            method: s,
                            url: this.url,
                            headers: this.headers,
                            schema: this.schema,
                            fetch: this.fetch,
                            allowEmpty: !1,
                        })
                    )
                }
                insert(e, { count: t, defaultToNull: r = !0 } = {}) {
                    const s = []
                    if (
                        (this.headers.Prefer && s.push(this.headers.Prefer),
                        t && s.push(`count=${t}`),
                        r || s.push('missing=default'),
                        (this.headers.Prefer = s.join(',')),
                        Array.isArray(e))
                    ) {
                        const t = e.reduce(
                            (e, t) => e.concat(Object.keys(t)),
                            []
                        )
                        if (t.length > 0) {
                            const e = [...new Set(t)].map((e) => `"${e}"`)
                            this.url.searchParams.set('columns', e.join(','))
                        }
                    }
                    return new u({
                        method: 'POST',
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        body: e,
                        fetch: this.fetch,
                        allowEmpty: !1,
                    })
                }
                upsert(
                    e,
                    {
                        onConflict: t,
                        ignoreDuplicates: r = !1,
                        count: s,
                        defaultToNull: n = !0,
                    } = {}
                ) {
                    const i = [
                        `resolution=${r ? 'ignore' : 'merge'}-duplicates`,
                    ]
                    if (
                        (void 0 !== t &&
                            this.url.searchParams.set('on_conflict', t),
                        this.headers.Prefer && i.push(this.headers.Prefer),
                        s && i.push(`count=${s}`),
                        n || i.push('missing=default'),
                        (this.headers.Prefer = i.join(',')),
                        Array.isArray(e))
                    ) {
                        const t = e.reduce(
                            (e, t) => e.concat(Object.keys(t)),
                            []
                        )
                        if (t.length > 0) {
                            const e = [...new Set(t)].map((e) => `"${e}"`)
                            this.url.searchParams.set('columns', e.join(','))
                        }
                    }
                    return new u({
                        method: 'POST',
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        body: e,
                        fetch: this.fetch,
                        allowEmpty: !1,
                    })
                }
                update(e, { count: t } = {}) {
                    const r = []
                    return (
                        this.headers.Prefer && r.push(this.headers.Prefer),
                        t && r.push(`count=${t}`),
                        (this.headers.Prefer = r.join(',')),
                        new u({
                            method: 'PATCH',
                            url: this.url,
                            headers: this.headers,
                            schema: this.schema,
                            body: e,
                            fetch: this.fetch,
                            allowEmpty: !1,
                        })
                    )
                }
                delete({ count: e } = {}) {
                    const t = []
                    return (
                        e && t.push(`count=${e}`),
                        this.headers.Prefer && t.unshift(this.headers.Prefer),
                        (this.headers.Prefer = t.join(',')),
                        new u({
                            method: 'DELETE',
                            url: this.url,
                            headers: this.headers,
                            schema: this.schema,
                            fetch: this.fetch,
                            allowEmpty: !1,
                        })
                    )
                }
            }
            const f = { 'X-Client-Info': 'postgrest-js/1.15.2' }
            class p {
                constructor(e, { headers: t = {}, schema: r, fetch: s } = {}) {
                    ;(this.url = e),
                        (this.headers = Object.assign(Object.assign({}, f), t)),
                        (this.schemaName = r),
                        (this.fetch = s)
                }
                from(e) {
                    const t = new URL(`${this.url}/${e}`)
                    return new d(t, {
                        headers: Object.assign({}, this.headers),
                        schema: this.schemaName,
                        fetch: this.fetch,
                    })
                }
                schema(e) {
                    return new p(this.url, {
                        headers: this.headers,
                        schema: e,
                        fetch: this.fetch,
                    })
                }
                rpc(e, t = {}, { head: r = !1, get: s = !1, count: n } = {}) {
                    let i
                    const o = new URL(`${this.url}/rpc/${e}`)
                    let a
                    r || s
                        ? ((i = r ? 'HEAD' : 'GET'),
                          Object.entries(t)
                              .filter(([e, t]) => void 0 !== t)
                              .map(([e, t]) => [
                                  e,
                                  Array.isArray(t)
                                      ? `{${t.join(',')}}`
                                      : `${t}`,
                              ])
                              .forEach(([e, t]) => {
                                  o.searchParams.append(e, t)
                              }))
                        : ((i = 'POST'), (a = t))
                    const c = Object.assign({}, this.headers)
                    return (
                        n && (c.Prefer = `count=${n}`),
                        new u({
                            method: i,
                            url: o,
                            headers: c,
                            schema: this.schemaName,
                            body: a,
                            fetch: this.fetch,
                            allowEmpty: !1,
                        })
                    )
                }
            }
            const g = { 'X-Client-Info': 'realtime-js/2.9.5' }
            var y, m, v, w, b, _, k, S
            !(function (e) {
                ;(e[(e.connecting = 0)] = 'connecting'),
                    (e[(e.open = 1)] = 'open'),
                    (e[(e.closing = 2)] = 'closing'),
                    (e[(e.closed = 3)] = 'closed')
            })(y || (y = {})),
                ((S = m || (m = {})).closed = 'closed'),
                (S.errored = 'errored'),
                (S.joined = 'joined'),
                (S.joining = 'joining'),
                (S.leaving = 'leaving'),
                (function (e) {
                    ;(e.close = 'phx_close'),
                        (e.error = 'phx_error'),
                        (e.join = 'phx_join'),
                        (e.reply = 'phx_reply'),
                        (e.leave = 'phx_leave'),
                        (e.access_token = 'access_token')
                })(v || (v = {})),
                (function (e) {
                    e.websocket = 'websocket'
                })(w || (w = {})),
                (function (e) {
                    ;(e.Connecting = 'connecting'),
                        (e.Open = 'open'),
                        (e.Closing = 'closing'),
                        (e.Closed = 'closed')
                })(b || (b = {}))
            class T {
                constructor(e, t) {
                    ;(this.callback = e),
                        (this.timerCalc = t),
                        (this.timer = void 0),
                        (this.tries = 0),
                        (this.callback = e),
                        (this.timerCalc = t)
                }
                reset() {
                    ;(this.tries = 0), clearTimeout(this.timer)
                }
                scheduleTimeout() {
                    clearTimeout(this.timer),
                        (this.timer = setTimeout(
                            () => {
                                ;(this.tries = this.tries + 1), this.callback()
                            },
                            this.timerCalc(this.tries + 1)
                        ))
                }
            }
            class j {
                constructor() {
                    this.HEADER_LENGTH = 1
                }
                decode(e, t) {
                    return e.constructor === ArrayBuffer
                        ? t(this._binaryDecode(e))
                        : t('string' == typeof e ? JSON.parse(e) : {})
                }
                _binaryDecode(e) {
                    const t = new DataView(e),
                        r = new TextDecoder()
                    return this._decodeBroadcast(e, t, r)
                }
                _decodeBroadcast(e, t, r) {
                    const s = t.getUint8(1),
                        n = t.getUint8(2)
                    let i = this.HEADER_LENGTH + 2
                    const o = r.decode(e.slice(i, i + s))
                    i += s
                    const a = r.decode(e.slice(i, i + n))
                    return (
                        (i += n),
                        {
                            ref: null,
                            topic: o,
                            event: a,
                            payload: JSON.parse(
                                r.decode(e.slice(i, e.byteLength))
                            ),
                        }
                    )
                }
            }
            class O {
                constructor(e, t, r = {}, s = 1e4) {
                    ;(this.channel = e),
                        (this.event = t),
                        (this.payload = r),
                        (this.timeout = s),
                        (this.sent = !1),
                        (this.timeoutTimer = void 0),
                        (this.ref = ''),
                        (this.receivedResp = null),
                        (this.recHooks = []),
                        (this.refEvent = null)
                }
                resend(e) {
                    ;(this.timeout = e),
                        this._cancelRefEvent(),
                        (this.ref = ''),
                        (this.refEvent = null),
                        (this.receivedResp = null),
                        (this.sent = !1),
                        this.send()
                }
                send() {
                    this._hasReceived('timeout') ||
                        (this.startTimeout(),
                        (this.sent = !0),
                        this.channel.socket.push({
                            topic: this.channel.topic,
                            event: this.event,
                            payload: this.payload,
                            ref: this.ref,
                            join_ref: this.channel._joinRef(),
                        }))
                }
                updatePayload(e) {
                    this.payload = Object.assign(
                        Object.assign({}, this.payload),
                        e
                    )
                }
                receive(e, t) {
                    var r
                    return (
                        this._hasReceived(e) &&
                            t(
                                null === (r = this.receivedResp) || void 0 === r
                                    ? void 0
                                    : r.response
                            ),
                        this.recHooks.push({ status: e, callback: t }),
                        this
                    )
                }
                startTimeout() {
                    this.timeoutTimer ||
                        ((this.ref = this.channel.socket._makeRef()),
                        (this.refEvent = this.channel._replyEventName(
                            this.ref
                        )),
                        this.channel._on(this.refEvent, {}, (e) => {
                            this._cancelRefEvent(),
                                this._cancelTimeout(),
                                (this.receivedResp = e),
                                this._matchReceive(e)
                        }),
                        (this.timeoutTimer = setTimeout(() => {
                            this.trigger('timeout', {})
                        }, this.timeout)))
                }
                trigger(e, t) {
                    this.refEvent &&
                        this.channel._trigger(this.refEvent, {
                            status: e,
                            response: t,
                        })
                }
                destroy() {
                    this._cancelRefEvent(), this._cancelTimeout()
                }
                _cancelRefEvent() {
                    this.refEvent && this.channel._off(this.refEvent, {})
                }
                _cancelTimeout() {
                    clearTimeout(this.timeoutTimer),
                        (this.timeoutTimer = void 0)
                }
                _matchReceive({ status: e, response: t }) {
                    this.recHooks
                        .filter((t) => t.status === e)
                        .forEach((e) => e.callback(t))
                }
                _hasReceived(e) {
                    return this.receivedResp && this.receivedResp.status === e
                }
            }
            !(function (e) {
                ;(e.SYNC = 'sync'), (e.JOIN = 'join'), (e.LEAVE = 'leave')
            })(_ || (_ = {}))
            class E {
                constructor(e, t) {
                    ;(this.channel = e),
                        (this.state = {}),
                        (this.pendingDiffs = []),
                        (this.joinRef = null),
                        (this.caller = {
                            onJoin: () => {},
                            onLeave: () => {},
                            onSync: () => {},
                        })
                    const r = (null == t ? void 0 : t.events) || {
                        state: 'presence_state',
                        diff: 'presence_diff',
                    }
                    this.channel._on(r.state, {}, (e) => {
                        const { onJoin: t, onLeave: r, onSync: s } = this.caller
                        ;(this.joinRef = this.channel._joinRef()),
                            (this.state = E.syncState(this.state, e, t, r)),
                            this.pendingDiffs.forEach((e) => {
                                this.state = E.syncDiff(this.state, e, t, r)
                            }),
                            (this.pendingDiffs = []),
                            s()
                    }),
                        this.channel._on(r.diff, {}, (e) => {
                            const {
                                onJoin: t,
                                onLeave: r,
                                onSync: s,
                            } = this.caller
                            this.inPendingSyncState()
                                ? this.pendingDiffs.push(e)
                                : ((this.state = E.syncDiff(
                                      this.state,
                                      e,
                                      t,
                                      r
                                  )),
                                  s())
                        }),
                        this.onJoin((e, t, r) => {
                            this.channel._trigger('presence', {
                                event: 'join',
                                key: e,
                                currentPresences: t,
                                newPresences: r,
                            })
                        }),
                        this.onLeave((e, t, r) => {
                            this.channel._trigger('presence', {
                                event: 'leave',
                                key: e,
                                currentPresences: t,
                                leftPresences: r,
                            })
                        }),
                        this.onSync(() => {
                            this.channel._trigger('presence', { event: 'sync' })
                        })
                }
                static syncState(e, t, r, s) {
                    const n = this.cloneDeep(e),
                        i = this.transformState(t),
                        o = {},
                        a = {}
                    return (
                        this.map(n, (e, t) => {
                            i[e] || (a[e] = t)
                        }),
                        this.map(i, (e, t) => {
                            const r = n[e]
                            if (r) {
                                const s = t.map((e) => e.presence_ref),
                                    n = r.map((e) => e.presence_ref),
                                    i = t.filter(
                                        (e) => n.indexOf(e.presence_ref) < 0
                                    ),
                                    c = r.filter(
                                        (e) => s.indexOf(e.presence_ref) < 0
                                    )
                                i.length > 0 && (o[e] = i),
                                    c.length > 0 && (a[e] = c)
                            } else o[e] = t
                        }),
                        this.syncDiff(n, { joins: o, leaves: a }, r, s)
                    )
                }
                static syncDiff(e, t, r, s) {
                    const { joins: n, leaves: i } = {
                        joins: this.transformState(t.joins),
                        leaves: this.transformState(t.leaves),
                    }
                    return (
                        r || (r = () => {}),
                        s || (s = () => {}),
                        this.map(n, (t, s) => {
                            var n
                            const i =
                                null !== (n = e[t]) && void 0 !== n ? n : []
                            if (((e[t] = this.cloneDeep(s)), i.length > 0)) {
                                const r = e[t].map((e) => e.presence_ref),
                                    s = i.filter(
                                        (e) => r.indexOf(e.presence_ref) < 0
                                    )
                                e[t].unshift(...s)
                            }
                            r(t, i, s)
                        }),
                        this.map(i, (t, r) => {
                            let n = e[t]
                            if (!n) return
                            const i = r.map((e) => e.presence_ref)
                            ;(n = n.filter(
                                (e) => i.indexOf(e.presence_ref) < 0
                            )),
                                (e[t] = n),
                                s(t, n, r),
                                0 === n.length && delete e[t]
                        }),
                        e
                    )
                }
                static map(e, t) {
                    return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]))
                }
                static transformState(e) {
                    return (
                        (e = this.cloneDeep(e)),
                        Object.getOwnPropertyNames(e).reduce((t, r) => {
                            const s = e[r]
                            return (
                                (t[r] =
                                    'metas' in s
                                        ? s.metas.map(
                                              (e) => (
                                                  (e.presence_ref = e.phx_ref),
                                                  delete e.phx_ref,
                                                  delete e.phx_ref_prev,
                                                  e
                                              )
                                          )
                                        : s),
                                t
                            )
                        }, {})
                    )
                }
                static cloneDeep(e) {
                    return JSON.parse(JSON.stringify(e))
                }
                onJoin(e) {
                    this.caller.onJoin = e
                }
                onLeave(e) {
                    this.caller.onLeave = e
                }
                onSync(e) {
                    this.caller.onSync = e
                }
                inPendingSyncState() {
                    return (
                        !this.joinRef ||
                        this.joinRef !== this.channel._joinRef()
                    )
                }
            }
            !(function (e) {
                ;(e.abstime = 'abstime'),
                    (e.bool = 'bool'),
                    (e.date = 'date'),
                    (e.daterange = 'daterange'),
                    (e.float4 = 'float4'),
                    (e.float8 = 'float8'),
                    (e.int2 = 'int2'),
                    (e.int4 = 'int4'),
                    (e.int4range = 'int4range'),
                    (e.int8 = 'int8'),
                    (e.int8range = 'int8range'),
                    (e.json = 'json'),
                    (e.jsonb = 'jsonb'),
                    (e.money = 'money'),
                    (e.numeric = 'numeric'),
                    (e.oid = 'oid'),
                    (e.reltime = 'reltime'),
                    (e.text = 'text'),
                    (e.time = 'time'),
                    (e.timestamp = 'timestamp'),
                    (e.timestamptz = 'timestamptz'),
                    (e.timetz = 'timetz'),
                    (e.tsrange = 'tsrange'),
                    (e.tstzrange = 'tstzrange')
            })(k || (k = {}))
            const P = (e, t, r = {}) => {
                    var s
                    const n =
                        null !== (s = r.skipTypes) && void 0 !== s ? s : []
                    return Object.keys(t).reduce(
                        (r, s) => ((r[s] = $(s, e, t, n)), r),
                        {}
                    )
                },
                $ = (e, t, r, s) => {
                    const n = t.find((t) => t.name === e),
                        i = null == n ? void 0 : n.type,
                        o = r[e]
                    return i && !s.includes(i) ? x(i, o) : A(o)
                },
                x = (e, t) => {
                    if ('_' === e.charAt(0)) {
                        const r = e.slice(1, e.length)
                        return L(t, r)
                    }
                    switch (e) {
                        case k.bool:
                            return C(t)
                        case k.float4:
                        case k.float8:
                        case k.int2:
                        case k.int4:
                        case k.int8:
                        case k.numeric:
                        case k.oid:
                            return R(t)
                        case k.json:
                        case k.jsonb:
                            return I(t)
                        case k.timestamp:
                            return U(t)
                        case k.abstime:
                        case k.date:
                        case k.daterange:
                        case k.int4range:
                        case k.int8range:
                        case k.money:
                        case k.reltime:
                        case k.text:
                        case k.time:
                        case k.timestamptz:
                        case k.timetz:
                        case k.tsrange:
                        case k.tstzrange:
                        default:
                            return A(t)
                    }
                },
                A = (e) => e,
                C = (e) => {
                    switch (e) {
                        case 't':
                            return !0
                        case 'f':
                            return !1
                        default:
                            return e
                    }
                },
                R = (e) => {
                    if ('string' == typeof e) {
                        const t = parseFloat(e)
                        if (!Number.isNaN(t)) return t
                    }
                    return e
                },
                I = (e) => {
                    if ('string' == typeof e)
                        try {
                            return JSON.parse(e)
                        } catch (t) {
                            return console.log(`JSON parse error: ${t}`), e
                        }
                    return e
                },
                L = (e, t) => {
                    if ('string' != typeof e) return e
                    const r = e.length - 1,
                        s = e[r]
                    if ('{' === e[0] && '}' === s) {
                        let s
                        const n = e.slice(1, r)
                        try {
                            s = JSON.parse('[' + n + ']')
                        } catch (e) {
                            s = n ? n.split(',') : []
                        }
                        return s.map((e) => x(t, e))
                    }
                    return e
                },
                U = (e) => ('string' == typeof e ? e.replace(' ', 'T') : e)
            var N, D, F
            !(function (e) {
                ;(e.ALL = '*'),
                    (e.INSERT = 'INSERT'),
                    (e.UPDATE = 'UPDATE'),
                    (e.DELETE = 'DELETE')
            })(N || (N = {})),
                (function (e) {
                    ;(e.BROADCAST = 'broadcast'),
                        (e.PRESENCE = 'presence'),
                        (e.POSTGRES_CHANGES = 'postgres_changes')
                })(D || (D = {})),
                (function (e) {
                    ;(e.SUBSCRIBED = 'SUBSCRIBED'),
                        (e.TIMED_OUT = 'TIMED_OUT'),
                        (e.CLOSED = 'CLOSED'),
                        (e.CHANNEL_ERROR = 'CHANNEL_ERROR')
                })(F || (F = {}))
            class q {
                constructor(e, t = { config: {} }, r) {
                    ;(this.topic = e),
                        (this.params = t),
                        (this.socket = r),
                        (this.bindings = {}),
                        (this.state = m.closed),
                        (this.joinedOnce = !1),
                        (this.pushBuffer = []),
                        (this.subTopic = e.replace(/^realtime:/i, '')),
                        (this.params.config = Object.assign(
                            {
                                broadcast: { ack: !1, self: !1 },
                                presence: { key: '' },
                            },
                            t.config
                        )),
                        (this.timeout = this.socket.timeout),
                        (this.joinPush = new O(
                            this,
                            v.join,
                            this.params,
                            this.timeout
                        )),
                        (this.rejoinTimer = new T(
                            () => this._rejoinUntilConnected(),
                            this.socket.reconnectAfterMs
                        )),
                        this.joinPush.receive('ok', () => {
                            ;(this.state = m.joined),
                                this.rejoinTimer.reset(),
                                this.pushBuffer.forEach((e) => e.send()),
                                (this.pushBuffer = [])
                        }),
                        this._onClose(() => {
                            this.rejoinTimer.reset(),
                                this.socket.log(
                                    'channel',
                                    `close ${this.topic} ${this._joinRef()}`
                                ),
                                (this.state = m.closed),
                                this.socket._remove(this)
                        }),
                        this._onError((e) => {
                            this._isLeaving() ||
                                this._isClosed() ||
                                (this.socket.log(
                                    'channel',
                                    `error ${this.topic}`,
                                    e
                                ),
                                (this.state = m.errored),
                                this.rejoinTimer.scheduleTimeout())
                        }),
                        this.joinPush.receive('timeout', () => {
                            this._isJoining() &&
                                (this.socket.log(
                                    'channel',
                                    `timeout ${this.topic}`,
                                    this.joinPush.timeout
                                ),
                                (this.state = m.errored),
                                this.rejoinTimer.scheduleTimeout())
                        }),
                        this._on(v.reply, {}, (e, t) => {
                            this._trigger(this._replyEventName(t), e)
                        }),
                        (this.presence = new E(this)),
                        (this.broadcastEndpointURL =
                            this._broadcastEndpointURL())
                }
                subscribe(e, t = this.timeout) {
                    var r, s
                    if (
                        (this.socket.isConnected() || this.socket.connect(),
                        this.joinedOnce)
                    )
                        throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance"
                    {
                        const {
                            config: { broadcast: n, presence: i },
                        } = this.params
                        this._onError((t) => e && e('CHANNEL_ERROR', t)),
                            this._onClose(() => e && e('CLOSED'))
                        const o = {},
                            a = {
                                broadcast: n,
                                presence: i,
                                postgres_changes:
                                    null !==
                                        (s =
                                            null ===
                                                (r =
                                                    this.bindings
                                                        .postgres_changes) ||
                                            void 0 === r
                                                ? void 0
                                                : r.map((e) => e.filter)) &&
                                    void 0 !== s
                                        ? s
                                        : [],
                            }
                        this.socket.accessToken &&
                            (o.access_token = this.socket.accessToken),
                            this.updateJoinPayload(
                                Object.assign({ config: a }, o)
                            ),
                            (this.joinedOnce = !0),
                            this._rejoin(t),
                            this.joinPush
                                .receive('ok', ({ postgres_changes: t }) => {
                                    var r
                                    if (
                                        (this.socket.accessToken &&
                                            this.socket.setAuth(
                                                this.socket.accessToken
                                            ),
                                        void 0 !== t)
                                    ) {
                                        const s =
                                                this.bindings.postgres_changes,
                                            n =
                                                null !==
                                                    (r =
                                                        null == s
                                                            ? void 0
                                                            : s.length) &&
                                                void 0 !== r
                                                    ? r
                                                    : 0,
                                            i = []
                                        for (let r = 0; r < n; r++) {
                                            const n = s[r],
                                                {
                                                    filter: {
                                                        event: o,
                                                        schema: a,
                                                        table: c,
                                                        filter: h,
                                                    },
                                                } = n,
                                                l = t && t[r]
                                            if (
                                                !l ||
                                                l.event !== o ||
                                                l.schema !== a ||
                                                l.table !== c ||
                                                l.filter !== h
                                            )
                                                return (
                                                    this.unsubscribe(),
                                                    void (
                                                        e &&
                                                        e(
                                                            'CHANNEL_ERROR',
                                                            new Error(
                                                                'mismatch between server and client bindings for postgres changes'
                                                            )
                                                        )
                                                    )
                                                )
                                            i.push(
                                                Object.assign(
                                                    Object.assign({}, n),
                                                    { id: l.id }
                                                )
                                            )
                                        }
                                        return (
                                            (this.bindings.postgres_changes =
                                                i),
                                            void (e && e('SUBSCRIBED'))
                                        )
                                    }
                                    e && e('SUBSCRIBED')
                                })
                                .receive('error', (t) => {
                                    e &&
                                        e(
                                            'CHANNEL_ERROR',
                                            new Error(
                                                JSON.stringify(
                                                    Object.values(t).join(
                                                        ', '
                                                    ) || 'error'
                                                )
                                            )
                                        )
                                })
                                .receive('timeout', () => {
                                    e && e('TIMED_OUT')
                                })
                    }
                    return this
                }
                presenceState() {
                    return this.presence.state
                }
                async track(e, t = {}) {
                    return await this.send(
                        { type: 'presence', event: 'track', payload: e },
                        t.timeout || this.timeout
                    )
                }
                async untrack(e = {}) {
                    return await this.send(
                        { type: 'presence', event: 'untrack' },
                        e
                    )
                }
                on(e, t, r) {
                    return this._on(e, t, r)
                }
                async send(e, t = {}) {
                    var r, s
                    if (this._canPush() || 'broadcast' !== e.type)
                        return new Promise((r) => {
                            var s, n, i
                            const o = this._push(
                                e.type,
                                e,
                                t.timeout || this.timeout
                            )
                            'broadcast' !== e.type ||
                                (null ===
                                    (i =
                                        null ===
                                            (n =
                                                null === (s = this.params) ||
                                                void 0 === s
                                                    ? void 0
                                                    : s.config) || void 0 === n
                                            ? void 0
                                            : n.broadcast) || void 0 === i
                                    ? void 0
                                    : i.ack) ||
                                r('ok'),
                                o.receive('ok', () => r('ok')),
                                o.receive('error', () => r('error')),
                                o.receive('timeout', () => r('timed out'))
                        })
                    {
                        const { event: n, payload: i } = e,
                            o = {
                                method: 'POST',
                                headers: {
                                    apikey:
                                        null !== (r = this.socket.apiKey) &&
                                        void 0 !== r
                                            ? r
                                            : '',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    messages: [
                                        {
                                            topic: this.subTopic,
                                            event: n,
                                            payload: i,
                                        },
                                    ],
                                }),
                            }
                        try {
                            return (
                                await this._fetchWithTimeout(
                                    this.broadcastEndpointURL,
                                    o,
                                    null !== (s = t.timeout) && void 0 !== s
                                        ? s
                                        : this.timeout
                                )
                            ).ok
                                ? 'ok'
                                : 'error'
                        } catch (e) {
                            return 'AbortError' === e.name
                                ? 'timed out'
                                : 'error'
                        }
                    }
                }
                updateJoinPayload(e) {
                    this.joinPush.updatePayload(e)
                }
                unsubscribe(e = this.timeout) {
                    this.state = m.leaving
                    const t = () => {
                        this.socket.log('channel', `leave ${this.topic}`),
                            this._trigger(v.close, 'leave', this._joinRef())
                    }
                    return (
                        this.rejoinTimer.reset(),
                        this.joinPush.destroy(),
                        new Promise((r) => {
                            const s = new O(this, v.leave, {}, e)
                            s
                                .receive('ok', () => {
                                    t(), r('ok')
                                })
                                .receive('timeout', () => {
                                    t(), r('timed out')
                                })
                                .receive('error', () => {
                                    r('error')
                                }),
                                s.send(),
                                this._canPush() || s.trigger('ok', {})
                        })
                    )
                }
                _broadcastEndpointURL() {
                    let e = this.socket.endPoint
                    return (
                        (e = e.replace(/^ws/i, 'http')),
                        (e = e.replace(
                            /(\/socket\/websocket|\/socket|\/websocket)\/?$/i,
                            ''
                        )),
                        e.replace(/\/+$/, '') + '/api/broadcast'
                    )
                }
                async _fetchWithTimeout(e, t, r) {
                    const s = new AbortController(),
                        n = setTimeout(() => s.abort(), r),
                        i = await this.socket.fetch(
                            e,
                            Object.assign(Object.assign({}, t), {
                                signal: s.signal,
                            })
                        )
                    return clearTimeout(n), i
                }
                _push(e, t, r = this.timeout) {
                    if (!this.joinedOnce)
                        throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`
                    let s = new O(this, e, t, r)
                    return (
                        this._canPush()
                            ? s.send()
                            : (s.startTimeout(), this.pushBuffer.push(s)),
                        s
                    )
                }
                _onMessage(e, t, r) {
                    return t
                }
                _isMember(e) {
                    return this.topic === e
                }
                _joinRef() {
                    return this.joinPush.ref
                }
                _trigger(e, t, r) {
                    var s, n
                    const i = e.toLocaleLowerCase(),
                        { close: o, error: a, leave: c, join: h } = v
                    if (
                        r &&
                        [o, a, c, h].indexOf(i) >= 0 &&
                        r !== this._joinRef()
                    )
                        return
                    let l = this._onMessage(i, t, r)
                    if (t && !l)
                        throw 'channel onMessage callbacks must return the payload, modified or unmodified'
                    ;['insert', 'update', 'delete'].includes(i)
                        ? null === (s = this.bindings.postgres_changes) ||
                          void 0 === s ||
                          s
                              .filter((e) => {
                                  var t, r, s
                                  return (
                                      '*' ===
                                          (null === (t = e.filter) ||
                                          void 0 === t
                                              ? void 0
                                              : t.event) ||
                                      (null ===
                                          (s =
                                              null === (r = e.filter) ||
                                              void 0 === r
                                                  ? void 0
                                                  : r.event) || void 0 === s
                                          ? void 0
                                          : s.toLocaleLowerCase()) === i
                                  )
                              })
                              .map((e) => e.callback(l, r))
                        : null === (n = this.bindings[i]) ||
                          void 0 === n ||
                          n
                              .filter((e) => {
                                  var r, s, n, o, a, c
                                  if (
                                      [
                                          'broadcast',
                                          'presence',
                                          'postgres_changes',
                                      ].includes(i)
                                  ) {
                                      if ('id' in e) {
                                          const i = e.id,
                                              o =
                                                  null === (r = e.filter) ||
                                                  void 0 === r
                                                      ? void 0
                                                      : r.event
                                          return (
                                              i &&
                                              (null === (s = t.ids) ||
                                              void 0 === s
                                                  ? void 0
                                                  : s.includes(i)) &&
                                              ('*' === o ||
                                                  (null == o
                                                      ? void 0
                                                      : o.toLocaleLowerCase()) ===
                                                      (null === (n = t.data) ||
                                                      void 0 === n
                                                          ? void 0
                                                          : n.type.toLocaleLowerCase()))
                                          )
                                      }
                                      {
                                          const r =
                                              null ===
                                                  (a =
                                                      null ===
                                                          (o =
                                                              null == e
                                                                  ? void 0
                                                                  : e.filter) ||
                                                      void 0 === o
                                                          ? void 0
                                                          : o.event) ||
                                              void 0 === a
                                                  ? void 0
                                                  : a.toLocaleLowerCase()
                                          return (
                                              '*' === r ||
                                              r ===
                                                  (null ===
                                                      (c =
                                                          null == t
                                                              ? void 0
                                                              : t.event) ||
                                                  void 0 === c
                                                      ? void 0
                                                      : c.toLocaleLowerCase())
                                          )
                                      }
                                  }
                                  return e.type.toLocaleLowerCase() === i
                              })
                              .map((e) => {
                                  if ('object' == typeof l && 'ids' in l) {
                                      const e = l.data,
                                          {
                                              schema: t,
                                              table: r,
                                              commit_timestamp: s,
                                              type: n,
                                              errors: i,
                                          } = e,
                                          o = {
                                              schema: t,
                                              table: r,
                                              commit_timestamp: s,
                                              eventType: n,
                                              new: {},
                                              old: {},
                                              errors: i,
                                          }
                                      l = Object.assign(
                                          Object.assign({}, o),
                                          this._getPayloadRecords(e)
                                      )
                                  }
                                  e.callback(l, r)
                              })
                }
                _isClosed() {
                    return this.state === m.closed
                }
                _isJoined() {
                    return this.state === m.joined
                }
                _isJoining() {
                    return this.state === m.joining
                }
                _isLeaving() {
                    return this.state === m.leaving
                }
                _replyEventName(e) {
                    return `chan_reply_${e}`
                }
                _on(e, t, r) {
                    const s = e.toLocaleLowerCase(),
                        n = { type: s, filter: t, callback: r }
                    return (
                        this.bindings[s]
                            ? this.bindings[s].push(n)
                            : (this.bindings[s] = [n]),
                        this
                    )
                }
                _off(e, t) {
                    const r = e.toLocaleLowerCase()
                    return (
                        (this.bindings[r] = this.bindings[r].filter((e) => {
                            var s
                            return !(
                                (null === (s = e.type) || void 0 === s
                                    ? void 0
                                    : s.toLocaleLowerCase()) === r &&
                                q.isEqual(e.filter, t)
                            )
                        })),
                        this
                    )
                }
                static isEqual(e, t) {
                    if (Object.keys(e).length !== Object.keys(t).length)
                        return !1
                    for (const r in e) if (e[r] !== t[r]) return !1
                    return !0
                }
                _rejoinUntilConnected() {
                    this.rejoinTimer.scheduleTimeout(),
                        this.socket.isConnected() && this._rejoin()
                }
                _onClose(e) {
                    this._on(v.close, {}, e)
                }
                _onError(e) {
                    this._on(v.error, {}, (t) => e(t))
                }
                _canPush() {
                    return this.socket.isConnected() && this._isJoined()
                }
                _rejoin(e = this.timeout) {
                    this._isLeaving() ||
                        (this.socket._leaveOpenTopic(this.topic),
                        (this.state = m.joining),
                        this.joinPush.resend(e))
                }
                _getPayloadRecords(e) {
                    const t = { new: {}, old: {} }
                    return (
                        ('INSERT' !== e.type && 'UPDATE' !== e.type) ||
                            (t.new = P(e.columns, e.record)),
                        ('UPDATE' !== e.type && 'DELETE' !== e.type) ||
                            (t.old = P(e.columns, e.old_record)),
                        t
                    )
                }
            }
            const M = () => {},
                z = 'undefined' != typeof WebSocket
            class J {
                constructor(e, t) {
                    var r
                    ;(this.accessToken = null),
                        (this.apiKey = null),
                        (this.channels = []),
                        (this.endPoint = ''),
                        (this.headers = g),
                        (this.params = {}),
                        (this.timeout = 1e4),
                        (this.heartbeatIntervalMs = 3e4),
                        (this.heartbeatTimer = void 0),
                        (this.pendingHeartbeatRef = null),
                        (this.ref = 0),
                        (this.logger = M),
                        (this.conn = null),
                        (this.sendBuffer = []),
                        (this.serializer = new j()),
                        (this.stateChangeCallbacks = {
                            open: [],
                            close: [],
                            error: [],
                            message: [],
                        }),
                        (this._resolveFetch = (e) => {
                            let t
                            return (
                                (t =
                                    e ||
                                    ('undefined' == typeof fetch
                                        ? (...e) =>
                                              Promise.resolve()
                                                  .then(o.bind(o, 907))
                                                  .then(({ default: t }) =>
                                                      t(...e)
                                                  )
                                        : fetch)),
                                (...e) => t(...e)
                            )
                        }),
                        (this.endPoint = `${e}/${w.websocket}`),
                        (null == t ? void 0 : t.transport)
                            ? (this.transport = t.transport)
                            : (this.transport = null),
                        (null == t ? void 0 : t.params) &&
                            (this.params = t.params),
                        (null == t ? void 0 : t.headers) &&
                            (this.headers = Object.assign(
                                Object.assign({}, this.headers),
                                t.headers
                            )),
                        (null == t ? void 0 : t.timeout) &&
                            (this.timeout = t.timeout),
                        (null == t ? void 0 : t.logger) &&
                            (this.logger = t.logger),
                        (null == t ? void 0 : t.heartbeatIntervalMs) &&
                            (this.heartbeatIntervalMs = t.heartbeatIntervalMs)
                    const s =
                        null === (r = null == t ? void 0 : t.params) ||
                        void 0 === r
                            ? void 0
                            : r.apikey
                    s && ((this.accessToken = s), (this.apiKey = s)),
                        (this.reconnectAfterMs = (
                            null == t ? void 0 : t.reconnectAfterMs
                        )
                            ? t.reconnectAfterMs
                            : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
                        (this.encode = (null == t ? void 0 : t.encode)
                            ? t.encode
                            : (e, t) => t(JSON.stringify(e))),
                        (this.decode = (null == t ? void 0 : t.decode)
                            ? t.decode
                            : this.serializer.decode.bind(this.serializer)),
                        (this.reconnectTimer = new T(async () => {
                            this.disconnect(), this.connect()
                        }, this.reconnectAfterMs)),
                        (this.fetch = this._resolveFetch(
                            null == t ? void 0 : t.fetch
                        ))
                }
                connect() {
                    if (!this.conn)
                        if (this.transport)
                            this.conn = new this.transport(
                                this._endPointURL(),
                                void 0,
                                { headers: this.headers }
                            )
                        else {
                            if (z)
                                return (
                                    (this.conn = new WebSocket(
                                        this._endPointURL()
                                    )),
                                    void this.setupConnection()
                                )
                            ;(this.conn = new B(this._endPointURL(), void 0, {
                                close: () => {
                                    this.conn = null
                                },
                            })),
                                o
                                    .e(591)
                                    .then(o.t.bind(o, 591, 23))
                                    .then(({ default: e }) => {
                                        ;(this.conn = new e(
                                            this._endPointURL(),
                                            void 0,
                                            { headers: this.headers }
                                        )),
                                            this.setupConnection()
                                    })
                        }
                }
                disconnect(e, t) {
                    this.conn &&
                        ((this.conn.onclose = function () {}),
                        e
                            ? this.conn.close(e, null != t ? t : '')
                            : this.conn.close(),
                        (this.conn = null),
                        this.heartbeatTimer &&
                            clearInterval(this.heartbeatTimer),
                        this.reconnectTimer.reset())
                }
                getChannels() {
                    return this.channels
                }
                async removeChannel(e) {
                    const t = await e.unsubscribe()
                    return 0 === this.channels.length && this.disconnect(), t
                }
                async removeAllChannels() {
                    const e = await Promise.all(
                        this.channels.map((e) => e.unsubscribe())
                    )
                    return this.disconnect(), e
                }
                log(e, t, r) {
                    this.logger(e, t, r)
                }
                connectionState() {
                    switch (this.conn && this.conn.readyState) {
                        case y.connecting:
                            return b.Connecting
                        case y.open:
                            return b.Open
                        case y.closing:
                            return b.Closing
                        default:
                            return b.Closed
                    }
                }
                isConnected() {
                    return this.connectionState() === b.Open
                }
                channel(e, t = { config: {} }) {
                    const r = new q(`realtime:${e}`, t, this)
                    return this.channels.push(r), r
                }
                push(e) {
                    const { topic: t, event: r, payload: s, ref: n } = e,
                        i = () => {
                            this.encode(e, (e) => {
                                var t
                                null === (t = this.conn) ||
                                    void 0 === t ||
                                    t.send(e)
                            })
                        }
                    this.log('push', `${t} ${r} (${n})`, s),
                        this.isConnected() ? i() : this.sendBuffer.push(i)
                }
                setAuth(e) {
                    ;(this.accessToken = e),
                        this.channels.forEach((t) => {
                            e && t.updateJoinPayload({ access_token: e }),
                                t.joinedOnce &&
                                    t._isJoined() &&
                                    t._push(v.access_token, { access_token: e })
                        })
                }
                _makeRef() {
                    let e = this.ref + 1
                    return (
                        e === this.ref ? (this.ref = 0) : (this.ref = e),
                        this.ref.toString()
                    )
                }
                _leaveOpenTopic(e) {
                    let t = this.channels.find(
                        (t) =>
                            t.topic === e && (t._isJoined() || t._isJoining())
                    )
                    t &&
                        (this.log(
                            'transport',
                            `leaving duplicate topic "${e}"`
                        ),
                        t.unsubscribe())
                }
                _remove(e) {
                    this.channels = this.channels.filter(
                        (t) => t._joinRef() !== e._joinRef()
                    )
                }
                setupConnection() {
                    this.conn &&
                        ((this.conn.binaryType = 'arraybuffer'),
                        (this.conn.onopen = () => this._onConnOpen()),
                        (this.conn.onerror = (e) => this._onConnError(e)),
                        (this.conn.onmessage = (e) => this._onConnMessage(e)),
                        (this.conn.onclose = (e) => this._onConnClose(e)))
                }
                _endPointURL() {
                    return this._appendParams(
                        this.endPoint,
                        Object.assign({}, this.params, { vsn: '1.0.0' })
                    )
                }
                _onConnMessage(e) {
                    this.decode(e.data, (e) => {
                        let { topic: t, event: r, payload: s, ref: n } = e
                        ;((n && n === this.pendingHeartbeatRef) ||
                            r === (null == s ? void 0 : s.type)) &&
                            (this.pendingHeartbeatRef = null),
                            this.log(
                                'receive',
                                `${s.status || ''} ${t} ${r} ${(n && '(' + n + ')') || ''}`,
                                s
                            ),
                            this.channels
                                .filter((e) => e._isMember(t))
                                .forEach((e) => e._trigger(r, s, n)),
                            this.stateChangeCallbacks.message.forEach((t) =>
                                t(e)
                            )
                    })
                }
                _onConnOpen() {
                    this.log(
                        'transport',
                        `connected to ${this._endPointURL()}`
                    ),
                        this._flushSendBuffer(),
                        this.reconnectTimer.reset(),
                        this.heartbeatTimer &&
                            clearInterval(this.heartbeatTimer),
                        (this.heartbeatTimer = setInterval(
                            () => this._sendHeartbeat(),
                            this.heartbeatIntervalMs
                        )),
                        this.stateChangeCallbacks.open.forEach((e) => e())
                }
                _onConnClose(e) {
                    this.log('transport', 'close', e),
                        this._triggerChanError(),
                        this.heartbeatTimer &&
                            clearInterval(this.heartbeatTimer),
                        this.reconnectTimer.scheduleTimeout(),
                        this.stateChangeCallbacks.close.forEach((t) => t(e))
                }
                _onConnError(e) {
                    this.log('transport', e.message),
                        this._triggerChanError(),
                        this.stateChangeCallbacks.error.forEach((t) => t(e))
                }
                _triggerChanError() {
                    this.channels.forEach((e) => e._trigger(v.error))
                }
                _appendParams(e, t) {
                    if (0 === Object.keys(t).length) return e
                    const r = e.match(/\?/) ? '&' : '?'
                    return `${e}${r}${new URLSearchParams(t)}`
                }
                _flushSendBuffer() {
                    this.isConnected() &&
                        this.sendBuffer.length > 0 &&
                        (this.sendBuffer.forEach((e) => e()),
                        (this.sendBuffer = []))
                }
                _sendHeartbeat() {
                    var e
                    if (this.isConnected()) {
                        if (this.pendingHeartbeatRef)
                            return (
                                (this.pendingHeartbeatRef = null),
                                this.log(
                                    'transport',
                                    'heartbeat timeout. Attempting to re-establish connection'
                                ),
                                void (
                                    null === (e = this.conn) ||
                                    void 0 === e ||
                                    e.close(1e3, 'hearbeat timeout')
                                )
                            )
                        ;(this.pendingHeartbeatRef = this._makeRef()),
                            this.push({
                                topic: 'phoenix',
                                event: 'heartbeat',
                                payload: {},
                                ref: this.pendingHeartbeatRef,
                            }),
                            this.setAuth(this.accessToken)
                    }
                }
            }
            class B {
                constructor(e, t, r) {
                    ;(this.binaryType = 'arraybuffer'),
                        (this.onclose = () => {}),
                        (this.onerror = () => {}),
                        (this.onmessage = () => {}),
                        (this.onopen = () => {}),
                        (this.readyState = y.connecting),
                        (this.send = () => {}),
                        (this.url = null),
                        (this.url = e),
                        (this.close = r.close)
                }
            }
            class G extends Error {
                constructor(e) {
                    super(e),
                        (this.__isStorageError = !0),
                        (this.name = 'StorageError')
                }
            }
            function K(e) {
                return (
                    'object' == typeof e &&
                    null !== e &&
                    '__isStorageError' in e
                )
            }
            class H extends G {
                constructor(e, t) {
                    super(e), (this.name = 'StorageApiError'), (this.status = t)
                }
                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status,
                    }
                }
            }
            class V extends G {
                constructor(e, t) {
                    super(e),
                        (this.name = 'StorageUnknownError'),
                        (this.originalError = t)
                }
            }
            const W = (e) => {
                let t
                return (
                    (t =
                        e ||
                        ('undefined' == typeof fetch
                            ? (...e) =>
                                  Promise.resolve()
                                      .then(o.bind(o, 907))
                                      .then(({ default: t }) => t(...e))
                            : fetch)),
                    (...e) => t(...e)
                )
            }
            var Y = function (e, t, r, s) {
                return new (r || (r = Promise))(function (n, i) {
                    function o(e) {
                        try {
                            c(s.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(s.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t
                        e.done
                            ? n(e.value)
                            : ((t = e.value),
                              t instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t)
                                    })).then(o, a)
                    }
                    c((s = s.apply(e, t || [])).next())
                })
            }
            const X = (e) =>
                    e.msg ||
                    e.message ||
                    e.error_description ||
                    e.error ||
                    JSON.stringify(e),
                Z = (e, t) =>
                    Y(void 0, void 0, void 0, function* () {
                        const r = yield ((s = void 0),
                        (n = void 0),
                        (i = void 0),
                        (a = function* () {
                            return 'undefined' == typeof Response
                                ? (yield Promise.resolve().then(o.bind(o, 907)))
                                      .Response
                                : Response
                        }),
                        new (i || (i = Promise))(function (e, t) {
                            function r(e) {
                                try {
                                    c(a.next(e))
                                } catch (e) {
                                    t(e)
                                }
                            }
                            function o(e) {
                                try {
                                    c(a.throw(e))
                                } catch (e) {
                                    t(e)
                                }
                            }
                            function c(t) {
                                var s
                                t.done
                                    ? e(t.value)
                                    : ((s = t.value),
                                      s instanceof i
                                          ? s
                                          : new i(function (e) {
                                                e(s)
                                            })).then(r, o)
                            }
                            c((a = a.apply(s, n || [])).next())
                        }))
                        var s, n, i, a
                        e instanceof r
                            ? e
                                  .json()
                                  .then((r) => {
                                      t(new H(X(r), e.status || 500))
                                  })
                                  .catch((e) => {
                                      t(new V(X(e), e))
                                  })
                            : t(new V(X(e), e))
                    }),
                Q = (e, t, r, s) => {
                    const n = {
                        method: e,
                        headers: (null == t ? void 0 : t.headers) || {},
                    }
                    return 'GET' === e
                        ? n
                        : ((n.headers = Object.assign(
                              { 'Content-Type': 'application/json' },
                              null == t ? void 0 : t.headers
                          )),
                          (n.body = JSON.stringify(s)),
                          Object.assign(Object.assign({}, n), r))
                }
            function ee(e, t, r, s, n, i) {
                return Y(this, void 0, void 0, function* () {
                    return new Promise((o, a) => {
                        e(r, Q(t, s, n, i))
                            .then((e) => {
                                if (!e.ok) throw e
                                return (null == s ? void 0 : s.noResolveJson)
                                    ? e
                                    : e.json()
                            })
                            .then((e) => o(e))
                            .catch((e) => Z(e, a))
                    })
                })
            }
            function te(e, t, r, s) {
                return Y(this, void 0, void 0, function* () {
                    return ee(e, 'GET', t, r, s)
                })
            }
            function re(e, t, r, s, n) {
                return Y(this, void 0, void 0, function* () {
                    return ee(e, 'POST', t, s, n, r)
                })
            }
            function se(e, t, r, s, n) {
                return Y(this, void 0, void 0, function* () {
                    return ee(e, 'DELETE', t, s, n, r)
                })
            }
            var ne = function (e, t, r, s) {
                return new (r || (r = Promise))(function (n, i) {
                    function o(e) {
                        try {
                            c(s.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(s.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t
                        e.done
                            ? n(e.value)
                            : ((t = e.value),
                              t instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t)
                                    })).then(o, a)
                    }
                    c((s = s.apply(e, t || [])).next())
                })
            }
            const ie = {
                    limit: 100,
                    offset: 0,
                    sortBy: { column: 'name', order: 'asc' },
                },
                oe = {
                    cacheControl: '3600',
                    contentType: 'text/plain;charset=UTF-8',
                    upsert: !1,
                }
            class ae {
                constructor(e, t = {}, r, s) {
                    ;(this.url = e),
                        (this.headers = t),
                        (this.bucketId = r),
                        (this.fetch = W(s))
                }
                uploadOrUpdate(e, t, r, s) {
                    return ne(this, void 0, void 0, function* () {
                        try {
                            let n
                            const i = Object.assign(Object.assign({}, oe), s),
                                o = Object.assign(
                                    Object.assign({}, this.headers),
                                    'POST' === e && {
                                        'x-upsert': String(i.upsert),
                                    }
                                )
                            'undefined' != typeof Blob && r instanceof Blob
                                ? ((n = new FormData()),
                                  n.append('cacheControl', i.cacheControl),
                                  n.append('', r))
                                : 'undefined' != typeof FormData &&
                                    r instanceof FormData
                                  ? ((n = r),
                                    n.append('cacheControl', i.cacheControl))
                                  : ((n = r),
                                    (o['cache-control'] =
                                        `max-age=${i.cacheControl}`),
                                    (o['content-type'] = i.contentType))
                            const a = this._removeEmptyFolders(t),
                                c = this._getFinalPath(a),
                                h = yield this.fetch(
                                    `${this.url}/object/${c}`,
                                    Object.assign(
                                        { method: e, body: n, headers: o },
                                        (null == i ? void 0 : i.duplex)
                                            ? { duplex: i.duplex }
                                            : {}
                                    )
                                ),
                                l = yield h.json()
                            return h.ok
                                ? {
                                      data: {
                                          path: a,
                                          id: l.Id,
                                          fullPath: l.Key,
                                      },
                                      error: null,
                                  }
                                : { data: null, error: l }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                upload(e, t, r) {
                    return ne(this, void 0, void 0, function* () {
                        return this.uploadOrUpdate('POST', e, t, r)
                    })
                }
                uploadToSignedUrl(e, t, r, s) {
                    return ne(this, void 0, void 0, function* () {
                        const n = this._removeEmptyFolders(e),
                            i = this._getFinalPath(n),
                            o = new URL(this.url + `/object/upload/sign/${i}`)
                        o.searchParams.set('token', t)
                        try {
                            let e
                            const t = Object.assign({ upsert: oe.upsert }, s),
                                i = Object.assign(
                                    Object.assign({}, this.headers),
                                    { 'x-upsert': String(t.upsert) }
                                )
                            'undefined' != typeof Blob && r instanceof Blob
                                ? ((e = new FormData()),
                                  e.append('cacheControl', t.cacheControl),
                                  e.append('', r))
                                : 'undefined' != typeof FormData &&
                                    r instanceof FormData
                                  ? ((e = r),
                                    e.append('cacheControl', t.cacheControl))
                                  : ((e = r),
                                    (i['cache-control'] =
                                        `max-age=${t.cacheControl}`),
                                    (i['content-type'] = t.contentType))
                            const a = yield this.fetch(o.toString(), {
                                    method: 'PUT',
                                    body: e,
                                    headers: i,
                                }),
                                c = yield a.json()
                            return a.ok
                                ? {
                                      data: { path: n, fullPath: c.Key },
                                      error: null,
                                  }
                                : { data: null, error: c }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                createSignedUploadUrl(e) {
                    return ne(this, void 0, void 0, function* () {
                        try {
                            let t = this._getFinalPath(e)
                            const r = yield re(
                                    this.fetch,
                                    `${this.url}/object/upload/sign/${t}`,
                                    {},
                                    { headers: this.headers }
                                ),
                                s = new URL(this.url + r.url),
                                n = s.searchParams.get('token')
                            if (!n) throw new G('No token returned by API')
                            return {
                                data: {
                                    signedUrl: s.toString(),
                                    path: e,
                                    token: n,
                                },
                                error: null,
                            }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                update(e, t, r) {
                    return ne(this, void 0, void 0, function* () {
                        return this.uploadOrUpdate('PUT', e, t, r)
                    })
                }
                move(e, t) {
                    return ne(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield re(
                                    this.fetch,
                                    `${this.url}/object/move`,
                                    {
                                        bucketId: this.bucketId,
                                        sourceKey: e,
                                        destinationKey: t,
                                    },
                                    { headers: this.headers }
                                ),
                                error: null,
                            }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                copy(e, t) {
                    return ne(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: {
                                    path: (yield re(
                                        this.fetch,
                                        `${this.url}/object/copy`,
                                        {
                                            bucketId: this.bucketId,
                                            sourceKey: e,
                                            destinationKey: t,
                                        },
                                        { headers: this.headers }
                                    )).Key,
                                },
                                error: null,
                            }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                createSignedUrl(e, t, r) {
                    return ne(this, void 0, void 0, function* () {
                        try {
                            let s = this._getFinalPath(e),
                                n = yield re(
                                    this.fetch,
                                    `${this.url}/object/sign/${s}`,
                                    Object.assign(
                                        { expiresIn: t },
                                        (null == r ? void 0 : r.transform)
                                            ? { transform: r.transform }
                                            : {}
                                    ),
                                    { headers: this.headers }
                                )
                            const i = (null == r ? void 0 : r.download)
                                ? `&download=${!0 === r.download ? '' : r.download}`
                                : ''
                            return (
                                (n = {
                                    signedUrl: encodeURI(
                                        `${this.url}${n.signedURL}${i}`
                                    ),
                                }),
                                { data: n, error: null }
                            )
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                createSignedUrls(e, t, r) {
                    return ne(this, void 0, void 0, function* () {
                        try {
                            const s = yield re(
                                    this.fetch,
                                    `${this.url}/object/sign/${this.bucketId}`,
                                    { expiresIn: t, paths: e },
                                    { headers: this.headers }
                                ),
                                n = (null == r ? void 0 : r.download)
                                    ? `&download=${!0 === r.download ? '' : r.download}`
                                    : ''
                            return {
                                data: s.map((e) =>
                                    Object.assign(Object.assign({}, e), {
                                        signedUrl: e.signedURL
                                            ? encodeURI(
                                                  `${this.url}${e.signedURL}${n}`
                                              )
                                            : null,
                                    })
                                ),
                                error: null,
                            }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                download(e, t) {
                    return ne(this, void 0, void 0, function* () {
                        const r =
                                void 0 !== (null == t ? void 0 : t.transform)
                                    ? 'render/image/authenticated'
                                    : 'object',
                            s = this.transformOptsToQueryString(
                                (null == t ? void 0 : t.transform) || {}
                            ),
                            n = s ? `?${s}` : ''
                        try {
                            const t = this._getFinalPath(e),
                                s = yield te(
                                    this.fetch,
                                    `${this.url}/${r}/${t}${n}`,
                                    { headers: this.headers, noResolveJson: !0 }
                                )
                            return { data: yield s.blob(), error: null }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                getPublicUrl(e, t) {
                    const r = this._getFinalPath(e),
                        s = [],
                        n = (null == t ? void 0 : t.download)
                            ? `download=${!0 === t.download ? '' : t.download}`
                            : ''
                    '' !== n && s.push(n)
                    const i =
                            void 0 !== (null == t ? void 0 : t.transform)
                                ? 'render/image'
                                : 'object',
                        o = this.transformOptsToQueryString(
                            (null == t ? void 0 : t.transform) || {}
                        )
                    '' !== o && s.push(o)
                    let a = s.join('&')
                    return (
                        '' !== a && (a = `?${a}`),
                        {
                            data: {
                                publicUrl: encodeURI(
                                    `${this.url}/${i}/public/${r}${a}`
                                ),
                            },
                        }
                    )
                }
                remove(e) {
                    return ne(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield se(
                                    this.fetch,
                                    `${this.url}/object/${this.bucketId}`,
                                    { prefixes: e },
                                    { headers: this.headers }
                                ),
                                error: null,
                            }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                list(e, t, r) {
                    return ne(this, void 0, void 0, function* () {
                        try {
                            const s = Object.assign(
                                Object.assign(Object.assign({}, ie), t),
                                { prefix: e || '' }
                            )
                            return {
                                data: yield re(
                                    this.fetch,
                                    `${this.url}/object/list/${this.bucketId}`,
                                    s,
                                    { headers: this.headers },
                                    r
                                ),
                                error: null,
                            }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                _getFinalPath(e) {
                    return `${this.bucketId}/${e}`
                }
                _removeEmptyFolders(e) {
                    return e.replace(/^\/|\/$/g, '').replace(/\/+/g, '/')
                }
                transformOptsToQueryString(e) {
                    const t = []
                    return (
                        e.width && t.push(`width=${e.width}`),
                        e.height && t.push(`height=${e.height}`),
                        e.resize && t.push(`resize=${e.resize}`),
                        e.format && t.push(`format=${e.format}`),
                        e.quality && t.push(`quality=${e.quality}`),
                        t.join('&')
                    )
                }
            }
            const ce = { 'X-Client-Info': 'storage-js/2.5.5' }
            var he = function (e, t, r, s) {
                return new (r || (r = Promise))(function (n, i) {
                    function o(e) {
                        try {
                            c(s.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(s.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t
                        e.done
                            ? n(e.value)
                            : ((t = e.value),
                              t instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t)
                                    })).then(o, a)
                    }
                    c((s = s.apply(e, t || [])).next())
                })
            }
            class le {
                constructor(e, t = {}, r) {
                    ;(this.url = e),
                        (this.headers = Object.assign(
                            Object.assign({}, ce),
                            t
                        )),
                        (this.fetch = W(r))
                }
                listBuckets() {
                    return he(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield te(
                                    this.fetch,
                                    `${this.url}/bucket`,
                                    { headers: this.headers }
                                ),
                                error: null,
                            }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                getBucket(e) {
                    return he(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield te(
                                    this.fetch,
                                    `${this.url}/bucket/${e}`,
                                    { headers: this.headers }
                                ),
                                error: null,
                            }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                createBucket(e, t = { public: !1 }) {
                    return he(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield re(
                                    this.fetch,
                                    `${this.url}/bucket`,
                                    {
                                        id: e,
                                        name: e,
                                        public: t.public,
                                        file_size_limit: t.fileSizeLimit,
                                        allowed_mime_types: t.allowedMimeTypes,
                                    },
                                    { headers: this.headers }
                                ),
                                error: null,
                            }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                updateBucket(e, t) {
                    return he(this, void 0, void 0, function* () {
                        try {
                            const r = yield (function (e, t, r, s, n) {
                                return Y(this, void 0, void 0, function* () {
                                    return ee(e, 'PUT', t, s, undefined, r)
                                })
                            })(
                                this.fetch,
                                `${this.url}/bucket/${e}`,
                                {
                                    id: e,
                                    name: e,
                                    public: t.public,
                                    file_size_limit: t.fileSizeLimit,
                                    allowed_mime_types: t.allowedMimeTypes,
                                },
                                { headers: this.headers }
                            )
                            return { data: r, error: null }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                emptyBucket(e) {
                    return he(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield re(
                                    this.fetch,
                                    `${this.url}/bucket/${e}/empty`,
                                    {},
                                    { headers: this.headers }
                                ),
                                error: null,
                            }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                deleteBucket(e) {
                    return he(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield se(
                                    this.fetch,
                                    `${this.url}/bucket/${e}`,
                                    {},
                                    { headers: this.headers }
                                ),
                                error: null,
                            }
                        } catch (e) {
                            if (K(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
            }
            class ue extends le {
                constructor(e, t = {}, r) {
                    super(e, t, r)
                }
                from(e) {
                    return new ae(this.url, this.headers, e, this.fetch)
                }
            }
            let de = ''
            de =
                'undefined' != typeof Deno
                    ? 'deno'
                    : 'undefined' != typeof document
                      ? 'web'
                      : 'undefined' != typeof navigator &&
                          'ReactNative' === navigator.product
                        ? 'react-native'
                        : 'node'
            const fe = {
                    headers: { 'X-Client-Info': `supabase-js-${de}/2.43.0` },
                },
                pe = { schema: 'public' },
                ge = {
                    autoRefreshToken: !0,
                    persistSession: !0,
                    detectSessionInUrl: !0,
                    flowType: 'implicit',
                },
                ye = {}
            const me = (e) => {
                    let t
                    return (
                        (t =
                            e ||
                            ('undefined' == typeof fetch ? a.default : fetch)),
                        (...e) => t(...e)
                    )
                },
                ve = (e, t, r) => {
                    const s = me(r),
                        n = 'undefined' == typeof Headers ? a.Headers : Headers
                    return (r, i) => {
                        return (
                            (o = void 0),
                            (a = void 0),
                            (h = function* () {
                                var o
                                const a =
                                    null !== (o = yield t()) && void 0 !== o
                                        ? o
                                        : e
                                let c = new n(null == i ? void 0 : i.headers)
                                return (
                                    c.has('apikey') || c.set('apikey', e),
                                    c.has('Authorization') ||
                                        c.set('Authorization', `Bearer ${a}`),
                                    s(
                                        r,
                                        Object.assign(Object.assign({}, i), {
                                            headers: c,
                                        })
                                    )
                                )
                            }),
                            new ((c = void 0) || (c = Promise))(function (
                                e,
                                t
                            ) {
                                function r(e) {
                                    try {
                                        n(h.next(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }
                                function s(e) {
                                    try {
                                        n(h.throw(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }
                                function n(t) {
                                    var n
                                    t.done
                                        ? e(t.value)
                                        : ((n = t.value),
                                          n instanceof c
                                              ? n
                                              : new c(function (e) {
                                                    e(n)
                                                })).then(r, s)
                                }
                                n((h = h.apply(o, a || [])).next())
                            })
                        )
                        var o, a, c, h
                    }
                },
                we = '2.64.1',
                be = { 'X-Client-Info': `gotrue-js/${we}` },
                _e = 'X-Supabase-Api-Version',
                ke = {
                    '2024-01-01': {
                        timestamp: Date.parse('2024-01-01T00:00:00.0Z'),
                        name: '2024-01-01',
                    },
                },
                Se = () => 'undefined' != typeof document,
                Te = { tested: !1, writable: !1 },
                je = () => {
                    if (!Se()) return !1
                    try {
                        if ('object' != typeof globalThis.localStorage)
                            return !1
                    } catch (e) {
                        return !1
                    }
                    if (Te.tested) return Te.writable
                    const e = `lswt-${Math.random()}${Math.random()}`
                    try {
                        globalThis.localStorage.setItem(e, e),
                            globalThis.localStorage.removeItem(e),
                            (Te.tested = !0),
                            (Te.writable = !0)
                    } catch (e) {
                        ;(Te.tested = !0), (Te.writable = !1)
                    }
                    return Te.writable
                }
            function Oe(e) {
                const t = {},
                    r = new URL(e)
                if (r.hash && '#' === r.hash[0])
                    try {
                        new URLSearchParams(r.hash.substring(1)).forEach(
                            (e, r) => {
                                t[r] = e
                            }
                        )
                    } catch (e) {}
                return (
                    r.searchParams.forEach((e, r) => {
                        t[r] = e
                    }),
                    t
                )
            }
            const Ee = (e) => {
                    let t
                    return (
                        (t =
                            e ||
                            ('undefined' == typeof fetch
                                ? (...e) =>
                                      Promise.resolve()
                                          .then(o.bind(o, 907))
                                          .then(({ default: t }) => t(...e))
                                : fetch)),
                        (...e) => t(...e)
                    )
                },
                Pe = (e) =>
                    'object' == typeof e &&
                    null !== e &&
                    'status' in e &&
                    'ok' in e &&
                    'json' in e &&
                    'function' == typeof e.json,
                $e = async (e, t, r) => {
                    await e.setItem(t, JSON.stringify(r))
                },
                xe = async (e, t) => {
                    const r = await e.getItem(t)
                    if (!r) return null
                    try {
                        return JSON.parse(r)
                    } catch (e) {
                        return r
                    }
                },
                Ae = async (e, t) => {
                    await e.removeItem(t)
                }
            class Ce {
                constructor() {
                    this.promise = new Ce.promiseConstructor((e, t) => {
                        ;(this.resolve = e), (this.reject = t)
                    })
                }
            }
            function Re(e) {
                const t = e.split('.')
                if (3 !== t.length)
                    throw new Error('JWT is not valid: not a JWT structure')
                if (
                    !/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
                        t[1]
                    )
                )
                    throw new Error(
                        'JWT is not valid: payload is not in base64url format'
                    )
                const r = t[1]
                return JSON.parse(
                    (function (e) {
                        const t =
                            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
                        let r,
                            s,
                            n,
                            i,
                            o,
                            a,
                            c,
                            h = '',
                            l = 0
                        for (
                            e = e.replace('-', '+').replace('_', '/');
                            l < e.length;

                        )
                            (i = t.indexOf(e.charAt(l++))),
                                (o = t.indexOf(e.charAt(l++))),
                                (a = t.indexOf(e.charAt(l++))),
                                (c = t.indexOf(e.charAt(l++))),
                                (r = (i << 2) | (o >> 4)),
                                (s = ((15 & o) << 4) | (a >> 2)),
                                (n = ((3 & a) << 6) | c),
                                (h += String.fromCharCode(r)),
                                64 != a &&
                                    0 != s &&
                                    (h += String.fromCharCode(s)),
                                64 != c &&
                                    0 != n &&
                                    (h += String.fromCharCode(n))
                        return h
                    })(r)
                )
            }
            function Ie(e) {
                return ('0' + e.toString(16)).substr(-2)
            }
            async function Le(e, t, r = !1) {
                const s = (function () {
                    const e = new Uint32Array(56)
                    if ('undefined' == typeof crypto) {
                        const e =
                                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~',
                            t = e.length
                        let r = ''
                        for (let s = 0; s < 56; s++)
                            r += e.charAt(Math.floor(Math.random() * t))
                        return r
                    }
                    return crypto.getRandomValues(e), Array.from(e, Ie).join('')
                })()
                let n = s
                r && (n += '/PASSWORD_RECOVERY'),
                    await $e(e, `${t}-code-verifier`, n)
                const i = await (async function (e) {
                    if (
                        'undefined' == typeof crypto ||
                        void 0 === crypto.subtle ||
                        'undefined' == typeof TextEncoder
                    )
                        return (
                            console.warn(
                                'WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.'
                            ),
                            e
                        )
                    const t = await (async function (e) {
                        const t = new TextEncoder().encode(e),
                            r = await crypto.subtle.digest('SHA-256', t),
                            s = new Uint8Array(r)
                        return Array.from(s)
                            .map((e) => String.fromCharCode(e))
                            .join('')
                    })(e)
                    return btoa(t)
                        .replace(/\+/g, '-')
                        .replace(/\//g, '_')
                        .replace(/=+$/, '')
                })(s)
                return [i, s === i ? 'plain' : 's256']
            }
            Ce.promiseConstructor = Promise
            const Ue =
                /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i
            class Ne extends Error {
                constructor(e, t, r) {
                    super(e),
                        (this.__isAuthError = !0),
                        (this.name = 'AuthError'),
                        (this.status = t),
                        (this.code = r)
                }
            }
            function De(e) {
                return (
                    'object' == typeof e && null !== e && '__isAuthError' in e
                )
            }
            class Fe extends Ne {
                constructor(e, t, r) {
                    super(e, t, r),
                        (this.name = 'AuthApiError'),
                        (this.status = t),
                        (this.code = r)
                }
            }
            class qe extends Ne {
                constructor(e, t) {
                    super(e),
                        (this.name = 'AuthUnknownError'),
                        (this.originalError = t)
                }
            }
            class Me extends Ne {
                constructor(e, t, r, s) {
                    super(e, r, s), (this.name = t), (this.status = r)
                }
            }
            class ze extends Me {
                constructor() {
                    super(
                        'Auth session missing!',
                        'AuthSessionMissingError',
                        400,
                        void 0
                    )
                }
            }
            class Je extends Me {
                constructor() {
                    super(
                        'Auth session or user missing',
                        'AuthInvalidTokenResponseError',
                        500,
                        void 0
                    )
                }
            }
            class Be extends Me {
                constructor(e) {
                    super(e, 'AuthInvalidCredentialsError', 400, void 0)
                }
            }
            class Ge extends Me {
                constructor(e, t = null) {
                    super(e, 'AuthImplicitGrantRedirectError', 500, void 0),
                        (this.details = null),
                        (this.details = t)
                }
                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status,
                        details: this.details,
                    }
                }
            }
            class Ke extends Me {
                constructor(e, t = null) {
                    super(e, 'AuthPKCEGrantCodeExchangeError', 500, void 0),
                        (this.details = null),
                        (this.details = t)
                }
                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status,
                        details: this.details,
                    }
                }
            }
            class He extends Me {
                constructor(e, t) {
                    super(e, 'AuthRetryableFetchError', t, void 0)
                }
            }
            function Ve(e) {
                return De(e) && 'AuthRetryableFetchError' === e.name
            }
            class We extends Me {
                constructor(e, t, r) {
                    super(e, 'AuthWeakPasswordError', t, 'weak_password'),
                        (this.reasons = r)
                }
            }
            const Ye = (e) =>
                    e.msg ||
                    e.message ||
                    e.error_description ||
                    e.error ||
                    JSON.stringify(e),
                Xe = [502, 503, 504]
            async function Ze(e) {
                var t
                if (!Pe(e)) throw new He(Ye(e), 0)
                if (Xe.includes(e.status)) throw new He(Ye(e), e.status)
                let r, s
                try {
                    r = await e.json()
                } catch (e) {
                    throw new qe(Ye(e), e)
                }
                const n = (function (e) {
                    const t = e.headers.get(_e)
                    if (!t) return null
                    if (!t.match(Ue)) return null
                    try {
                        return new Date(`${t}T00:00:00.0Z`)
                    } catch (e) {
                        return null
                    }
                })(e)
                if (
                    (n &&
                    n.getTime() >= ke['2024-01-01'].timestamp &&
                    'object' == typeof r &&
                    r &&
                    'string' == typeof r.code
                        ? (s = r.code)
                        : 'object' == typeof r &&
                          r &&
                          'string' == typeof r.error_code &&
                          (s = r.error_code),
                    s)
                ) {
                    if ('weak_password' === s)
                        throw new We(
                            Ye(r),
                            e.status,
                            (null === (t = r.weak_password) || void 0 === t
                                ? void 0
                                : t.reasons) || []
                        )
                } else if (
                    'object' == typeof r &&
                    r &&
                    'object' == typeof r.weak_password &&
                    r.weak_password &&
                    Array.isArray(r.weak_password.reasons) &&
                    r.weak_password.reasons.length &&
                    r.weak_password.reasons.reduce(
                        (e, t) => e && 'string' == typeof t,
                        !0
                    )
                )
                    throw new We(Ye(r), e.status, r.weak_password.reasons)
                throw new Fe(Ye(r), e.status || 500, s)
            }
            async function Qe(e, t, r, s) {
                var n
                const i = Object.assign({}, null == s ? void 0 : s.headers)
                i[_e] || (i[_e] = ke['2024-01-01'].name),
                    (null == s ? void 0 : s.jwt) &&
                        (i.Authorization = `Bearer ${s.jwt}`)
                const o =
                    null !== (n = null == s ? void 0 : s.query) && void 0 !== n
                        ? n
                        : {}
                ;(null == s ? void 0 : s.redirectTo) &&
                    (o.redirect_to = s.redirectTo)
                const a = Object.keys(o).length
                        ? '?' + new URLSearchParams(o).toString()
                        : '',
                    c = await (async function (e, t, r, s, n, i) {
                        const o = ((e, t, r, s) => {
                            const n = {
                                method: e,
                                headers: (null == t ? void 0 : t.headers) || {},
                            }
                            return 'GET' === e
                                ? n
                                : ((n.headers = Object.assign(
                                      {
                                          'Content-Type':
                                              'application/json;charset=UTF-8',
                                      },
                                      null == t ? void 0 : t.headers
                                  )),
                                  (n.body = JSON.stringify(s)),
                                  Object.assign(Object.assign({}, n), r))
                        })(t, s, {}, i)
                        let a
                        try {
                            a = await e(r, Object.assign({}, o))
                        } catch (e) {
                            throw (console.error(e), new He(Ye(e), 0))
                        }
                        if (
                            (a.ok || (await Ze(a)),
                            null == s ? void 0 : s.noResolveJson)
                        )
                            return a
                        try {
                            return await a.json()
                        } catch (e) {
                            await Ze(e)
                        }
                    })(
                        e,
                        t,
                        r + a,
                        {
                            headers: i,
                            noResolveJson: null == s ? void 0 : s.noResolveJson,
                        },
                        0,
                        null == s ? void 0 : s.body
                    )
                return (null == s ? void 0 : s.xform)
                    ? null == s
                        ? void 0
                        : s.xform(c)
                    : { data: Object.assign({}, c), error: null }
            }
            function et(e) {
                var t
                let r = null
                var s
                return (
                    (function (e) {
                        return e.access_token && e.refresh_token && e.expires_in
                    })(e) &&
                        ((r = Object.assign({}, e)),
                        e.expires_at ||
                            (r.expires_at =
                                ((s = e.expires_in),
                                Math.round(Date.now() / 1e3) + s))),
                    {
                        data: {
                            session: r,
                            user: null !== (t = e.user) && void 0 !== t ? t : e,
                        },
                        error: null,
                    }
                )
            }
            function tt(e) {
                const t = et(e)
                return (
                    !t.error &&
                        e.weak_password &&
                        'object' == typeof e.weak_password &&
                        Array.isArray(e.weak_password.reasons) &&
                        e.weak_password.reasons.length &&
                        e.weak_password.message &&
                        'string' == typeof e.weak_password.message &&
                        e.weak_password.reasons.reduce(
                            (e, t) => e && 'string' == typeof t,
                            !0
                        ) &&
                        (t.data.weak_password = e.weak_password),
                    t
                )
            }
            function rt(e) {
                var t
                return {
                    data: {
                        user: null !== (t = e.user) && void 0 !== t ? t : e,
                    },
                    error: null,
                }
            }
            function st(e) {
                return { data: e, error: null }
            }
            function nt(e) {
                const {
                        action_link: t,
                        email_otp: r,
                        hashed_token: s,
                        redirect_to: n,
                        verification_type: i,
                    } = e,
                    o = (function (e, t) {
                        var r = {}
                        for (var s in e)
                            Object.prototype.hasOwnProperty.call(e, s) &&
                                t.indexOf(s) < 0 &&
                                (r[s] = e[s])
                        if (
                            null != e &&
                            'function' == typeof Object.getOwnPropertySymbols
                        ) {
                            var n = 0
                            for (
                                s = Object.getOwnPropertySymbols(e);
                                n < s.length;
                                n++
                            )
                                t.indexOf(s[n]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(
                                        e,
                                        s[n]
                                    ) &&
                                    (r[s[n]] = e[s[n]])
                        }
                        return r
                    })(e, [
                        'action_link',
                        'email_otp',
                        'hashed_token',
                        'redirect_to',
                        'verification_type',
                    ])
                return {
                    data: {
                        properties: {
                            action_link: t,
                            email_otp: r,
                            hashed_token: s,
                            redirect_to: n,
                            verification_type: i,
                        },
                        user: Object.assign({}, o),
                    },
                    error: null,
                }
            }
            function it(e) {
                return e
            }
            class ot {
                constructor({ url: e = '', headers: t = {}, fetch: r }) {
                    ;(this.url = e),
                        (this.headers = t),
                        (this.fetch = Ee(r)),
                        (this.mfa = {
                            listFactors: this._listFactors.bind(this),
                            deleteFactor: this._deleteFactor.bind(this),
                        })
                }
                async signOut(e, t = 'global') {
                    try {
                        return (
                            await Qe(
                                this.fetch,
                                'POST',
                                `${this.url}/logout?scope=${t}`,
                                {
                                    headers: this.headers,
                                    jwt: e,
                                    noResolveJson: !0,
                                }
                            ),
                            { data: null, error: null }
                        )
                    } catch (e) {
                        if (De(e)) return { data: null, error: e }
                        throw e
                    }
                }
                async inviteUserByEmail(e, t = {}) {
                    try {
                        return await Qe(
                            this.fetch,
                            'POST',
                            `${this.url}/invite`,
                            {
                                body: { email: e, data: t.data },
                                headers: this.headers,
                                redirectTo: t.redirectTo,
                                xform: rt,
                            }
                        )
                    } catch (e) {
                        if (De(e)) return { data: { user: null }, error: e }
                        throw e
                    }
                }
                async generateLink(e) {
                    try {
                        const { options: t } = e,
                            r = (function (e, t) {
                                var r = {}
                                for (var s in e)
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        s
                                    ) &&
                                        t.indexOf(s) < 0 &&
                                        (r[s] = e[s])
                                if (
                                    null != e &&
                                    'function' ==
                                        typeof Object.getOwnPropertySymbols
                                ) {
                                    var n = 0
                                    for (
                                        s = Object.getOwnPropertySymbols(e);
                                        n < s.length;
                                        n++
                                    )
                                        t.indexOf(s[n]) < 0 &&
                                            Object.prototype.propertyIsEnumerable.call(
                                                e,
                                                s[n]
                                            ) &&
                                            (r[s[n]] = e[s[n]])
                                }
                                return r
                            })(e, ['options']),
                            s = Object.assign(Object.assign({}, r), t)
                        return (
                            'newEmail' in r &&
                                ((s.new_email =
                                    null == r ? void 0 : r.newEmail),
                                delete s.newEmail),
                            await Qe(
                                this.fetch,
                                'POST',
                                `${this.url}/admin/generate_link`,
                                {
                                    body: s,
                                    headers: this.headers,
                                    xform: nt,
                                    redirectTo:
                                        null == t ? void 0 : t.redirectTo,
                                }
                            )
                        )
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { properties: null, user: null },
                                error: e,
                            }
                        throw e
                    }
                }
                async createUser(e) {
                    try {
                        return await Qe(
                            this.fetch,
                            'POST',
                            `${this.url}/admin/users`,
                            { body: e, headers: this.headers, xform: rt }
                        )
                    } catch (e) {
                        if (De(e)) return { data: { user: null }, error: e }
                        throw e
                    }
                }
                async listUsers(e) {
                    var t, r, s, n, i, o, a
                    try {
                        const c = { nextPage: null, lastPage: 0, total: 0 },
                            h = await Qe(
                                this.fetch,
                                'GET',
                                `${this.url}/admin/users`,
                                {
                                    headers: this.headers,
                                    noResolveJson: !0,
                                    query: {
                                        page:
                                            null !==
                                                (r =
                                                    null ===
                                                        (t =
                                                            null == e
                                                                ? void 0
                                                                : e.page) ||
                                                    void 0 === t
                                                        ? void 0
                                                        : t.toString()) &&
                                            void 0 !== r
                                                ? r
                                                : '',
                                        per_page:
                                            null !==
                                                (n =
                                                    null ===
                                                        (s =
                                                            null == e
                                                                ? void 0
                                                                : e.perPage) ||
                                                    void 0 === s
                                                        ? void 0
                                                        : s.toString()) &&
                                            void 0 !== n
                                                ? n
                                                : '',
                                    },
                                    xform: it,
                                }
                            )
                        if (h.error) throw h.error
                        const l = await h.json(),
                            u =
                                null !== (i = h.headers.get('x-total-count')) &&
                                void 0 !== i
                                    ? i
                                    : 0,
                            d =
                                null !==
                                    (a =
                                        null === (o = h.headers.get('link')) ||
                                        void 0 === o
                                            ? void 0
                                            : o.split(',')) && void 0 !== a
                                    ? a
                                    : []
                        return (
                            d.length > 0 &&
                                (d.forEach((e) => {
                                    const t = parseInt(
                                            e
                                                .split(';')[0]
                                                .split('=')[1]
                                                .substring(0, 1)
                                        ),
                                        r = JSON.parse(
                                            e.split(';')[1].split('=')[1]
                                        )
                                    c[`${r}Page`] = t
                                }),
                                (c.total = parseInt(u))),
                            {
                                data: Object.assign(Object.assign({}, l), c),
                                error: null,
                            }
                        )
                    } catch (e) {
                        if (De(e)) return { data: { users: [] }, error: e }
                        throw e
                    }
                }
                async getUserById(e) {
                    try {
                        return await Qe(
                            this.fetch,
                            'GET',
                            `${this.url}/admin/users/${e}`,
                            { headers: this.headers, xform: rt }
                        )
                    } catch (e) {
                        if (De(e)) return { data: { user: null }, error: e }
                        throw e
                    }
                }
                async updateUserById(e, t) {
                    try {
                        return await Qe(
                            this.fetch,
                            'PUT',
                            `${this.url}/admin/users/${e}`,
                            { body: t, headers: this.headers, xform: rt }
                        )
                    } catch (e) {
                        if (De(e)) return { data: { user: null }, error: e }
                        throw e
                    }
                }
                async deleteUser(e, t = !1) {
                    try {
                        return await Qe(
                            this.fetch,
                            'DELETE',
                            `${this.url}/admin/users/${e}`,
                            {
                                headers: this.headers,
                                body: { should_soft_delete: t },
                                xform: rt,
                            }
                        )
                    } catch (e) {
                        if (De(e)) return { data: { user: null }, error: e }
                        throw e
                    }
                }
                async _listFactors(e) {
                    try {
                        const { data: t, error: r } = await Qe(
                            this.fetch,
                            'GET',
                            `${this.url}/admin/users/${e.userId}/factors`,
                            {
                                headers: this.headers,
                                xform: (e) => ({
                                    data: { factors: e },
                                    error: null,
                                }),
                            }
                        )
                        return { data: t, error: r }
                    } catch (e) {
                        if (De(e)) return { data: null, error: e }
                        throw e
                    }
                }
                async _deleteFactor(e) {
                    try {
                        return {
                            data: await Qe(
                                this.fetch,
                                'DELETE',
                                `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
                                { headers: this.headers }
                            ),
                            error: null,
                        }
                    } catch (e) {
                        if (De(e)) return { data: null, error: e }
                        throw e
                    }
                }
            }
            const at = {
                getItem: (e) =>
                    je() ? globalThis.localStorage.getItem(e) : null,
                setItem: (e, t) => {
                    je() && globalThis.localStorage.setItem(e, t)
                },
                removeItem: (e) => {
                    je() && globalThis.localStorage.removeItem(e)
                },
            }
            function ct(e = {}) {
                return {
                    getItem: (t) => e[t] || null,
                    setItem: (t, r) => {
                        e[t] = r
                    },
                    removeItem: (t) => {
                        delete e[t]
                    },
                }
            }
            const ht = !!(
                globalThis &&
                je() &&
                globalThis.localStorage &&
                'true' ===
                    globalThis.localStorage.getItem(
                        'supabase.gotrue-js.locks.debug'
                    )
            )
            class lt extends Error {
                constructor(e) {
                    super(e), (this.isAcquireTimeout = !0)
                }
            }
            class ut extends lt {}
            async function dt(e, t, r) {
                ht &&
                    console.log(
                        '@supabase/gotrue-js: navigatorLock: acquire lock',
                        e,
                        t
                    )
                const s = new globalThis.AbortController()
                return (
                    t > 0 &&
                        setTimeout(() => {
                            s.abort(),
                                ht &&
                                    console.log(
                                        '@supabase/gotrue-js: navigatorLock acquire timed out',
                                        e
                                    )
                        }, t),
                    await globalThis.navigator.locks.request(
                        e,
                        0 === t
                            ? { mode: 'exclusive', ifAvailable: !0 }
                            : { mode: 'exclusive', signal: s.signal },
                        async (s) => {
                            if (!s) {
                                if (0 === t)
                                    throw (
                                        (ht &&
                                            console.log(
                                                '@supabase/gotrue-js: navigatorLock: not immediately available',
                                                e
                                            ),
                                        new ut(
                                            `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
                                        ))
                                    )
                                if (ht)
                                    try {
                                        const e =
                                            await globalThis.navigator.locks.query()
                                        console.log(
                                            '@supabase/gotrue-js: Navigator LockManager state',
                                            JSON.stringify(e, null, '  ')
                                        )
                                    } catch (e) {
                                        console.warn(
                                            '@supabase/gotrue-js: Error when querying Navigator LockManager state',
                                            e
                                        )
                                    }
                                return (
                                    console.warn(
                                        '@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request'
                                    ),
                                    await r()
                                )
                            }
                            ht &&
                                console.log(
                                    '@supabase/gotrue-js: navigatorLock: acquired',
                                    e,
                                    s.name
                                )
                            try {
                                return await r()
                            } finally {
                                ht &&
                                    console.log(
                                        '@supabase/gotrue-js: navigatorLock: released',
                                        e,
                                        s.name
                                    )
                            }
                        }
                    )
                )
            }
            !(function () {
                if ('object' != typeof globalThis)
                    try {
                        Object.defineProperty(Object.prototype, '__magic__', {
                            get: function () {
                                return this
                            },
                            configurable: !0,
                        }),
                            (__magic__.globalThis = __magic__),
                            delete Object.prototype.__magic__
                    } catch (e) {
                        'undefined' != typeof self && (self.globalThis = self)
                    }
            })()
            const ft = {
                    url: 'http://localhost:9999',
                    storageKey: 'supabase.auth.token',
                    autoRefreshToken: !0,
                    persistSession: !0,
                    detectSessionInUrl: !0,
                    headers: be,
                    flowType: 'implicit',
                    debug: !1,
                    hasCustomAuthorizationHeader: !1,
                },
                pt = 3e4
            async function gt(e, t, r) {
                return await r()
            }
            class yt {
                constructor(e) {
                    var t, r
                    ;(this.memoryStorage = null),
                        (this.stateChangeEmitters = new Map()),
                        (this.autoRefreshTicker = null),
                        (this.visibilityChangedCallback = null),
                        (this.refreshingDeferred = null),
                        (this.initializePromise = null),
                        (this.detectSessionInUrl = !0),
                        (this.hasCustomAuthorizationHeader = !1),
                        (this.lockAcquired = !1),
                        (this.pendingInLock = []),
                        (this.broadcastChannel = null),
                        (this.logger = console.log),
                        (this.instanceID = yt.nextInstanceID),
                        (yt.nextInstanceID += 1),
                        this.instanceID > 0 &&
                            Se() &&
                            console.warn(
                                'Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.'
                            )
                    const s = Object.assign(Object.assign({}, ft), e)
                    if (
                        ((this.logDebugMessages = !!s.debug),
                        'function' == typeof s.debug && (this.logger = s.debug),
                        (this.persistSession = s.persistSession),
                        (this.storageKey = s.storageKey),
                        (this.autoRefreshToken = s.autoRefreshToken),
                        (this.admin = new ot({
                            url: s.url,
                            headers: s.headers,
                            fetch: s.fetch,
                        })),
                        (this.url = s.url),
                        (this.headers = s.headers),
                        (this.fetch = Ee(s.fetch)),
                        (this.lock = s.lock || gt),
                        (this.detectSessionInUrl = s.detectSessionInUrl),
                        (this.flowType = s.flowType),
                        (this.hasCustomAuthorizationHeader =
                            s.hasCustomAuthorizationHeader),
                        s.lock
                            ? (this.lock = s.lock)
                            : Se() &&
                                (null ===
                                    (t =
                                        null === globalThis ||
                                        void 0 === globalThis
                                            ? void 0
                                            : globalThis.navigator) ||
                                void 0 === t
                                    ? void 0
                                    : t.locks)
                              ? (this.lock = dt)
                              : (this.lock = gt),
                        (this.mfa = {
                            verify: this._verify.bind(this),
                            enroll: this._enroll.bind(this),
                            unenroll: this._unenroll.bind(this),
                            challenge: this._challenge.bind(this),
                            listFactors: this._listFactors.bind(this),
                            challengeAndVerify:
                                this._challengeAndVerify.bind(this),
                            getAuthenticatorAssuranceLevel:
                                this._getAuthenticatorAssuranceLevel.bind(this),
                        }),
                        this.persistSession
                            ? s.storage
                                ? (this.storage = s.storage)
                                : je()
                                  ? (this.storage = at)
                                  : ((this.memoryStorage = {}),
                                    (this.storage = ct(this.memoryStorage)))
                            : ((this.memoryStorage = {}),
                              (this.storage = ct(this.memoryStorage))),
                        Se() &&
                            globalThis.BroadcastChannel &&
                            this.persistSession &&
                            this.storageKey)
                    ) {
                        try {
                            this.broadcastChannel =
                                new globalThis.BroadcastChannel(this.storageKey)
                        } catch (e) {
                            console.error(
                                'Failed to create a new BroadcastChannel, multi-tab state changes will not be available',
                                e
                            )
                        }
                        null === (r = this.broadcastChannel) ||
                            void 0 === r ||
                            r.addEventListener('message', async (e) => {
                                this._debug(
                                    'received broadcast notification from other tab or client',
                                    e
                                ),
                                    await this._notifyAllSubscribers(
                                        e.data.event,
                                        e.data.session,
                                        !1
                                    )
                            })
                    }
                    this.initialize()
                }
                _debug(...e) {
                    return (
                        this.logDebugMessages &&
                            this.logger(
                                `GoTrueClient@${this.instanceID} (${we}) ${new Date().toISOString()}`,
                                ...e
                            ),
                        this
                    )
                }
                async initialize() {
                    return (
                        this.initializePromise ||
                            (this.initializePromise = (async () =>
                                await this._acquireLock(
                                    -1,
                                    async () => await this._initialize()
                                ))()),
                        await this.initializePromise
                    )
                }
                async _initialize() {
                    try {
                        const e = !!Se() && (await this._isPKCEFlow())
                        if (
                            (this._debug(
                                '#_initialize()',
                                'begin',
                                'is PKCE flow',
                                e
                            ),
                            e ||
                                (this.detectSessionInUrl &&
                                    this._isImplicitGrantFlow()))
                        ) {
                            const { data: t, error: r } =
                                await this._getSessionFromURL(e)
                            if (r)
                                return (
                                    this._debug(
                                        '#_initialize()',
                                        'error detecting session from URL',
                                        r
                                    ),
                                    'Identity is already linked' ===
                                        (null == r ? void 0 : r.message) ||
                                        'Identity is already linked to another user' ===
                                            (null == r ? void 0 : r.message) ||
                                        (await this._removeSession()),
                                    { error: r }
                                )
                            const { session: s, redirectType: n } = t
                            return (
                                this._debug(
                                    '#_initialize()',
                                    'detected session in URL',
                                    s,
                                    'redirect type',
                                    n
                                ),
                                await this._saveSession(s),
                                setTimeout(async () => {
                                    'recovery' === n
                                        ? await this._notifyAllSubscribers(
                                              'PASSWORD_RECOVERY',
                                              s
                                          )
                                        : await this._notifyAllSubscribers(
                                              'SIGNED_IN',
                                              s
                                          )
                                }, 0),
                                { error: null }
                            )
                        }
                        return await this._recoverAndRefresh(), { error: null }
                    } catch (e) {
                        return De(e)
                            ? { error: e }
                            : {
                                  error: new qe(
                                      'Unexpected error during initialization',
                                      e
                                  ),
                              }
                    } finally {
                        await this._handleVisibilityChange(),
                            this._debug('#_initialize()', 'end')
                    }
                }
                async signInAnonymously(e) {
                    var t, r, s
                    try {
                        await this._removeSession()
                        const n = await Qe(
                                this.fetch,
                                'POST',
                                `${this.url}/signup`,
                                {
                                    headers: this.headers,
                                    body: {
                                        data:
                                            null !==
                                                (r =
                                                    null ===
                                                        (t =
                                                            null == e
                                                                ? void 0
                                                                : e.options) ||
                                                    void 0 === t
                                                        ? void 0
                                                        : t.data) &&
                                            void 0 !== r
                                                ? r
                                                : {},
                                        gotrue_meta_security: {
                                            captcha_token:
                                                null ===
                                                    (s =
                                                        null == e
                                                            ? void 0
                                                            : e.options) ||
                                                void 0 === s
                                                    ? void 0
                                                    : s.captchaToken,
                                        },
                                    },
                                    xform: et,
                                }
                            ),
                            { data: i, error: o } = n
                        if (o || !i)
                            return {
                                data: { user: null, session: null },
                                error: o,
                            }
                        const a = i.session,
                            c = i.user
                        return (
                            i.session &&
                                (await this._saveSession(i.session),
                                await this._notifyAllSubscribers(
                                    'SIGNED_IN',
                                    a
                                )),
                            { data: { user: c, session: a }, error: null }
                        )
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { user: null, session: null },
                                error: e,
                            }
                        throw e
                    }
                }
                async signUp(e) {
                    var t, r, s
                    try {
                        let n
                        if ((await this._removeSession(), 'email' in e)) {
                            const { email: r, password: s, options: i } = e
                            let o = null,
                                a = null
                            'pkce' === this.flowType &&
                                ([o, a] = await Le(
                                    this.storage,
                                    this.storageKey
                                )),
                                (n = await Qe(
                                    this.fetch,
                                    'POST',
                                    `${this.url}/signup`,
                                    {
                                        headers: this.headers,
                                        redirectTo:
                                            null == i
                                                ? void 0
                                                : i.emailRedirectTo,
                                        body: {
                                            email: r,
                                            password: s,
                                            data:
                                                null !==
                                                    (t =
                                                        null == i
                                                            ? void 0
                                                            : i.data) &&
                                                void 0 !== t
                                                    ? t
                                                    : {},
                                            gotrue_meta_security: {
                                                captcha_token:
                                                    null == i
                                                        ? void 0
                                                        : i.captchaToken,
                                            },
                                            code_challenge: o,
                                            code_challenge_method: a,
                                        },
                                        xform: et,
                                    }
                                ))
                        } else {
                            if (!('phone' in e))
                                throw new Be(
                                    'You must provide either an email or phone number and a password'
                                )
                            {
                                const { phone: t, password: i, options: o } = e
                                n = await Qe(
                                    this.fetch,
                                    'POST',
                                    `${this.url}/signup`,
                                    {
                                        headers: this.headers,
                                        body: {
                                            phone: t,
                                            password: i,
                                            data:
                                                null !==
                                                    (r =
                                                        null == o
                                                            ? void 0
                                                            : o.data) &&
                                                void 0 !== r
                                                    ? r
                                                    : {},
                                            channel:
                                                null !==
                                                    (s =
                                                        null == o
                                                            ? void 0
                                                            : o.channel) &&
                                                void 0 !== s
                                                    ? s
                                                    : 'sms',
                                            gotrue_meta_security: {
                                                captcha_token:
                                                    null == o
                                                        ? void 0
                                                        : o.captchaToken,
                                            },
                                        },
                                        xform: et,
                                    }
                                )
                            }
                        }
                        const { data: i, error: o } = n
                        if (o || !i)
                            return {
                                data: { user: null, session: null },
                                error: o,
                            }
                        const a = i.session,
                            c = i.user
                        return (
                            i.session &&
                                (await this._saveSession(i.session),
                                await this._notifyAllSubscribers(
                                    'SIGNED_IN',
                                    a
                                )),
                            { data: { user: c, session: a }, error: null }
                        )
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { user: null, session: null },
                                error: e,
                            }
                        throw e
                    }
                }
                async signInWithPassword(e) {
                    try {
                        let t
                        if ((await this._removeSession(), 'email' in e)) {
                            const { email: r, password: s, options: n } = e
                            t = await Qe(
                                this.fetch,
                                'POST',
                                `${this.url}/token?grant_type=password`,
                                {
                                    headers: this.headers,
                                    body: {
                                        email: r,
                                        password: s,
                                        gotrue_meta_security: {
                                            captcha_token:
                                                null == n
                                                    ? void 0
                                                    : n.captchaToken,
                                        },
                                    },
                                    xform: tt,
                                }
                            )
                        } else {
                            if (!('phone' in e))
                                throw new Be(
                                    'You must provide either an email or phone number and a password'
                                )
                            {
                                const { phone: r, password: s, options: n } = e
                                t = await Qe(
                                    this.fetch,
                                    'POST',
                                    `${this.url}/token?grant_type=password`,
                                    {
                                        headers: this.headers,
                                        body: {
                                            phone: r,
                                            password: s,
                                            gotrue_meta_security: {
                                                captcha_token:
                                                    null == n
                                                        ? void 0
                                                        : n.captchaToken,
                                            },
                                        },
                                        xform: tt,
                                    }
                                )
                            }
                        }
                        const { data: r, error: s } = t
                        return s
                            ? { data: { user: null, session: null }, error: s }
                            : r && r.session && r.user
                              ? (r.session &&
                                    (await this._saveSession(r.session),
                                    await this._notifyAllSubscribers(
                                        'SIGNED_IN',
                                        r.session
                                    )),
                                {
                                    data: Object.assign(
                                        { user: r.user, session: r.session },
                                        r.weak_password
                                            ? { weakPassword: r.weak_password }
                                            : null
                                    ),
                                    error: s,
                                })
                              : {
                                    data: { user: null, session: null },
                                    error: new Je(),
                                }
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { user: null, session: null },
                                error: e,
                            }
                        throw e
                    }
                }
                async signInWithOAuth(e) {
                    var t, r, s, n
                    return (
                        await this._removeSession(),
                        await this._handleProviderSignIn(e.provider, {
                            redirectTo:
                                null === (t = e.options) || void 0 === t
                                    ? void 0
                                    : t.redirectTo,
                            scopes:
                                null === (r = e.options) || void 0 === r
                                    ? void 0
                                    : r.scopes,
                            queryParams:
                                null === (s = e.options) || void 0 === s
                                    ? void 0
                                    : s.queryParams,
                            skipBrowserRedirect:
                                null === (n = e.options) || void 0 === n
                                    ? void 0
                                    : n.skipBrowserRedirect,
                        })
                    )
                }
                async exchangeCodeForSession(e) {
                    return (
                        await this.initializePromise,
                        this._acquireLock(-1, async () =>
                            this._exchangeCodeForSession(e)
                        )
                    )
                }
                async _exchangeCodeForSession(e) {
                    const t = await xe(
                            this.storage,
                            `${this.storageKey}-code-verifier`
                        ),
                        [r, s] = (null != t ? t : '').split('/'),
                        { data: n, error: i } = await Qe(
                            this.fetch,
                            'POST',
                            `${this.url}/token?grant_type=pkce`,
                            {
                                headers: this.headers,
                                body: { auth_code: e, code_verifier: r },
                                xform: et,
                            }
                        )
                    return (
                        await Ae(
                            this.storage,
                            `${this.storageKey}-code-verifier`
                        ),
                        i
                            ? {
                                  data: {
                                      user: null,
                                      session: null,
                                      redirectType: null,
                                  },
                                  error: i,
                              }
                            : n && n.session && n.user
                              ? (n.session &&
                                    (await this._saveSession(n.session),
                                    await this._notifyAllSubscribers(
                                        'SIGNED_IN',
                                        n.session
                                    )),
                                {
                                    data: Object.assign(Object.assign({}, n), {
                                        redirectType: null != s ? s : null,
                                    }),
                                    error: i,
                                })
                              : {
                                    data: {
                                        user: null,
                                        session: null,
                                        redirectType: null,
                                    },
                                    error: new Je(),
                                }
                    )
                }
                async signInWithIdToken(e) {
                    await this._removeSession()
                    try {
                        const {
                                options: t,
                                provider: r,
                                token: s,
                                access_token: n,
                                nonce: i,
                            } = e,
                            o = await Qe(
                                this.fetch,
                                'POST',
                                `${this.url}/token?grant_type=id_token`,
                                {
                                    headers: this.headers,
                                    body: {
                                        provider: r,
                                        id_token: s,
                                        access_token: n,
                                        nonce: i,
                                        gotrue_meta_security: {
                                            captcha_token:
                                                null == t
                                                    ? void 0
                                                    : t.captchaToken,
                                        },
                                    },
                                    xform: et,
                                }
                            ),
                            { data: a, error: c } = o
                        return c
                            ? { data: { user: null, session: null }, error: c }
                            : a && a.session && a.user
                              ? (a.session &&
                                    (await this._saveSession(a.session),
                                    await this._notifyAllSubscribers(
                                        'SIGNED_IN',
                                        a.session
                                    )),
                                { data: a, error: c })
                              : {
                                    data: { user: null, session: null },
                                    error: new Je(),
                                }
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { user: null, session: null },
                                error: e,
                            }
                        throw e
                    }
                }
                async signInWithOtp(e) {
                    var t, r, s, n, i
                    try {
                        if ((await this._removeSession(), 'email' in e)) {
                            const { email: s, options: n } = e
                            let i = null,
                                o = null
                            'pkce' === this.flowType &&
                                ([i, o] = await Le(
                                    this.storage,
                                    this.storageKey
                                ))
                            const { error: a } = await Qe(
                                this.fetch,
                                'POST',
                                `${this.url}/otp`,
                                {
                                    headers: this.headers,
                                    body: {
                                        email: s,
                                        data:
                                            null !==
                                                (t =
                                                    null == n
                                                        ? void 0
                                                        : n.data) &&
                                            void 0 !== t
                                                ? t
                                                : {},
                                        create_user:
                                            null ===
                                                (r =
                                                    null == n
                                                        ? void 0
                                                        : n.shouldCreateUser) ||
                                            void 0 === r ||
                                            r,
                                        gotrue_meta_security: {
                                            captcha_token:
                                                null == n
                                                    ? void 0
                                                    : n.captchaToken,
                                        },
                                        code_challenge: i,
                                        code_challenge_method: o,
                                    },
                                    redirectTo:
                                        null == n ? void 0 : n.emailRedirectTo,
                                }
                            )
                            return {
                                data: { user: null, session: null },
                                error: a,
                            }
                        }
                        if ('phone' in e) {
                            const { phone: t, options: r } = e,
                                { data: o, error: a } = await Qe(
                                    this.fetch,
                                    'POST',
                                    `${this.url}/otp`,
                                    {
                                        headers: this.headers,
                                        body: {
                                            phone: t,
                                            data:
                                                null !==
                                                    (s =
                                                        null == r
                                                            ? void 0
                                                            : r.data) &&
                                                void 0 !== s
                                                    ? s
                                                    : {},
                                            create_user:
                                                null ===
                                                    (n =
                                                        null == r
                                                            ? void 0
                                                            : r.shouldCreateUser) ||
                                                void 0 === n ||
                                                n,
                                            gotrue_meta_security: {
                                                captcha_token:
                                                    null == r
                                                        ? void 0
                                                        : r.captchaToken,
                                            },
                                            channel:
                                                null !==
                                                    (i =
                                                        null == r
                                                            ? void 0
                                                            : r.channel) &&
                                                void 0 !== i
                                                    ? i
                                                    : 'sms',
                                        },
                                    }
                                )
                            return {
                                data: {
                                    user: null,
                                    session: null,
                                    messageId:
                                        null == o ? void 0 : o.message_id,
                                },
                                error: a,
                            }
                        }
                        throw new Be(
                            'You must provide either an email or phone number.'
                        )
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { user: null, session: null },
                                error: e,
                            }
                        throw e
                    }
                }
                async verifyOtp(e) {
                    var t, r
                    try {
                        let s, n
                        'email_change' !== e.type &&
                            'phone_change' !== e.type &&
                            (await this._removeSession()),
                            'options' in e &&
                                ((s =
                                    null === (t = e.options) || void 0 === t
                                        ? void 0
                                        : t.redirectTo),
                                (n =
                                    null === (r = e.options) || void 0 === r
                                        ? void 0
                                        : r.captchaToken))
                        const { data: i, error: o } = await Qe(
                            this.fetch,
                            'POST',
                            `${this.url}/verify`,
                            {
                                headers: this.headers,
                                body: Object.assign(Object.assign({}, e), {
                                    gotrue_meta_security: { captcha_token: n },
                                }),
                                redirectTo: s,
                                xform: et,
                            }
                        )
                        if (o) throw o
                        if (!i)
                            throw new Error(
                                'An error occurred on token verification.'
                            )
                        const a = i.session,
                            c = i.user
                        return (
                            (null == a ? void 0 : a.access_token) &&
                                (await this._saveSession(a),
                                await this._notifyAllSubscribers(
                                    'recovery' == e.type
                                        ? 'PASSWORD_RECOVERY'
                                        : 'SIGNED_IN',
                                    a
                                )),
                            { data: { user: c, session: a }, error: null }
                        )
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { user: null, session: null },
                                error: e,
                            }
                        throw e
                    }
                }
                async signInWithSSO(e) {
                    var t, r, s
                    try {
                        await this._removeSession()
                        let n = null,
                            i = null
                        return (
                            'pkce' === this.flowType &&
                                ([n, i] = await Le(
                                    this.storage,
                                    this.storageKey
                                )),
                            await Qe(this.fetch, 'POST', `${this.url}/sso`, {
                                body: Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            Object.assign(
                                                Object.assign(
                                                    {},
                                                    'providerId' in e
                                                        ? {
                                                              provider_id:
                                                                  e.providerId,
                                                          }
                                                        : null
                                                ),
                                                'domain' in e
                                                    ? { domain: e.domain }
                                                    : null
                                            ),
                                            {
                                                redirect_to:
                                                    null !==
                                                        (r =
                                                            null ===
                                                                (t =
                                                                    e.options) ||
                                                            void 0 === t
                                                                ? void 0
                                                                : t.redirectTo) &&
                                                    void 0 !== r
                                                        ? r
                                                        : void 0,
                                            }
                                        ),
                                        (
                                            null ===
                                                (s =
                                                    null == e
                                                        ? void 0
                                                        : e.options) ||
                                            void 0 === s
                                                ? void 0
                                                : s.captchaToken
                                        )
                                            ? {
                                                  gotrue_meta_security: {
                                                      captcha_token:
                                                          e.options
                                                              .captchaToken,
                                                  },
                                              }
                                            : null
                                    ),
                                    {
                                        skip_http_redirect: !0,
                                        code_challenge: n,
                                        code_challenge_method: i,
                                    }
                                ),
                                headers: this.headers,
                                xform: st,
                            })
                        )
                    } catch (e) {
                        if (De(e)) return { data: null, error: e }
                        throw e
                    }
                }
                async reauthenticate() {
                    return (
                        await this.initializePromise,
                        await this._acquireLock(
                            -1,
                            async () => await this._reauthenticate()
                        )
                    )
                }
                async _reauthenticate() {
                    try {
                        return await this._useSession(async (e) => {
                            const {
                                data: { session: t },
                                error: r,
                            } = e
                            if (r) throw r
                            if (!t) throw new ze()
                            const { error: s } = await Qe(
                                this.fetch,
                                'GET',
                                `${this.url}/reauthenticate`,
                                { headers: this.headers, jwt: t.access_token }
                            )
                            return {
                                data: { user: null, session: null },
                                error: s,
                            }
                        })
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { user: null, session: null },
                                error: e,
                            }
                        throw e
                    }
                }
                async resend(e) {
                    try {
                        'email_change' != e.type &&
                            'phone_change' != e.type &&
                            (await this._removeSession())
                        const t = `${this.url}/resend`
                        if ('email' in e) {
                            const { email: r, type: s, options: n } = e,
                                { error: i } = await Qe(this.fetch, 'POST', t, {
                                    headers: this.headers,
                                    body: {
                                        email: r,
                                        type: s,
                                        gotrue_meta_security: {
                                            captcha_token:
                                                null == n
                                                    ? void 0
                                                    : n.captchaToken,
                                        },
                                    },
                                    redirectTo:
                                        null == n ? void 0 : n.emailRedirectTo,
                                })
                            return {
                                data: { user: null, session: null },
                                error: i,
                            }
                        }
                        if ('phone' in e) {
                            const { phone: r, type: s, options: n } = e,
                                { data: i, error: o } = await Qe(
                                    this.fetch,
                                    'POST',
                                    t,
                                    {
                                        headers: this.headers,
                                        body: {
                                            phone: r,
                                            type: s,
                                            gotrue_meta_security: {
                                                captcha_token:
                                                    null == n
                                                        ? void 0
                                                        : n.captchaToken,
                                            },
                                        },
                                    }
                                )
                            return {
                                data: {
                                    user: null,
                                    session: null,
                                    messageId:
                                        null == i ? void 0 : i.message_id,
                                },
                                error: o,
                            }
                        }
                        throw new Be(
                            'You must provide either an email or phone number and a type'
                        )
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { user: null, session: null },
                                error: e,
                            }
                        throw e
                    }
                }
                async getSession() {
                    return (
                        await this.initializePromise,
                        await this._acquireLock(-1, async () =>
                            this._useSession(async (e) => e)
                        )
                    )
                }
                async _acquireLock(e, t) {
                    this._debug('#_acquireLock', 'begin', e)
                    try {
                        if (this.lockAcquired) {
                            const e = this.pendingInLock.length
                                    ? this.pendingInLock[
                                          this.pendingInLock.length - 1
                                      ]
                                    : Promise.resolve(),
                                r = (async () => (await e, await t()))()
                            return (
                                this.pendingInLock.push(
                                    (async () => {
                                        try {
                                            await r
                                        } catch (e) {}
                                    })()
                                ),
                                r
                            )
                        }
                        return await this.lock(
                            `lock:${this.storageKey}`,
                            e,
                            async () => {
                                this._debug(
                                    '#_acquireLock',
                                    'lock acquired for storage key',
                                    this.storageKey
                                )
                                try {
                                    this.lockAcquired = !0
                                    const e = t()
                                    for (
                                        this.pendingInLock.push(
                                            (async () => {
                                                try {
                                                    await e
                                                } catch (e) {}
                                            })()
                                        ),
                                            await e;
                                        this.pendingInLock.length;

                                    ) {
                                        const e = [...this.pendingInLock]
                                        await Promise.all(e),
                                            this.pendingInLock.splice(
                                                0,
                                                e.length
                                            )
                                    }
                                    return await e
                                } finally {
                                    this._debug(
                                        '#_acquireLock',
                                        'lock released for storage key',
                                        this.storageKey
                                    ),
                                        (this.lockAcquired = !1)
                                }
                            }
                        )
                    } finally {
                        this._debug('#_acquireLock', 'end')
                    }
                }
                async _useSession(e) {
                    this._debug('#_useSession', 'begin')
                    try {
                        const t = await this.__loadSession()
                        return await e(t)
                    } finally {
                        this._debug('#_useSession', 'end')
                    }
                }
                async __loadSession() {
                    this._debug('#__loadSession()', 'begin'),
                        this.lockAcquired ||
                            this._debug(
                                '#__loadSession()',
                                'used outside of an acquired lock!',
                                new Error().stack
                            )
                    try {
                        let e = null
                        const t = await xe(this.storage, this.storageKey)
                        if (
                            (this._debug(
                                '#getSession()',
                                'session from storage',
                                t
                            ),
                            null !== t &&
                                (this._isValidSession(t)
                                    ? (e = t)
                                    : (this._debug(
                                          '#getSession()',
                                          'session from storage is not valid'
                                      ),
                                      await this._removeSession())),
                            !e)
                        )
                            return { data: { session: null }, error: null }
                        const r =
                            !!e.expires_at && e.expires_at <= Date.now() / 1e3
                        if (
                            (this._debug(
                                '#__loadSession()',
                                `session has${r ? '' : ' not'} expired`,
                                'expires_at',
                                e.expires_at
                            ),
                            !r)
                        )
                            return (
                                this.storage.isServer &&
                                    (e = new Proxy(e, {
                                        get: (e, t, r) => (
                                            'user' === t &&
                                                console.warn(
                                                    'Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.'
                                                ),
                                            Reflect.get(e, t, r)
                                        ),
                                    })),
                                { data: { session: e }, error: null }
                            )
                        const { session: s, error: n } =
                            await this._callRefreshToken(e.refresh_token)
                        return n
                            ? { data: { session: null }, error: n }
                            : { data: { session: s }, error: null }
                    } finally {
                        this._debug('#__loadSession()', 'end')
                    }
                }
                async getUser(e) {
                    return e
                        ? await this._getUser(e)
                        : (await this.initializePromise,
                          await this._acquireLock(
                              -1,
                              async () => await this._getUser()
                          ))
                }
                async _getUser(e) {
                    try {
                        return e
                            ? await Qe(this.fetch, 'GET', `${this.url}/user`, {
                                  headers: this.headers,
                                  jwt: e,
                                  xform: rt,
                              })
                            : await this._useSession(async (e) => {
                                  var t, r, s
                                  const { data: n, error: i } = e
                                  if (i) throw i
                                  return (null === (t = n.session) ||
                                  void 0 === t
                                      ? void 0
                                      : t.access_token) ||
                                      this.hasCustomAuthorizationHeader
                                      ? await Qe(
                                            this.fetch,
                                            'GET',
                                            `${this.url}/user`,
                                            {
                                                headers: this.headers,
                                                jwt:
                                                    null !==
                                                        (s =
                                                            null ===
                                                                (r =
                                                                    n.session) ||
                                                            void 0 === r
                                                                ? void 0
                                                                : r.access_token) &&
                                                    void 0 !== s
                                                        ? s
                                                        : void 0,
                                                xform: rt,
                                            }
                                        )
                                      : {
                                            data: { user: null },
                                            error: new ze(),
                                        }
                              })
                    } catch (e) {
                        if (De(e)) return { data: { user: null }, error: e }
                        throw e
                    }
                }
                async updateUser(e, t = {}) {
                    return (
                        await this.initializePromise,
                        await this._acquireLock(
                            -1,
                            async () => await this._updateUser(e, t)
                        )
                    )
                }
                async _updateUser(e, t = {}) {
                    try {
                        return await this._useSession(async (r) => {
                            const { data: s, error: n } = r
                            if (n) throw n
                            if (!s.session) throw new ze()
                            const i = s.session
                            let o = null,
                                a = null
                            'pkce' === this.flowType &&
                                null != e.email &&
                                ([o, a] = await Le(
                                    this.storage,
                                    this.storageKey
                                ))
                            const { data: c, error: h } = await Qe(
                                this.fetch,
                                'PUT',
                                `${this.url}/user`,
                                {
                                    headers: this.headers,
                                    redirectTo:
                                        null == t ? void 0 : t.emailRedirectTo,
                                    body: Object.assign(Object.assign({}, e), {
                                        code_challenge: o,
                                        code_challenge_method: a,
                                    }),
                                    jwt: i.access_token,
                                    xform: rt,
                                }
                            )
                            if (h) throw h
                            return (
                                (i.user = c.user),
                                await this._saveSession(i),
                                await this._notifyAllSubscribers(
                                    'USER_UPDATED',
                                    i
                                ),
                                { data: { user: i.user }, error: null }
                            )
                        })
                    } catch (e) {
                        if (De(e)) return { data: { user: null }, error: e }
                        throw e
                    }
                }
                _decodeJWT(e) {
                    return Re(e)
                }
                async setSession(e) {
                    return (
                        await this.initializePromise,
                        await this._acquireLock(
                            -1,
                            async () => await this._setSession(e)
                        )
                    )
                }
                async _setSession(e) {
                    try {
                        if (!e.access_token || !e.refresh_token) throw new ze()
                        const t = Date.now() / 1e3
                        let r = t,
                            s = !0,
                            n = null
                        const i = Re(e.access_token)
                        if ((i.exp && ((r = i.exp), (s = r <= t)), s)) {
                            const { session: t, error: r } =
                                await this._callRefreshToken(e.refresh_token)
                            if (r)
                                return {
                                    data: { user: null, session: null },
                                    error: r,
                                }
                            if (!t)
                                return {
                                    data: { user: null, session: null },
                                    error: null,
                                }
                            n = t
                        } else {
                            const { data: s, error: i } = await this._getUser(
                                e.access_token
                            )
                            if (i) throw i
                            ;(n = {
                                access_token: e.access_token,
                                refresh_token: e.refresh_token,
                                user: s.user,
                                token_type: 'bearer',
                                expires_in: r - t,
                                expires_at: r,
                            }),
                                await this._saveSession(n),
                                await this._notifyAllSubscribers('SIGNED_IN', n)
                        }
                        return {
                            data: { user: n.user, session: n },
                            error: null,
                        }
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { session: null, user: null },
                                error: e,
                            }
                        throw e
                    }
                }
                async refreshSession(e) {
                    return (
                        await this.initializePromise,
                        await this._acquireLock(
                            -1,
                            async () => await this._refreshSession(e)
                        )
                    )
                }
                async _refreshSession(e) {
                    try {
                        return await this._useSession(async (t) => {
                            var r
                            if (!e) {
                                const { data: s, error: n } = t
                                if (n) throw n
                                e =
                                    null !== (r = s.session) && void 0 !== r
                                        ? r
                                        : void 0
                            }
                            if (!(null == e ? void 0 : e.refresh_token))
                                throw new ze()
                            const { session: s, error: n } =
                                await this._callRefreshToken(e.refresh_token)
                            return n
                                ? {
                                      data: { user: null, session: null },
                                      error: n,
                                  }
                                : s
                                  ? {
                                        data: { user: s.user, session: s },
                                        error: null,
                                    }
                                  : {
                                        data: { user: null, session: null },
                                        error: null,
                                    }
                        })
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { user: null, session: null },
                                error: e,
                            }
                        throw e
                    }
                }
                async _getSessionFromURL(e) {
                    try {
                        if (!Se()) throw new Ge('No browser detected.')
                        if (
                            'implicit' === this.flowType &&
                            !this._isImplicitGrantFlow()
                        )
                            throw new Ge('Not a valid implicit grant flow url.')
                        if ('pkce' == this.flowType && !e)
                            throw new Ke('Not a valid PKCE flow url.')
                        const t = Oe(window.location.href)
                        if (e) {
                            if (!t.code) throw new Ke('No code detected.')
                            const { data: e, error: r } =
                                await this._exchangeCodeForSession(t.code)
                            if (r) throw r
                            const s = new URL(window.location.href)
                            return (
                                s.searchParams.delete('code'),
                                window.history.replaceState(
                                    window.history.state,
                                    '',
                                    s.toString()
                                ),
                                {
                                    data: {
                                        session: e.session,
                                        redirectType: null,
                                    },
                                    error: null,
                                }
                            )
                        }
                        if (t.error || t.error_description || t.error_code)
                            throw new Ge(
                                t.error_description ||
                                    'Error in URL with unspecified error_description',
                                {
                                    error: t.error || 'unspecified_error',
                                    code: t.error_code || 'unspecified_code',
                                }
                            )
                        const {
                            provider_token: r,
                            provider_refresh_token: s,
                            access_token: n,
                            refresh_token: i,
                            expires_in: o,
                            expires_at: a,
                            token_type: c,
                        } = t
                        if (!(n && o && i && c))
                            throw new Ge('No session defined in URL')
                        const h = Math.round(Date.now() / 1e3),
                            l = parseInt(o)
                        let u = h + l
                        a && (u = parseInt(a))
                        const d = u - h
                        1e3 * d <= pt &&
                            console.warn(
                                `@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${l}s`
                            )
                        const f = u - l
                        h - f >= 120
                            ? console.warn(
                                  '@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale',
                                  f,
                                  u,
                                  h
                              )
                            : h - f < 0 &&
                              console.warn(
                                  '@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew',
                                  f,
                                  u,
                                  h
                              )
                        const { data: p, error: g } = await this._getUser(n)
                        if (g) throw g
                        const y = {
                            provider_token: r,
                            provider_refresh_token: s,
                            access_token: n,
                            expires_in: l,
                            expires_at: u,
                            refresh_token: i,
                            token_type: c,
                            user: p.user,
                        }
                        return (
                            (window.location.hash = ''),
                            this._debug(
                                '#_getSessionFromURL()',
                                'clearing window.location.hash'
                            ),
                            {
                                data: { session: y, redirectType: t.type },
                                error: null,
                            }
                        )
                    } catch (e) {
                        if (De(e))
                            return {
                                data: { session: null, redirectType: null },
                                error: e,
                            }
                        throw e
                    }
                }
                _isImplicitGrantFlow() {
                    const e = Oe(window.location.href)
                    return !(!Se() || (!e.access_token && !e.error_description))
                }
                async _isPKCEFlow() {
                    const e = Oe(window.location.href),
                        t = await xe(
                            this.storage,
                            `${this.storageKey}-code-verifier`
                        )
                    return !(!e.code || !t)
                }
                async signOut(e = { scope: 'global' }) {
                    return (
                        await this.initializePromise,
                        await this._acquireLock(
                            -1,
                            async () => await this._signOut(e)
                        )
                    )
                }
                async _signOut({ scope: e } = { scope: 'global' }) {
                    return await this._useSession(async (t) => {
                        var r
                        const { data: s, error: n } = t
                        if (n) return { error: n }
                        const i =
                            null === (r = s.session) || void 0 === r
                                ? void 0
                                : r.access_token
                        if (i) {
                            const { error: t } = await this.admin.signOut(i, e)
                            if (
                                t &&
                                (!(function (e) {
                                    return De(e) && 'AuthApiError' === e.name
                                })(t) ||
                                    (404 !== t.status && 401 !== t.status))
                            )
                                return { error: t }
                        }
                        return (
                            'others' !== e &&
                                (await this._removeSession(),
                                await Ae(
                                    this.storage,
                                    `${this.storageKey}-code-verifier`
                                ),
                                await this._notifyAllSubscribers(
                                    'SIGNED_OUT',
                                    null
                                )),
                            { error: null }
                        )
                    })
                }
                onAuthStateChange(e) {
                    const t = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                            /[xy]/g,
                            function (e) {
                                const t = (16 * Math.random()) | 0
                                return ('x' == e ? t : (3 & t) | 8).toString(16)
                            }
                        ),
                        r = {
                            id: t,
                            callback: e,
                            unsubscribe: () => {
                                this._debug(
                                    '#unsubscribe()',
                                    'state change callback with id removed',
                                    t
                                ),
                                    this.stateChangeEmitters.delete(t)
                            },
                        }
                    return (
                        this._debug(
                            '#onAuthStateChange()',
                            'registered callback with id',
                            t
                        ),
                        this.stateChangeEmitters.set(t, r),
                        (async () => {
                            await this.initializePromise,
                                await this._acquireLock(-1, async () => {
                                    this._emitInitialSession(t)
                                })
                        })(),
                        { data: { subscription: r } }
                    )
                }
                async _emitInitialSession(e) {
                    return await this._useSession(async (t) => {
                        var r, s
                        try {
                            const {
                                data: { session: s },
                                error: n,
                            } = t
                            if (n) throw n
                            await (null ===
                                (r = this.stateChangeEmitters.get(e)) ||
                            void 0 === r
                                ? void 0
                                : r.callback('INITIAL_SESSION', s)),
                                this._debug(
                                    'INITIAL_SESSION',
                                    'callback id',
                                    e,
                                    'session',
                                    s
                                )
                        } catch (t) {
                            await (null ===
                                (s = this.stateChangeEmitters.get(e)) ||
                            void 0 === s
                                ? void 0
                                : s.callback('INITIAL_SESSION', null)),
                                this._debug(
                                    'INITIAL_SESSION',
                                    'callback id',
                                    e,
                                    'error',
                                    t
                                ),
                                console.error(t)
                        }
                    })
                }
                async resetPasswordForEmail(e, t = {}) {
                    let r = null,
                        s = null
                    'pkce' === this.flowType &&
                        ([r, s] = await Le(this.storage, this.storageKey, !0))
                    try {
                        return await Qe(
                            this.fetch,
                            'POST',
                            `${this.url}/recover`,
                            {
                                body: {
                                    email: e,
                                    code_challenge: r,
                                    code_challenge_method: s,
                                    gotrue_meta_security: {
                                        captcha_token: t.captchaToken,
                                    },
                                },
                                headers: this.headers,
                                redirectTo: t.redirectTo,
                            }
                        )
                    } catch (e) {
                        if (De(e)) return { data: null, error: e }
                        throw e
                    }
                }
                async getUserIdentities() {
                    var e
                    try {
                        const { data: t, error: r } = await this.getUser()
                        if (r) throw r
                        return {
                            data: {
                                identities:
                                    null !== (e = t.user.identities) &&
                                    void 0 !== e
                                        ? e
                                        : [],
                            },
                            error: null,
                        }
                    } catch (e) {
                        if (De(e)) return { data: null, error: e }
                        throw e
                    }
                }
                async linkIdentity(e) {
                    var t
                    try {
                        const { data: r, error: s } = await this._useSession(
                            async (t) => {
                                var r, s, n, i, o
                                const { data: a, error: c } = t
                                if (c) throw c
                                const h = await this._getUrlForProvider(
                                    `${this.url}/user/identities/authorize`,
                                    e.provider,
                                    {
                                        redirectTo:
                                            null === (r = e.options) ||
                                            void 0 === r
                                                ? void 0
                                                : r.redirectTo,
                                        scopes:
                                            null === (s = e.options) ||
                                            void 0 === s
                                                ? void 0
                                                : s.scopes,
                                        queryParams:
                                            null === (n = e.options) ||
                                            void 0 === n
                                                ? void 0
                                                : n.queryParams,
                                        skipBrowserRedirect: !0,
                                    }
                                )
                                return await Qe(this.fetch, 'GET', h, {
                                    headers: this.headers,
                                    jwt:
                                        null !==
                                            (o =
                                                null === (i = a.session) ||
                                                void 0 === i
                                                    ? void 0
                                                    : i.access_token) &&
                                        void 0 !== o
                                            ? o
                                            : void 0,
                                })
                            }
                        )
                        if (s) throw s
                        return (
                            Se() &&
                                !(null === (t = e.options) || void 0 === t
                                    ? void 0
                                    : t.skipBrowserRedirect) &&
                                window.location.assign(
                                    null == r ? void 0 : r.url
                                ),
                            {
                                data: {
                                    provider: e.provider,
                                    url: null == r ? void 0 : r.url,
                                },
                                error: null,
                            }
                        )
                    } catch (t) {
                        if (De(t))
                            return {
                                data: { provider: e.provider, url: null },
                                error: t,
                            }
                        throw t
                    }
                }
                async unlinkIdentity(e) {
                    try {
                        return await this._useSession(async (t) => {
                            var r, s
                            const { data: n, error: i } = t
                            if (i) throw i
                            return await Qe(
                                this.fetch,
                                'DELETE',
                                `${this.url}/user/identities/${e.identity_id}`,
                                {
                                    headers: this.headers,
                                    jwt:
                                        null !==
                                            (s =
                                                null === (r = n.session) ||
                                                void 0 === r
                                                    ? void 0
                                                    : r.access_token) &&
                                        void 0 !== s
                                            ? s
                                            : void 0,
                                }
                            )
                        })
                    } catch (e) {
                        if (De(e)) return { data: null, error: e }
                        throw e
                    }
                }
                async _refreshAccessToken(e) {
                    const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`
                    this._debug(t, 'begin')
                    try {
                        const n = Date.now()
                        return await ((r = async (r) => (
                            r > 0 &&
                                (await (async function (e) {
                                    return await new Promise((t) => {
                                        setTimeout(() => t(null), e)
                                    })
                                })(200 * Math.pow(2, r - 1))),
                            this._debug(t, 'refreshing attempt', r),
                            await Qe(
                                this.fetch,
                                'POST',
                                `${this.url}/token?grant_type=refresh_token`,
                                {
                                    body: { refresh_token: e },
                                    headers: this.headers,
                                    xform: et,
                                }
                            )
                        )),
                        (s = (e, t) => {
                            const r = 200 * Math.pow(2, e)
                            return t && Ve(t) && Date.now() + r - n < pt
                        }),
                        new Promise((e, t) => {
                            ;(async () => {
                                for (let n = 0; n < 1 / 0; n++)
                                    try {
                                        const t = await r(n)
                                        if (!s(n, null)) return void e(t)
                                    } catch (e) {
                                        if (!s(n, e)) return void t(e)
                                    }
                            })()
                        }))
                    } catch (e) {
                        if ((this._debug(t, 'error', e), De(e)))
                            return {
                                data: { session: null, user: null },
                                error: e,
                            }
                        throw e
                    } finally {
                        this._debug(t, 'end')
                    }
                    var r, s
                }
                _isValidSession(e) {
                    return (
                        'object' == typeof e &&
                        null !== e &&
                        'access_token' in e &&
                        'refresh_token' in e &&
                        'expires_at' in e
                    )
                }
                async _handleProviderSignIn(e, t) {
                    const r = await this._getUrlForProvider(
                        `${this.url}/authorize`,
                        e,
                        {
                            redirectTo: t.redirectTo,
                            scopes: t.scopes,
                            queryParams: t.queryParams,
                        }
                    )
                    return (
                        this._debug(
                            '#_handleProviderSignIn()',
                            'provider',
                            e,
                            'options',
                            t,
                            'url',
                            r
                        ),
                        Se() &&
                            !t.skipBrowserRedirect &&
                            window.location.assign(r),
                        { data: { provider: e, url: r }, error: null }
                    )
                }
                async _recoverAndRefresh() {
                    var e
                    const t = '#_recoverAndRefresh()'
                    this._debug(t, 'begin')
                    try {
                        const r = await xe(this.storage, this.storageKey)
                        if (
                            (this._debug(t, 'session from storage', r),
                            !this._isValidSession(r))
                        )
                            return (
                                this._debug(t, 'session is not valid'),
                                void (
                                    null !== r && (await this._removeSession())
                                )
                            )
                        const s = Math.round(Date.now() / 1e3),
                            n =
                                (null !== (e = r.expires_at) && void 0 !== e
                                    ? e
                                    : 1 / 0) <
                                s + 10
                        if (
                            (this._debug(
                                t,
                                `session has${n ? '' : ' not'} expired with margin of 10s`
                            ),
                            n)
                        ) {
                            if (this.autoRefreshToken && r.refresh_token) {
                                const { error: e } =
                                    await this._callRefreshToken(
                                        r.refresh_token
                                    )
                                e &&
                                    (console.error(e),
                                    Ve(e) ||
                                        (this._debug(
                                            t,
                                            'refresh failed with a non-retryable error, removing the session',
                                            e
                                        ),
                                        await this._removeSession()))
                            }
                        } else await this._notifyAllSubscribers('SIGNED_IN', r)
                    } catch (e) {
                        return this._debug(t, 'error', e), void console.error(e)
                    } finally {
                        this._debug(t, 'end')
                    }
                }
                async _callRefreshToken(e) {
                    var t, r
                    if (!e) throw new ze()
                    if (this.refreshingDeferred)
                        return this.refreshingDeferred.promise
                    const s = `#_callRefreshToken(${e.substring(0, 5)}...)`
                    this._debug(s, 'begin')
                    try {
                        this.refreshingDeferred = new Ce()
                        const { data: t, error: r } =
                            await this._refreshAccessToken(e)
                        if (r) throw r
                        if (!t.session) throw new ze()
                        await this._saveSession(t.session),
                            await this._notifyAllSubscribers(
                                'TOKEN_REFRESHED',
                                t.session
                            )
                        const s = { session: t.session, error: null }
                        return this.refreshingDeferred.resolve(s), s
                    } catch (e) {
                        if ((this._debug(s, 'error', e), De(e))) {
                            const r = { session: null, error: e }
                            return (
                                Ve(e) ||
                                    (await this._removeSession(),
                                    await this._notifyAllSubscribers(
                                        'SIGNED_OUT',
                                        null
                                    )),
                                null === (t = this.refreshingDeferred) ||
                                    void 0 === t ||
                                    t.resolve(r),
                                r
                            )
                        }
                        throw (
                            (null === (r = this.refreshingDeferred) ||
                                void 0 === r ||
                                r.reject(e),
                            e)
                        )
                    } finally {
                        ;(this.refreshingDeferred = null), this._debug(s, 'end')
                    }
                }
                async _notifyAllSubscribers(e, t, r = !0) {
                    const s = `#_notifyAllSubscribers(${e})`
                    this._debug(s, 'begin', t, `broadcast = ${r}`)
                    try {
                        this.broadcastChannel &&
                            r &&
                            this.broadcastChannel.postMessage({
                                event: e,
                                session: t,
                            })
                        const s = [],
                            n = Array.from(
                                this.stateChangeEmitters.values()
                            ).map(async (r) => {
                                try {
                                    await r.callback(e, t)
                                } catch (e) {
                                    s.push(e)
                                }
                            })
                        if ((await Promise.all(n), s.length > 0)) {
                            for (let e = 0; e < s.length; e += 1)
                                console.error(s[e])
                            throw s[0]
                        }
                    } finally {
                        this._debug(s, 'end')
                    }
                }
                async _saveSession(e) {
                    this._debug('#_saveSession()', e),
                        await $e(this.storage, this.storageKey, e)
                }
                async _removeSession() {
                    this._debug('#_removeSession()'),
                        await Ae(this.storage, this.storageKey)
                }
                _removeVisibilityChangedCallback() {
                    this._debug('#_removeVisibilityChangedCallback()')
                    const e = this.visibilityChangedCallback
                    this.visibilityChangedCallback = null
                    try {
                        e &&
                            Se() &&
                            (null === window || void 0 === window
                                ? void 0
                                : window.removeEventListener) &&
                            window.removeEventListener('visibilitychange', e)
                    } catch (e) {
                        console.error(
                            'removing visibilitychange callback failed',
                            e
                        )
                    }
                }
                async _startAutoRefresh() {
                    await this._stopAutoRefresh(),
                        this._debug('#_startAutoRefresh()')
                    const e = setInterval(
                        () => this._autoRefreshTokenTick(),
                        pt
                    )
                    ;(this.autoRefreshTicker = e),
                        e &&
                        'object' == typeof e &&
                        'function' == typeof e.unref
                            ? e.unref()
                            : 'undefined' != typeof Deno &&
                              'function' == typeof Deno.unrefTimer &&
                              Deno.unrefTimer(e),
                        setTimeout(async () => {
                            await this.initializePromise,
                                await this._autoRefreshTokenTick()
                        }, 0)
                }
                async _stopAutoRefresh() {
                    this._debug('#_stopAutoRefresh()')
                    const e = this.autoRefreshTicker
                    ;(this.autoRefreshTicker = null), e && clearInterval(e)
                }
                async startAutoRefresh() {
                    this._removeVisibilityChangedCallback(),
                        await this._startAutoRefresh()
                }
                async stopAutoRefresh() {
                    this._removeVisibilityChangedCallback(),
                        await this._stopAutoRefresh()
                }
                async _autoRefreshTokenTick() {
                    this._debug('#_autoRefreshTokenTick()', 'begin')
                    try {
                        await this._acquireLock(0, async () => {
                            try {
                                const e = Date.now()
                                try {
                                    return await this._useSession(async (t) => {
                                        const {
                                            data: { session: r },
                                        } = t
                                        if (
                                            !r ||
                                            !r.refresh_token ||
                                            !r.expires_at
                                        )
                                            return void this._debug(
                                                '#_autoRefreshTokenTick()',
                                                'no session'
                                            )
                                        const s = Math.floor(
                                            (1e3 * r.expires_at - e) / pt
                                        )
                                        this._debug(
                                            '#_autoRefreshTokenTick()',
                                            `access token expires in ${s} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`
                                        ),
                                            s <= 3 &&
                                                (await this._callRefreshToken(
                                                    r.refresh_token
                                                ))
                                    })
                                } catch (e) {
                                    console.error(
                                        'Auto refresh tick failed with error. This is likely a transient error.',
                                        e
                                    )
                                }
                            } finally {
                                this._debug('#_autoRefreshTokenTick()', 'end')
                            }
                        })
                    } catch (e) {
                        if (!(e.isAcquireTimeout || e instanceof lt)) throw e
                        this._debug(
                            'auto refresh token tick lock not available'
                        )
                    }
                }
                async _handleVisibilityChange() {
                    if (
                        (this._debug('#_handleVisibilityChange()'),
                        !Se() ||
                            !(null === window || void 0 === window
                                ? void 0
                                : window.addEventListener))
                    )
                        return (
                            this.autoRefreshToken && this.startAutoRefresh(), !1
                        )
                    try {
                        ;(this.visibilityChangedCallback = async () =>
                            await this._onVisibilityChanged(!1)),
                            null === window ||
                                void 0 === window ||
                                window.addEventListener(
                                    'visibilitychange',
                                    this.visibilityChangedCallback
                                ),
                            await this._onVisibilityChanged(!0)
                    } catch (e) {
                        console.error('_handleVisibilityChange', e)
                    }
                }
                async _onVisibilityChanged(e) {
                    const t = `#_onVisibilityChanged(${e})`
                    this._debug(t, 'visibilityState', document.visibilityState),
                        'visible' === document.visibilityState
                            ? (this.autoRefreshToken &&
                                  this._startAutoRefresh(),
                              e ||
                                  (await this.initializePromise,
                                  await this._acquireLock(-1, async () => {
                                      'visible' === document.visibilityState
                                          ? await this._recoverAndRefresh()
                                          : this._debug(
                                                t,
                                                'acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting'
                                            )
                                  })))
                            : 'hidden' === document.visibilityState &&
                              this.autoRefreshToken &&
                              this._stopAutoRefresh()
                }
                async _getUrlForProvider(e, t, r) {
                    const s = [`provider=${encodeURIComponent(t)}`]
                    if (
                        ((null == r ? void 0 : r.redirectTo) &&
                            s.push(
                                `redirect_to=${encodeURIComponent(r.redirectTo)}`
                            ),
                        (null == r ? void 0 : r.scopes) &&
                            s.push(`scopes=${encodeURIComponent(r.scopes)}`),
                        'pkce' === this.flowType)
                    ) {
                        const [e, t] = await Le(this.storage, this.storageKey),
                            r = new URLSearchParams({
                                code_challenge: `${encodeURIComponent(e)}`,
                                code_challenge_method: `${encodeURIComponent(t)}`,
                            })
                        s.push(r.toString())
                    }
                    if (null == r ? void 0 : r.queryParams) {
                        const e = new URLSearchParams(r.queryParams)
                        s.push(e.toString())
                    }
                    return (
                        (null == r ? void 0 : r.skipBrowserRedirect) &&
                            s.push(
                                `skip_http_redirect=${r.skipBrowserRedirect}`
                            ),
                        `${e}?${s.join('&')}`
                    )
                }
                async _unenroll(e) {
                    try {
                        return await this._useSession(async (t) => {
                            var r
                            const { data: s, error: n } = t
                            return n
                                ? { data: null, error: n }
                                : await Qe(
                                      this.fetch,
                                      'DELETE',
                                      `${this.url}/factors/${e.factorId}`,
                                      {
                                          headers: this.headers,
                                          jwt:
                                              null ===
                                                  (r =
                                                      null == s
                                                          ? void 0
                                                          : s.session) ||
                                              void 0 === r
                                                  ? void 0
                                                  : r.access_token,
                                      }
                                  )
                        })
                    } catch (e) {
                        if (De(e)) return { data: null, error: e }
                        throw e
                    }
                }
                async _enroll(e) {
                    try {
                        return await this._useSession(async (t) => {
                            var r, s
                            const { data: n, error: i } = t
                            if (i) return { data: null, error: i }
                            const { data: o, error: a } = await Qe(
                                this.fetch,
                                'POST',
                                `${this.url}/factors`,
                                {
                                    body: {
                                        friendly_name: e.friendlyName,
                                        factor_type: e.factorType,
                                        issuer: e.issuer,
                                    },
                                    headers: this.headers,
                                    jwt:
                                        null ===
                                            (r =
                                                null == n
                                                    ? void 0
                                                    : n.session) || void 0 === r
                                            ? void 0
                                            : r.access_token,
                                }
                            )
                            return a
                                ? { data: null, error: a }
                                : ((null ===
                                      (s = null == o ? void 0 : o.totp) ||
                                  void 0 === s
                                      ? void 0
                                      : s.qr_code) &&
                                      (o.totp.qr_code = `data:image/svg+xml;utf-8,${o.totp.qr_code}`),
                                  { data: o, error: null })
                        })
                    } catch (e) {
                        if (De(e)) return { data: null, error: e }
                        throw e
                    }
                }
                async _verify(e) {
                    return this._acquireLock(-1, async () => {
                        try {
                            return await this._useSession(async (t) => {
                                var r
                                const { data: s, error: n } = t
                                if (n) return { data: null, error: n }
                                const { data: i, error: o } = await Qe(
                                    this.fetch,
                                    'POST',
                                    `${this.url}/factors/${e.factorId}/verify`,
                                    {
                                        body: {
                                            code: e.code,
                                            challenge_id: e.challengeId,
                                        },
                                        headers: this.headers,
                                        jwt:
                                            null ===
                                                (r =
                                                    null == s
                                                        ? void 0
                                                        : s.session) ||
                                            void 0 === r
                                                ? void 0
                                                : r.access_token,
                                    }
                                )
                                return o
                                    ? { data: null, error: o }
                                    : (await this._saveSession(
                                          Object.assign(
                                              {
                                                  expires_at:
                                                      Math.round(
                                                          Date.now() / 1e3
                                                      ) + i.expires_in,
                                              },
                                              i
                                          )
                                      ),
                                      await this._notifyAllSubscribers(
                                          'MFA_CHALLENGE_VERIFIED',
                                          i
                                      ),
                                      { data: i, error: o })
                            })
                        } catch (e) {
                            if (De(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                async _challenge(e) {
                    return this._acquireLock(-1, async () => {
                        try {
                            return await this._useSession(async (t) => {
                                var r
                                const { data: s, error: n } = t
                                return n
                                    ? { data: null, error: n }
                                    : await Qe(
                                          this.fetch,
                                          'POST',
                                          `${this.url}/factors/${e.factorId}/challenge`,
                                          {
                                              headers: this.headers,
                                              jwt:
                                                  null ===
                                                      (r =
                                                          null == s
                                                              ? void 0
                                                              : s.session) ||
                                                  void 0 === r
                                                      ? void 0
                                                      : r.access_token,
                                          }
                                      )
                            })
                        } catch (e) {
                            if (De(e)) return { data: null, error: e }
                            throw e
                        }
                    })
                }
                async _challengeAndVerify(e) {
                    const { data: t, error: r } = await this._challenge({
                        factorId: e.factorId,
                    })
                    return r
                        ? { data: null, error: r }
                        : await this._verify({
                              factorId: e.factorId,
                              challengeId: t.id,
                              code: e.code,
                          })
                }
                async _listFactors() {
                    const {
                        data: { user: e },
                        error: t,
                    } = await this.getUser()
                    if (t) return { data: null, error: t }
                    const r = (null == e ? void 0 : e.factors) || [],
                        s = r.filter(
                            (e) =>
                                'totp' === e.factor_type &&
                                'verified' === e.status
                        )
                    return { data: { all: r, totp: s }, error: null }
                }
                async _getAuthenticatorAssuranceLevel() {
                    return this._acquireLock(
                        -1,
                        async () =>
                            await this._useSession(async (e) => {
                                var t, r
                                const {
                                    data: { session: s },
                                    error: n,
                                } = e
                                if (n) return { data: null, error: n }
                                if (!s)
                                    return {
                                        data: {
                                            currentLevel: null,
                                            nextLevel: null,
                                            currentAuthenticationMethods: [],
                                        },
                                        error: null,
                                    }
                                const i = this._decodeJWT(s.access_token)
                                let o = null
                                i.aal && (o = i.aal)
                                let a = o
                                return (
                                    (null !==
                                        (r =
                                            null === (t = s.user.factors) ||
                                            void 0 === t
                                                ? void 0
                                                : t.filter(
                                                      (e) =>
                                                          'verified' ===
                                                          e.status
                                                  )) && void 0 !== r
                                        ? r
                                        : []
                                    ).length > 0 && (a = 'aal2'),
                                    {
                                        data: {
                                            currentLevel: o,
                                            nextLevel: a,
                                            currentAuthenticationMethods:
                                                i.amr || [],
                                        },
                                        error: null,
                                    }
                                )
                            })
                    )
                }
            }
            yt.nextInstanceID = 0
            const mt = yt
            class vt extends mt {
                constructor(e) {
                    super(e)
                }
            }
            var wt
            function bt(e) {
                return (
                    (bt =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e
                              }
                            : function (e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e
                              }),
                    bt(e)
                )
            }
            function _t(e, t) {
                var r = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e)
                    t &&
                        (s = s.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t)
                                .enumerable
                        })),
                        r.push.apply(r, s)
                }
                return r
            }
            function kt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? _t(Object(r), !0).forEach(function (t) {
                              var s, n, i
                              ;(s = e),
                                  (n = t),
                                  (i = r[t]),
                                  (n = Tt(n)) in s
                                      ? Object.defineProperty(s, n, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (s[n] = i)
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                            )
                          : _t(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(r, t)
                                )
                            })
                }
                return e
            }
            function St(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var s = t[r]
                    ;(s.enumerable = s.enumerable || !1),
                        (s.configurable = !0),
                        'value' in s && (s.writable = !0),
                        Object.defineProperty(e, Tt(s.key), s)
                }
            }
            function Tt(e) {
                var t = (function (e, t) {
                    if ('object' != bt(e) || !e) return e
                    var r = e[Symbol.toPrimitive]
                    if (void 0 !== r) {
                        var s = r.call(e, 'string')
                        if ('object' != bt(s)) return s
                        throw new TypeError(
                            '@@toPrimitive must return a primitive value.'
                        )
                    }
                    return String(e)
                })(e)
                return 'symbol' == bt(t) ? t : t + ''
            }
            function jt() {
                jt = function () {
                    return t
                }
                var e,
                    t = {},
                    r = Object.prototype,
                    s = r.hasOwnProperty,
                    n =
                        Object.defineProperty ||
                        function (e, t, r) {
                            e[t] = r.value
                        },
                    i = 'function' == typeof Symbol ? Symbol : {},
                    o = i.iterator || '@@iterator',
                    a = i.asyncIterator || '@@asyncIterator',
                    c = i.toStringTag || '@@toStringTag'
                function h(e, t, r) {
                    return (
                        Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                        }),
                        e[t]
                    )
                }
                try {
                    h({}, '')
                } catch (e) {
                    h = function (e, t, r) {
                        return (e[t] = r)
                    }
                }
                function l(e, t, r, s) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        a = new x(s || [])
                    return n(o, '_invoke', { value: O(e, r, a) }), o
                }
                function u(e, t, r) {
                    try {
                        return { type: 'normal', arg: e.call(t, r) }
                    } catch (e) {
                        return { type: 'throw', arg: e }
                    }
                }
                t.wrap = l
                var d = 'suspendedStart',
                    f = 'suspendedYield',
                    p = 'executing',
                    g = 'completed',
                    y = {}
                function m() {}
                function v() {}
                function w() {}
                var b = {}
                h(b, o, function () {
                    return this
                })
                var _ = Object.getPrototypeOf,
                    k = _ && _(_(A([])))
                k && k !== r && s.call(k, o) && (b = k)
                var S = (w.prototype = m.prototype = Object.create(b))
                function T(e) {
                    ;['next', 'throw', 'return'].forEach(function (t) {
                        h(e, t, function (e) {
                            return this._invoke(t, e)
                        })
                    })
                }
                function j(e, t) {
                    function r(n, i, o, a) {
                        var c = u(e[n], e, i)
                        if ('throw' !== c.type) {
                            var h = c.arg,
                                l = h.value
                            return l &&
                                'object' == bt(l) &&
                                s.call(l, '__await')
                                ? t.resolve(l.__await).then(
                                      function (e) {
                                          r('next', e, o, a)
                                      },
                                      function (e) {
                                          r('throw', e, o, a)
                                      }
                                  )
                                : t.resolve(l).then(
                                      function (e) {
                                          ;(h.value = e), o(h)
                                      },
                                      function (e) {
                                          return r('throw', e, o, a)
                                      }
                                  )
                        }
                        a(c.arg)
                    }
                    var i
                    n(this, '_invoke', {
                        value: function (e, s) {
                            function n() {
                                return new t(function (t, n) {
                                    r(e, s, t, n)
                                })
                            }
                            return (i = i ? i.then(n, n) : n())
                        },
                    })
                }
                function O(t, r, s) {
                    var n = d
                    return function (i, o) {
                        if (n === p) throw Error('Generator is already running')
                        if (n === g) {
                            if ('throw' === i) throw o
                            return { value: e, done: !0 }
                        }
                        for (s.method = i, s.arg = o; ; ) {
                            var a = s.delegate
                            if (a) {
                                var c = E(a, s)
                                if (c) {
                                    if (c === y) continue
                                    return c
                                }
                            }
                            if ('next' === s.method) s.sent = s._sent = s.arg
                            else if ('throw' === s.method) {
                                if (n === d) throw ((n = g), s.arg)
                                s.dispatchException(s.arg)
                            } else
                                'return' === s.method &&
                                    s.abrupt('return', s.arg)
                            n = p
                            var h = u(t, r, s)
                            if ('normal' === h.type) {
                                if (((n = s.done ? g : f), h.arg === y))
                                    continue
                                return { value: h.arg, done: s.done }
                            }
                            'throw' === h.type &&
                                ((n = g), (s.method = 'throw'), (s.arg = h.arg))
                        }
                    }
                }
                function E(t, r) {
                    var s = r.method,
                        n = t.iterator[s]
                    if (n === e)
                        return (
                            (r.delegate = null),
                            ('throw' === s &&
                                t.iterator.return &&
                                ((r.method = 'return'),
                                (r.arg = e),
                                E(t, r),
                                'throw' === r.method)) ||
                                ('return' !== s &&
                                    ((r.method = 'throw'),
                                    (r.arg = new TypeError(
                                        "The iterator does not provide a '" +
                                            s +
                                            "' method"
                                    )))),
                            y
                        )
                    var i = u(n, t.iterator, r.arg)
                    if ('throw' === i.type)
                        return (
                            (r.method = 'throw'),
                            (r.arg = i.arg),
                            (r.delegate = null),
                            y
                        )
                    var o = i.arg
                    return o
                        ? o.done
                            ? ((r[t.resultName] = o.value),
                              (r.next = t.nextLoc),
                              'return' !== r.method &&
                                  ((r.method = 'next'), (r.arg = e)),
                              (r.delegate = null),
                              y)
                            : o
                        : ((r.method = 'throw'),
                          (r.arg = new TypeError(
                              'iterator result is not an object'
                          )),
                          (r.delegate = null),
                          y)
                }
                function P(e) {
                    var t = { tryLoc: e[0] }
                    1 in e && (t.catchLoc = e[1]),
                        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                        this.tryEntries.push(t)
                }
                function $(e) {
                    var t = e.completion || {}
                    ;(t.type = 'normal'), delete t.arg, (e.completion = t)
                }
                function x(e) {
                    ;(this.tryEntries = [{ tryLoc: 'root' }]),
                        e.forEach(P, this),
                        this.reset(!0)
                }
                function A(t) {
                    if (t || '' === t) {
                        var r = t[o]
                        if (r) return r.call(t)
                        if ('function' == typeof t.next) return t
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function r() {
                                    for (; ++n < t.length; )
                                        if (s.call(t, n))
                                            return (
                                                (r.value = t[n]),
                                                (r.done = !1),
                                                r
                                            )
                                    return (r.value = e), (r.done = !0), r
                                }
                            return (i.next = i)
                        }
                    }
                    throw new TypeError(bt(t) + ' is not iterable')
                }
                return (
                    (v.prototype = w),
                    n(S, 'constructor', { value: w, configurable: !0 }),
                    n(w, 'constructor', { value: v, configurable: !0 }),
                    (v.displayName = h(w, c, 'GeneratorFunction')),
                    (t.isGeneratorFunction = function (e) {
                        var t = 'function' == typeof e && e.constructor
                        return (
                            !!t &&
                            (t === v ||
                                'GeneratorFunction' ===
                                    (t.displayName || t.name))
                        )
                    }),
                    (t.mark = function (e) {
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, w)
                                : ((e.__proto__ = w),
                                  h(e, c, 'GeneratorFunction')),
                            (e.prototype = Object.create(S)),
                            e
                        )
                    }),
                    (t.awrap = function (e) {
                        return { __await: e }
                    }),
                    T(j.prototype),
                    h(j.prototype, a, function () {
                        return this
                    }),
                    (t.AsyncIterator = j),
                    (t.async = function (e, r, s, n, i) {
                        void 0 === i && (i = Promise)
                        var o = new j(l(e, r, s, n), i)
                        return t.isGeneratorFunction(r)
                            ? o
                            : o.next().then(function (e) {
                                  return e.done ? e.value : o.next()
                              })
                    }),
                    T(S),
                    h(S, c, 'Generator'),
                    h(S, o, function () {
                        return this
                    }),
                    h(S, 'toString', function () {
                        return '[object Generator]'
                    }),
                    (t.keys = function (e) {
                        var t = Object(e),
                            r = []
                        for (var s in t) r.push(s)
                        return (
                            r.reverse(),
                            function e() {
                                for (; r.length; ) {
                                    var s = r.pop()
                                    if (s in t)
                                        return (e.value = s), (e.done = !1), e
                                }
                                return (e.done = !0), e
                            }
                        )
                    }),
                    (t.values = A),
                    (x.prototype = {
                        constructor: x,
                        reset: function (t) {
                            if (
                                ((this.prev = 0),
                                (this.next = 0),
                                (this.sent = this._sent = e),
                                (this.done = !1),
                                (this.delegate = null),
                                (this.method = 'next'),
                                (this.arg = e),
                                this.tryEntries.forEach($),
                                !t)
                            )
                                for (var r in this)
                                    't' === r.charAt(0) &&
                                        s.call(this, r) &&
                                        !isNaN(+r.slice(1)) &&
                                        (this[r] = e)
                        },
                        stop: function () {
                            this.done = !0
                            var e = this.tryEntries[0].completion
                            if ('throw' === e.type) throw e.arg
                            return this.rval
                        },
                        dispatchException: function (t) {
                            if (this.done) throw t
                            var r = this
                            function n(s, n) {
                                return (
                                    (a.type = 'throw'),
                                    (a.arg = t),
                                    (r.next = s),
                                    n && ((r.method = 'next'), (r.arg = e)),
                                    !!n
                                )
                            }
                            for (
                                var i = this.tryEntries.length - 1;
                                i >= 0;
                                --i
                            ) {
                                var o = this.tryEntries[i],
                                    a = o.completion
                                if ('root' === o.tryLoc) return n('end')
                                if (o.tryLoc <= this.prev) {
                                    var c = s.call(o, 'catchLoc'),
                                        h = s.call(o, 'finallyLoc')
                                    if (c && h) {
                                        if (this.prev < o.catchLoc)
                                            return n(o.catchLoc, !0)
                                        if (this.prev < o.finallyLoc)
                                            return n(o.finallyLoc)
                                    } else if (c) {
                                        if (this.prev < o.catchLoc)
                                            return n(o.catchLoc, !0)
                                    } else {
                                        if (!h)
                                            throw Error(
                                                'try statement without catch or finally'
                                            )
                                        if (this.prev < o.finallyLoc)
                                            return n(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function (e, t) {
                            for (
                                var r = this.tryEntries.length - 1;
                                r >= 0;
                                --r
                            ) {
                                var n = this.tryEntries[r]
                                if (
                                    n.tryLoc <= this.prev &&
                                    s.call(n, 'finallyLoc') &&
                                    this.prev < n.finallyLoc
                                ) {
                                    var i = n
                                    break
                                }
                            }
                            i &&
                                ('break' === e || 'continue' === e) &&
                                i.tryLoc <= t &&
                                t <= i.finallyLoc &&
                                (i = null)
                            var o = i ? i.completion : {}
                            return (
                                (o.type = e),
                                (o.arg = t),
                                i
                                    ? ((this.method = 'next'),
                                      (this.next = i.finallyLoc),
                                      y)
                                    : this.complete(o)
                            )
                        },
                        complete: function (e, t) {
                            if ('throw' === e.type) throw e.arg
                            return (
                                'break' === e.type || 'continue' === e.type
                                    ? (this.next = e.arg)
                                    : 'return' === e.type
                                      ? ((this.rval = this.arg = e.arg),
                                        (this.method = 'return'),
                                        (this.next = 'end'))
                                      : 'normal' === e.type &&
                                        t &&
                                        (this.next = t),
                                y
                            )
                        },
                        finish: function (e) {
                            for (
                                var t = this.tryEntries.length - 1;
                                t >= 0;
                                --t
                            ) {
                                var r = this.tryEntries[t]
                                if (r.finallyLoc === e)
                                    return (
                                        this.complete(r.completion, r.afterLoc),
                                        $(r),
                                        y
                                    )
                            }
                        },
                        catch: function (e) {
                            for (
                                var t = this.tryEntries.length - 1;
                                t >= 0;
                                --t
                            ) {
                                var r = this.tryEntries[t]
                                if (r.tryLoc === e) {
                                    var s = r.completion
                                    if ('throw' === s.type) {
                                        var n = s.arg
                                        $(r)
                                    }
                                    return n
                                }
                            }
                            throw Error('illegal catch attempt')
                        },
                        delegateYield: function (t, r, s) {
                            return (
                                (this.delegate = {
                                    iterator: A(t),
                                    resultName: r,
                                    nextLoc: s,
                                }),
                                'next' === this.method && (this.arg = e),
                                y
                            )
                        },
                    }),
                    t
                )
            }
            function Ot(e, t, r, s, n, i, o) {
                try {
                    var a = e[i](o),
                        c = a.value
                } catch (e) {
                    return void r(e)
                }
                a.done ? t(c) : Promise.resolve(c).then(s, n)
            }
            function Et(e) {
                return function () {
                    var t = this,
                        r = arguments
                    return new Promise(function (s, n) {
                        var i = e.apply(t, r)
                        function o(e) {
                            Ot(i, s, n, o, a, 'next', e)
                        }
                        function a(e) {
                            Ot(i, s, n, o, a, 'throw', e)
                        }
                        o(void 0)
                    })
                }
            }
            var Pt = new (class {
                    constructor(e, t, r) {
                        var s, n, i, o, a, c, h, l
                        if (
                            ((this.supabaseUrl = e), (this.supabaseKey = t), !e)
                        )
                            throw new Error('supabaseUrl is required.')
                        if (!t) throw new Error('supabaseKey is required.')
                        const u = e.replace(/\/$/, '')
                        ;(this.realtimeUrl = `${u}/realtime/v1`.replace(
                            /^http/i,
                            'ws'
                        )),
                            (this.authUrl = `${u}/auth/v1`),
                            (this.storageUrl = `${u}/storage/v1`),
                            (this.functionsUrl = `${u}/functions/v1`)
                        const d = `sb-${new URL(this.authUrl).hostname.split('.')[0]}-auth-token`,
                            f = (function (e, t) {
                                const {
                                        db: r,
                                        auth: s,
                                        realtime: n,
                                        global: i,
                                    } = e,
                                    {
                                        db: o,
                                        auth: a,
                                        realtime: c,
                                        global: h,
                                    } = t
                                return {
                                    db: Object.assign(Object.assign({}, o), r),
                                    auth: Object.assign(
                                        Object.assign({}, a),
                                        s
                                    ),
                                    realtime: Object.assign(
                                        Object.assign({}, c),
                                        n
                                    ),
                                    global: Object.assign(
                                        Object.assign({}, h),
                                        i
                                    ),
                                }
                            })(null != r ? r : {}, {
                                db: pe,
                                realtime: ye,
                                auth: Object.assign(Object.assign({}, ge), {
                                    storageKey: d,
                                }),
                                global: fe,
                            })
                        ;(this.storageKey =
                            null !==
                                (n =
                                    null === (s = f.auth) || void 0 === s
                                        ? void 0
                                        : s.storageKey) && void 0 !== n
                                ? n
                                : ''),
                            (this.headers =
                                null !==
                                    (o =
                                        null === (i = f.global) || void 0 === i
                                            ? void 0
                                            : i.headers) && void 0 !== o
                                    ? o
                                    : {}),
                            (this.auth = this._initSupabaseAuthClient(
                                null !== (a = f.auth) && void 0 !== a ? a : {},
                                this.headers,
                                null === (c = f.global) || void 0 === c
                                    ? void 0
                                    : c.fetch
                            )),
                            (this.fetch = ve(
                                t,
                                this._getAccessToken.bind(this),
                                null === (h = f.global) || void 0 === h
                                    ? void 0
                                    : h.fetch
                            )),
                            (this.realtime = this._initRealtimeClient(
                                Object.assign(
                                    { headers: this.headers },
                                    f.realtime
                                )
                            )),
                            (this.rest = new p(`${u}/rest/v1`, {
                                headers: this.headers,
                                schema:
                                    null === (l = f.db) || void 0 === l
                                        ? void 0
                                        : l.schema,
                                fetch: this.fetch,
                            })),
                            this._listenForAuthEvents()
                    }
                    get functions() {
                        return new i(this.functionsUrl, {
                            headers: this.headers,
                            customFetch: this.fetch,
                        })
                    }
                    get storage() {
                        return new ue(this.storageUrl, this.headers, this.fetch)
                    }
                    from(e) {
                        return this.rest.from(e)
                    }
                    schema(e) {
                        return this.rest.schema(e)
                    }
                    rpc(e, t = {}, r = {}) {
                        return this.rest.rpc(e, t, r)
                    }
                    channel(e, t = { config: {} }) {
                        return this.realtime.channel(e, t)
                    }
                    getChannels() {
                        return this.realtime.getChannels()
                    }
                    removeChannel(e) {
                        return this.realtime.removeChannel(e)
                    }
                    removeAllChannels() {
                        return this.realtime.removeAllChannels()
                    }
                    _getAccessToken() {
                        var e, t, r, s, n, i
                        return (
                            (r = this),
                            (s = void 0),
                            (i = function* () {
                                const { data: r } = yield this.auth.getSession()
                                return null !==
                                    (t =
                                        null === (e = r.session) || void 0 === e
                                            ? void 0
                                            : e.access_token) && void 0 !== t
                                    ? t
                                    : null
                            }),
                            new ((n = void 0) || (n = Promise))(function (
                                e,
                                t
                            ) {
                                function o(e) {
                                    try {
                                        c(i.next(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }
                                function a(e) {
                                    try {
                                        c(i.throw(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }
                                function c(t) {
                                    var r
                                    t.done
                                        ? e(t.value)
                                        : ((r = t.value),
                                          r instanceof n
                                              ? r
                                              : new n(function (e) {
                                                    e(r)
                                                })).then(o, a)
                                }
                                c((i = i.apply(r, s || [])).next())
                            })
                        )
                    }
                    _initSupabaseAuthClient(
                        {
                            autoRefreshToken: e,
                            persistSession: t,
                            detectSessionInUrl: r,
                            storage: s,
                            storageKey: n,
                            flowType: i,
                            debug: o,
                        },
                        a,
                        c
                    ) {
                        var h
                        const l = {
                            Authorization: `Bearer ${this.supabaseKey}`,
                            apikey: `${this.supabaseKey}`,
                        }
                        return new vt({
                            url: this.authUrl,
                            headers: Object.assign(Object.assign({}, l), a),
                            storageKey: n,
                            autoRefreshToken: e,
                            persistSession: t,
                            detectSessionInUrl: r,
                            storage: s,
                            flowType: i,
                            debug: o,
                            fetch: c,
                            hasCustomAuthorizationHeader:
                                null !==
                                    (h = 'Authorization' in this.headers) &&
                                void 0 !== h &&
                                h,
                        })
                    }
                    _initRealtimeClient(e) {
                        return new J(
                            this.realtimeUrl,
                            Object.assign(Object.assign({}, e), {
                                params: Object.assign(
                                    { apikey: this.supabaseKey },
                                    null == e ? void 0 : e.params
                                ),
                            })
                        )
                    }
                    _listenForAuthEvents() {
                        return this.auth.onAuthStateChange((e, t) => {
                            this._handleTokenChanged(
                                e,
                                'CLIENT',
                                null == t ? void 0 : t.access_token
                            )
                        })
                    }
                    _handleTokenChanged(e, t, r) {
                        ;('TOKEN_REFRESHED' !== e && 'SIGNED_IN' !== e) ||
                        this.changedAccessToken === r
                            ? 'SIGNED_OUT' === e &&
                              (this.realtime.setAuth(this.supabaseKey),
                              'STORAGE' == t && this.auth.signOut(),
                              (this.changedAccessToken = void 0))
                            : (this.realtime.setAuth(null != r ? r : null),
                              (this.changedAccessToken = r))
                    }
                })(
                    'https://blxbybiqivcbqprfzgoe.supabase.co',
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJseGJ5YmlxaXZjYnFwcmZ6Z29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwOTIyNDYsImV4cCI6MjAyOTY2ODI0Nn0.6ryrTDPWPktWFCj0Hq3_MCfGt0rA9-O5chQuMOlhbwM',
                    undefined
                ),
                $t = new Map()
            chrome.runtime.onMessage.addListener(
                (function () {
                    var e = Et(
                        jt().mark(function e(t, r, s) {
                            var n, i, o
                            return jt().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            console.log('payload', t),
                                                (n = t.data),
                                                console.log('BG Message:', n),
                                                (e.t0 = n.type),
                                                (e.next =
                                                    'meeting-ended' === e.t0
                                                        ? 6
                                                        : 'message' === e.t0
                                                          ? 8
                                                          : 'login' === e.t0
                                                            ? 11
                                                            : 14)
                                            break
                                        case 6:
                                            return (
                                                $t.forEach(
                                                    (function () {
                                                        var e = Et(
                                                            jt().mark(
                                                                function e(
                                                                    t,
                                                                    r
                                                                ) {
                                                                    return jt().wrap(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            for (;;)
                                                                                switch (
                                                                                    (e.prev =
                                                                                        e.next)
                                                                                ) {
                                                                                    case 0:
                                                                                        return (
                                                                                            t.end(),
                                                                                            (e.next = 3),
                                                                                            Ct(
                                                                                                t
                                                                                            )
                                                                                        )
                                                                                    case 3:
                                                                                        $t.delete(
                                                                                            r
                                                                                        )
                                                                                    case 4:
                                                                                    case 'end':
                                                                                        return e.stop()
                                                                                }
                                                                        },
                                                                        e
                                                                    )
                                                                }
                                                            )
                                                        )
                                                        return function (t, r) {
                                                            return e.apply(
                                                                this,
                                                                arguments
                                                            )
                                                        }
                                                    })()
                                                ),
                                                e.abrupt('break', 16)
                                            )
                                        case 8:
                                            return (
                                                (i = xt(n.message.deviceId)),
                                                $t.has(i)
                                                    ? $t
                                                          .get(i)
                                                          .addMessage(n.message)
                                                    : ((o = new Rt(
                                                          i
                                                      )).addMessage(n.message),
                                                      $t.set(i, o)),
                                                e.abrupt('break', 16)
                                            )
                                        case 11:
                                            return (
                                                (e.next = 13),
                                                At(n.email, n.password)
                                            )
                                        case 13:
                                            return e.abrupt('break', 16)
                                        case 14:
                                            return (
                                                console.log(
                                                    'Unknown message type',
                                                    n.type
                                                ),
                                                e.abrupt('break', 16)
                                            )
                                        case 16:
                                        case 'end':
                                            return e.stop()
                                    }
                            }, e)
                        })
                    )
                    return function (t, r, s) {
                        return e.apply(this, arguments)
                    }
                })()
            )
            var xt = function (e) {
                    return e.split('/')[1]
                },
                At = (function () {
                    var e = Et(
                        jt().mark(function e(t, r) {
                            var s
                            return jt().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.next = 2),
                                                Pt.auth.signInWithPassword({
                                                    email: t,
                                                    password: r,
                                                })
                                            )
                                        case 2:
                                            ;(s = e.sent),
                                                console.log('result', s),
                                                console.log(
                                                    'result.data.session.access_token',
                                                    s.data.session.access_token
                                                )
                                        case 5:
                                        case 'end':
                                            return e.stop()
                                    }
                            }, e)
                        })
                    )
                    return function (t, r) {
                        return e.apply(this, arguments)
                    }
                })(),
                Ct = (function () {
                    var e = Et(
                        jt().mark(function e(t) {
                            var r, s, n, i, o
                            return jt().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                console.log('meeting', t),
                                                (e.next = 3),
                                                Pt.auth.getSession()
                                            )
                                        case 3:
                                            if (
                                                ((r = e.sent),
                                                (s = r.data.session))
                                            ) {
                                                e.next = 8
                                                break
                                            }
                                            return (
                                                console.log('No session found'),
                                                e.abrupt('return')
                                            )
                                        case 8:
                                            return (
                                                (e.next = 10),
                                                Pt.from('meetings')
                                                    .upsert(
                                                        {
                                                            id: t.id,
                                                            uid: s.user.id,
                                                            start_time:
                                                                t.startTime,
                                                            end_time: t.endTime,
                                                            transcript:
                                                                t.getTranscript(),
                                                            messages:
                                                                t.getSortedMessages(),
                                                        },
                                                        {
                                                            onConflict: [
                                                                'id',
                                                                'uid',
                                                            ],
                                                        }
                                                    )
                                                    .select()
                                            )
                                        case 10:
                                            ;(n = e.sent),
                                                (i = n.data),
                                                (o = n.error),
                                                console.log(
                                                    'save meeting results',
                                                    i,
                                                    o
                                                )
                                        case 14:
                                        case 'end':
                                            return e.stop()
                                    }
                            }, e)
                        })
                    )
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                })(),
                Rt = (function () {
                    return (
                        (e = function e(t) {
                            !(function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    )
                            })(this, e),
                                (this.id = t),
                                (this.startTime = new Date()),
                                (this.messages = new Map()),
                                (this.messageSequences = {}),
                                (this.insertionOrder = 0),
                                (this.endTime = null)
                        }),
                        (t = [
                            {
                                key: 'addMessage',
                                value: function (e) {
                                    var t = e.deviceId.split('/').pop(),
                                        r = ''
                                            .concat(t, '/')
                                            .concat(e.messageId)
                                    this.messageSequences[r] ||
                                        (this.messageSequences[r] = 1)
                                    var s = this.messageSequences[r],
                                        n = ''.concat(r, '/').concat(s),
                                        i = this.messages.get(n)
                                    i
                                        ? e.messageVersion >= i.messageVersion
                                            ? this.messages.set(
                                                  n,
                                                  kt(
                                                      kt({}, i),
                                                      {},
                                                      {
                                                          messageVersion:
                                                              e.messageVersion,
                                                          text: e.text,
                                                      }
                                                  )
                                              )
                                            : e.messageVersion <
                                                  i.messageVersion &&
                                              ((s = ++this.messageSequences[r]),
                                              (n = ''.concat(r, '/').concat(s)),
                                              this.messages.set(
                                                  n,
                                                  kt(
                                                      kt({}, e),
                                                      {},
                                                      {
                                                          timestamp: new Date(),
                                                          senderId: t,
                                                          insertionOrder: this
                                                              .insertionOrder++,
                                                      }
                                                  )
                                              ))
                                        : this.messages.set(
                                              n,
                                              kt(
                                                  kt({}, e),
                                                  {},
                                                  {
                                                      timestamp: new Date(),
                                                      senderId: t,
                                                      insertionOrder: this
                                                          .insertionOrder++,
                                                  }
                                              )
                                          )
                                },
                            },
                            {
                                key: 'getSortedMessages',
                                value: function () {
                                    return Array.from(
                                        this.messages.values()
                                    ).sort(function (e, t) {
                                        return (
                                            e.insertionOrder - t.insertionOrder
                                        )
                                    })
                                },
                            },
                            {
                                key: 'getTranscript',
                                value: function () {
                                    return this.getSortedMessages()
                                        .map(function (e) {
                                            return '['
                                                .concat(
                                                    e.timestamp.toLocaleTimeString(),
                                                    '] ('
                                                )
                                                .concat(e.senderId, '): ')
                                                .concat(e.text)
                                        })
                                        .join('\n')
                                },
                            },
                            {
                                key: 'end',
                                value: function () {
                                    this.endTime = new Date()
                                },
                            },
                        ]) && St(e.prototype, t),
                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                        e
                    )
                    var e, t
                })()
            null === (wt = chrome) ||
                void 0 === wt ||
                null === (wt = wt.action) ||
                void 0 === wt ||
                null === (wt = wt.onClicked) ||
                void 0 === wt ||
                wt.addListener(function () {
                    chrome.runtime.openOptionsPage()
                })
        })()
})()