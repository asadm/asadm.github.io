import Head from 'next/head'


export default function MyHead({ title, description, url, image }) {
  return (
    <Head>
        <title>{title} – Asad Memon</title>
        <meta name="description" content={description?description:"Asad Memon's homepage."} />
        <meta property="og:title" content={`${title} – Asad Memon`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://asadmemon.com${url}`} />
        <link rel="apple-touch-icon" href="/assets/favicon.png" />
        <link rel="shortcut icon" href="/assets/favicon.png" />
        <meta property="og:image" content={`https://asadmemon.com/${image?image:"assets/img/main1.jpg"}`} />
        <meta property="og:description" content={description?description:"Asad Memon's homepage."} />
        <a href='//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500' rel='stylesheet' type='text/css'/>
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
// Head scripts for the site

// google analytics
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-58030862-1', 'auto');
  ga('send', 'pageview');

// heap analytics
window.heap = window.heap || [], heap.load = function (e, t) { window.heap.appid = e, window.heap.config = t = t || {}; var r = t.forceSSL || "https:" === document.location.protocol, a = document.createElement("script"); a.type = "text/javascript", a.async = !0, a.src = (r ? "https:" : "http:") + "//cdn.heapanalytics.com/js/heap-" + e + ".js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(a, n); for (var o = function (e) { return function () { heap.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], c = 0; c < p.length; c++)heap[p[c]] = o(p[c]) };
heap.load("1855799973");
`
          }}
        />
      </Head>
  )
}