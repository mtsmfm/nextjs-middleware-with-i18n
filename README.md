# nextjs-middleware-with-i18n

## Without i18n

```
$ npm run dev
$ curl localhost:3000/ -I
HTTP/1.1 307 Temporary Redirect
location: /home
Date: Mon, 30 Oct 2023 13:23:39 GMT
Connection: keep-alive
Keep-Alive: timeout=5
$ curl localhost:3000/a -I
HTTP/1.1 307 Temporary Redirect
location: /home
Date: Mon, 30 Oct 2023 13:23:50 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

## With i18n

```
$ WITH_I18N=true npm run dev
$ curl localhost:3000/ -I
HTTP/1.1 200 OK
Vary: RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url, Accept-Encoding
Cache-Control: no-store, must-revalidate
X-Powered-By: Next.js
Content-Type: text/html; charset=utf-8
Date: Mon, 30 Oct 2023 13:21:21 GMT
Connection: keep-alive
Keep-Alive: timeout=5
$ curl localhost:3000/a -I
HTTP/1.1 307 Temporary Redirect
location: /home
Date: Mon, 30 Oct 2023 13:21:23 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
