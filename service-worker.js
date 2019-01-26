/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2ad88f461f30134b27dcdf8362233fc6"
  },
  {
    "url": "about/index.html",
    "revision": "d14ea302c407e0761f41998c3807937f"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "d1c87a1e12b2dc180f3263ec9a64de74"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "7932fc039ab9e4c5f1b90e5ab621faf2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "ca42ae50fc9b71da999b77536f251ee4"
  },
  {
    "url": "assets/css/0.styles.86da17ae.css",
    "revision": "44ed32394f52778cfc397cf93af648d2"
  },
  {
    "url": "assets/img/2018_07_08_20_50_57.183dcb26.png",
    "revision": "183dcb2621aedf7d0a9bd75960068884"
  },
  {
    "url": "assets/img/2018_07_08_20_56_57.730b4a91.png",
    "revision": "730b4a917440f8ceb75b24028c73fd27"
  },
  {
    "url": "assets/img/2018_07_08_20_58_41.ec3a9343.png",
    "revision": "ec3a93435e5f165c5be7eaec73f2a8ae"
  },
  {
    "url": "assets/img/2018_07_08_21_06_32.5e73e58d.png",
    "revision": "5e73e58d7b3a9d4a0411a15ed5bc2e8c"
  },
  {
    "url": "assets/img/2018_07_08_21_06_54.58c8e1ab.png",
    "revision": "58c8e1abf3ce2231b85d8f13ac75a4c0"
  },
  {
    "url": "assets/img/2018_07_08_21_07_52.7ad2dab2.png",
    "revision": "7ad2dab2b84dcfdf842e6adb3c63f838"
  },
  {
    "url": "assets/img/2018_07_10_20_55_19.d56bccf5.png",
    "revision": "d56bccf50749efd70e20923e9fdd36e2"
  },
  {
    "url": "assets/img/2018_07_22_20_13_05.ad930085.png",
    "revision": "ad930085c8c363dcb719d5700e4cc0d1"
  },
  {
    "url": "assets/img/2018_07_22_20_14_27.fb12ebdb.png",
    "revision": "fb12ebdb2488b740330648eb3bc92e5f"
  },
  {
    "url": "assets/img/2018_07_22_21_11_31.6a6ae291.png",
    "revision": "6a6ae29173a9396d796055a5e881f1cd"
  },
  {
    "url": "assets/img/2018_07_22_21_13_09.3c78fdac.png",
    "revision": "3c78fdac7d672e328ef86f3a85f16343"
  },
  {
    "url": "assets/img/2018_07_22_22_05_23.94a53dd7.png",
    "revision": "94a53dd73c10cea995f43219e41606eb"
  },
  {
    "url": "assets/img/2018_07_22_22_15_58.a47a0f5e.png",
    "revision": "a47a0f5efaa03496141c88f348c5d7f0"
  },
  {
    "url": "assets/img/2018_07_28_22_50_27.db6a5a99.png",
    "revision": "db6a5a994fcec352169a8c6cb3cc3a56"
  },
  {
    "url": "assets/img/2018_07_28_23_02_23.fc601e39.png",
    "revision": "fc601e39568304d8324c9d893722a377"
  },
  {
    "url": "assets/img/2018_07_28_23_35_59.c49e6461.png",
    "revision": "c49e646114249ee8c8cf0d3fb9650f76"
  },
  {
    "url": "assets/img/2018_10_15_22_43_12.483c94f5.png",
    "revision": "483c94f57d2b1a6d76b374946dea5c98"
  },
  {
    "url": "assets/img/2018-07-08+21_33_30.62122585.gif",
    "revision": "62122585feb2dbf126b91313526b376b"
  },
  {
    "url": "assets/img/20180803-1.0942e0b0.png",
    "revision": "0942e0b0c1e9ab9f74898813c94ec773"
  },
  {
    "url": "assets/img/Analytics_-_Tony_Xu_2018-10-16_09-52-42.0ed9ed06.png",
    "revision": "0ed9ed0698b84d08d9cf309caacb5b21"
  },
  {
    "url": "assets/img/Analytics_2018-10-15_22-50-34.cf9aad9c.png",
    "revision": "cf9aad9c9b8484818abe0e51fd4fe195"
  },
  {
    "url": "assets/img/Credentials_-_api-tonyxu-io_-_Google_Cloud_Platform_2018-10-15_22-39-04.0441e289.png",
    "revision": "0441e2892001e205e89089b986344004"
  },
  {
    "url": "assets/img/github-issues.279114fa.png",
    "revision": "279114fa078a914dc61cd3e1c32cdfda"
  },
  {
    "url": "assets/img/github-projects.95639a4c.png",
    "revision": "95639a4ce54d1e477637213e3dcd657e"
  },
  {
    "url": "assets/img/IAM__IAM__admin__api-tonyxu-io__Google_Cloud_Platform_2018-10-15_22-48-01.dcfdce7f.png",
    "revision": "dcfdce7ff4fb4530d014b3121af923c2"
  },
  {
    "url": "assets/img/Overview__APIs__Services__api-tonyxu-io__Google_Cloud_Platform_2018-10-15_22-45-05.2a6251df.png",
    "revision": "2a6251dfc2b4ae43d7ea52e2ee4da255"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a41f912e.js",
    "revision": "99c47d012a5e87f37bb307352f4778d3"
  },
  {
    "url": "assets/js/11.c7bdbbe1.js",
    "revision": "a0da8e3f2845d09a240162c064952b2a"
  },
  {
    "url": "assets/js/12.43813f67.js",
    "revision": "f1696f3f849df74ef3e340e62230a36d"
  },
  {
    "url": "assets/js/13.23b55229.js",
    "revision": "02c7b7436fe27541b916e2e08b141625"
  },
  {
    "url": "assets/js/14.fc41af6d.js",
    "revision": "667adcdd4e751a9f46c8ff5b6c4969f9"
  },
  {
    "url": "assets/js/15.e892b6fb.js",
    "revision": "243855fb8588bff656581a1aff101f80"
  },
  {
    "url": "assets/js/16.3b17d588.js",
    "revision": "1465e5bcc3bac9a7efc3ef9602cd6b37"
  },
  {
    "url": "assets/js/17.0bb64f66.js",
    "revision": "380833442f833c407383b95034f193ad"
  },
  {
    "url": "assets/js/18.bd9206f5.js",
    "revision": "0ba97c558bdf832582888ae797b28ee3"
  },
  {
    "url": "assets/js/19.5fe09ade.js",
    "revision": "0c7571dabfd7c988947ebb2ec270cddc"
  },
  {
    "url": "assets/js/2.8958ff83.js",
    "revision": "94021ddefc3e2b4db7c64270e0f73ec3"
  },
  {
    "url": "assets/js/20.2657ab5f.js",
    "revision": "5d1420bf7e450adcc3114e498b8b8223"
  },
  {
    "url": "assets/js/21.ee723577.js",
    "revision": "df1d05203a7dc47aa9e6bb23a9d49475"
  },
  {
    "url": "assets/js/22.524679be.js",
    "revision": "ffd93184cc2fc82f414cbd94d61221fc"
  },
  {
    "url": "assets/js/23.2af6fc12.js",
    "revision": "78aecbea874bc59c405f15a8a3592d92"
  },
  {
    "url": "assets/js/24.08c3b061.js",
    "revision": "0cdcc18e38495ffa6051ef22ecb86b59"
  },
  {
    "url": "assets/js/25.e65c920b.js",
    "revision": "42d4f2461d59e9e71e1edfcb30749a8c"
  },
  {
    "url": "assets/js/26.2c369b4f.js",
    "revision": "32105855e36ec768c0196dd6f9220553"
  },
  {
    "url": "assets/js/27.f8f59d25.js",
    "revision": "963c1b48c8d2e3cee6eea2473e9cc7c1"
  },
  {
    "url": "assets/js/28.cba1b388.js",
    "revision": "b0c57b7d01a33126c4dc81627e7f3c46"
  },
  {
    "url": "assets/js/29.39713697.js",
    "revision": "10369aec3b2633705407445526a58d52"
  },
  {
    "url": "assets/js/3.48902daf.js",
    "revision": "a0d0c58e6127526275eeca68e794c90a"
  },
  {
    "url": "assets/js/30.75eed9c9.js",
    "revision": "09af5d696188693c8c666887b48cc595"
  },
  {
    "url": "assets/js/31.706ca029.js",
    "revision": "0f863385de9a8f5518468b49b0d504f3"
  },
  {
    "url": "assets/js/32.17de9df8.js",
    "revision": "ef4a49eb5ff19eb1d874a55ec657b3ec"
  },
  {
    "url": "assets/js/33.2f2fe44f.js",
    "revision": "ba9b869e74af09b9ed3f507e2b2ef3d2"
  },
  {
    "url": "assets/js/34.5f0bc78f.js",
    "revision": "2939fe2b7cd5e9578c0abb8700d80708"
  },
  {
    "url": "assets/js/35.cdde0923.js",
    "revision": "e4b17cb08b7d92bbc5e240f41dfbe7d5"
  },
  {
    "url": "assets/js/36.f2513a75.js",
    "revision": "b9f7772ff21ac387a11aac435ab1beed"
  },
  {
    "url": "assets/js/37.614d1b2f.js",
    "revision": "99353b4eab4dda83bc5e939f5fede543"
  },
  {
    "url": "assets/js/38.056fc263.js",
    "revision": "09e0e768268c6fcca465276982c504f7"
  },
  {
    "url": "assets/js/39.e9baab37.js",
    "revision": "d5cddb41d2f1987fdc4d671f43d0cd7a"
  },
  {
    "url": "assets/js/4.2c7c719d.js",
    "revision": "7be6ec4d7368233d70f06f03eb02cc75"
  },
  {
    "url": "assets/js/40.4e22312e.js",
    "revision": "ef8d4444ffbbbe8999b966678e4e2af2"
  },
  {
    "url": "assets/js/41.1b97ce02.js",
    "revision": "4c138d4d38e4c9d4dd01e7d619155c30"
  },
  {
    "url": "assets/js/42.14a726e0.js",
    "revision": "bb65308e5d3e55730e6f15f0d5ec0b2a"
  },
  {
    "url": "assets/js/43.7c136f83.js",
    "revision": "f0c2b3d1a857b8c0dc678896e6f6b280"
  },
  {
    "url": "assets/js/44.bcd10082.js",
    "revision": "893038a08064d54c908ba04dfeee7443"
  },
  {
    "url": "assets/js/45.2f16133b.js",
    "revision": "27b85d7d7e084407c8ab0d0293843cd6"
  },
  {
    "url": "assets/js/46.a5e324d4.js",
    "revision": "fe3f7000ae8b47d5ef618649a04616da"
  },
  {
    "url": "assets/js/47.7604ad16.js",
    "revision": "95bd2da7a3966733f47cba33fc826430"
  },
  {
    "url": "assets/js/48.57274434.js",
    "revision": "c0cb575ec080c0b524c8b50bd3f1f808"
  },
  {
    "url": "assets/js/49.166d3314.js",
    "revision": "383ee9c6c87c54b364f63d659c4782fb"
  },
  {
    "url": "assets/js/5.ed52b125.js",
    "revision": "4f9ce5f39ed04449bc6fe9c023c7193a"
  },
  {
    "url": "assets/js/50.8709a05d.js",
    "revision": "af5e1b1a54699af6456d049db4193971"
  },
  {
    "url": "assets/js/51.b1d8a8c4.js",
    "revision": "3867859be7f7d4ebadcc3cdb01e8cb97"
  },
  {
    "url": "assets/js/52.a4562a0b.js",
    "revision": "6c2f4ef8199b1a2b6cc12a1e87c3eb4d"
  },
  {
    "url": "assets/js/53.a8785af6.js",
    "revision": "37016316e1ca0b1ba84f83bf4b94639a"
  },
  {
    "url": "assets/js/54.7d1e5f8c.js",
    "revision": "34609f1e35b8d5d226400b5072afaa75"
  },
  {
    "url": "assets/js/55.a460256c.js",
    "revision": "3df7086dfa9bca78a5013555c854f0a5"
  },
  {
    "url": "assets/js/56.5fcf728a.js",
    "revision": "b147c5a08189c610b44724d0e4e56200"
  },
  {
    "url": "assets/js/57.cb24f595.js",
    "revision": "f0a79268c3701f2ca91429d563d8bf06"
  },
  {
    "url": "assets/js/58.4618d718.js",
    "revision": "c7c204ef9c431f3db1f585c096c706c9"
  },
  {
    "url": "assets/js/59.7397446b.js",
    "revision": "4941f9f3d9fc19454ce69a970183bf3b"
  },
  {
    "url": "assets/js/6.bb1559fb.js",
    "revision": "12dfabb18dde90b755061341793095ef"
  },
  {
    "url": "assets/js/7.f5a97157.js",
    "revision": "dd9f78e248eb20e67d9dc8a5caf17f1a"
  },
  {
    "url": "assets/js/8.e43c6169.js",
    "revision": "f2a810f91194314761e803388266e295"
  },
  {
    "url": "assets/js/9.0a338082.js",
    "revision": "61c62ff28df22ff19f6e2e00b4648b53"
  },
  {
    "url": "assets/js/app.dbbeb884.js",
    "revision": "8637c636fa7834e4298b19d851fbcd39"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "2cf6aec6405acaa54f2053e423b5bd8c"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "6e8a93234f8643f2ffcd822423065baf"
  },
  {
    "url": "friends/index.html",
    "revision": "c96970ad9f937619ef2a5c538125bd61"
  },
  {
    "url": "index.html",
    "revision": "1b32c46d8e64f2b50ca686dccf4ab7e8"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "dead9de475d97a8a8a5ef856352f0c4c"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "dfb7b7182c8534f16b194eb1a0b55458"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "360ab7614ccdd746ca6cc214b930d19c"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "0986adff3119ff16886c2083ff265a05"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "c27d742138915d19fd1d9088a7e0431a"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "30a3e88530ed4e2d07ab0df7736aa947"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "0194ec6b000851584d1a029fd0c62e75"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "14e694c3049d22af841a0322ccf81b1d"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "1474617c6cb7e18b214ca3b6a2d51594"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "335032360bb39dfec434335cba519310"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "5f7732f1def6ed67752186dc7854bbd6"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "146f3508531ed1594ef10d72e3552f4c"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "73c3dccafccfc0389826eaa49e7a6279"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "76737d07930c641cc483b97a5d0e8855"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "a4fd4f8f5fbbe0eb2c79cc2628150eac"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "ac5a142ccdfe1b04efeecb523e7ea5c0"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "37cc9ddd35f466eb865c3d92c25da36f"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "8e34294f99babe7fa9158c0fefc606fe"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "5d89f8e7df74117448dbaa04a3a7f08b"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "107f580b7d7e1dbbf0f2b48221b2014e"
  },
  {
    "url": "posts/index.html",
    "revision": "2edfece0dd02d567d36274ebdd313658"
  },
  {
    "url": "projects/index.html",
    "revision": "a71d636324f761b07a0f8c2c7ca75221"
  },
  {
    "url": "zh/about/index.html",
    "revision": "3011d8b50ca22405e2a5f3c1026f0bc1"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "36d94eb1994bc87d7d556c829d2b7f34"
  },
  {
    "url": "zh/index.html",
    "revision": "1a2b59a19ba3a4d39911d57fd9e1fbeb"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "82407a655a19de4e6d2f71e0ef586e3e"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "5072a8eabda405a6afaee2658ebce123"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "c820106b98d9ffb4989ba1e9ef8be839"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "68810722a0b23a994224a4f4994882fe"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "9433c9fc6f5555db9e53e05d14afdfe1"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "0b091a438ba0e498280e77bb8811b7a9"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "74edcfb8593f64a3e500f7ba8164310d"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "0e96859425926aa24073153f7b1444a3"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "a4c0c1f7d2852f6542b263ad789cb9e9"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "fd933c97bb3fed70db14712a05b40041"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "4657bcd22d65841439bd3ba10fe8f614"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "f53a7cf12470b187d8e515a50ec35012"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "4a8d1f2b51c5d8548027da072cd75f7b"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "1e7fd89ea1b6c12b24098128f703af05"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "4963940397ac7c5ffb8a6e113ac96a9d"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "48679458ee3806dc273ce50dec2cb31a"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "b577143dce384b70089cc8ed9b9cb008"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "2c004e367808ee6688b8d664a66ec53d"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "28cb1ee1577195566835ab3de66bbf99"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "b769cfddbbcd1e2859039736fac31f66"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "5bd7f941384db21221435bad74b35d4a"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "f64c8c4b6a422ce6ac07b55225423d66"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
