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
    "revision": "4d68a9c5e31a9471ddee2787b65f0c9a"
  },
  {
    "url": "about/index.html",
    "revision": "d28ea94258c31ee273ee7e275413420d"
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
    "url": "assets/js/10.9197d645.js",
    "revision": "08f8c236aeeacb2d5f44d3843e3b4e37"
  },
  {
    "url": "assets/js/11.5c240e7a.js",
    "revision": "a93a40e8379dd790612d8cb1ae5b43c4"
  },
  {
    "url": "assets/js/12.43813f67.js",
    "revision": "f1696f3f849df74ef3e340e62230a36d"
  },
  {
    "url": "assets/js/13.9f1ed6b9.js",
    "revision": "69919f73d2a634cbcc7754c77e654153"
  },
  {
    "url": "assets/js/14.fc41af6d.js",
    "revision": "667adcdd4e751a9f46c8ff5b6c4969f9"
  },
  {
    "url": "assets/js/15.772010f0.js",
    "revision": "e940972fc54c849c611ca11182fc77e9"
  },
  {
    "url": "assets/js/16.be1b408c.js",
    "revision": "0102430dba5e8e837f13bb7f1c0779ee"
  },
  {
    "url": "assets/js/17.240b13cf.js",
    "revision": "861687eb3941e5ebf055d689f55781a3"
  },
  {
    "url": "assets/js/18.9ab86a5d.js",
    "revision": "065743b2edfc9d8b18ea69a1451412fd"
  },
  {
    "url": "assets/js/19.c6f36e70.js",
    "revision": "56eb6c9ff3d0ce473d8f9d66dbc49127"
  },
  {
    "url": "assets/js/2.31767f04.js",
    "revision": "458eeaa5eace17b66650d5c6d02757e1"
  },
  {
    "url": "assets/js/20.4a569e26.js",
    "revision": "103243ab29a3c4980988551fac2929f4"
  },
  {
    "url": "assets/js/21.863e427d.js",
    "revision": "0c075914dce109116831e7ddf3dcd521"
  },
  {
    "url": "assets/js/22.e93e3e08.js",
    "revision": "beb68e44f3b30b1bbd0eaf4127646d4c"
  },
  {
    "url": "assets/js/23.47cce37d.js",
    "revision": "d72e187595cd99154cefe83be022bd98"
  },
  {
    "url": "assets/js/24.9bc1d72c.js",
    "revision": "e1c92d06d335d6a6772efc6cfe010062"
  },
  {
    "url": "assets/js/25.fc426dff.js",
    "revision": "4b3475f4b4dd24a3bb26274c72c8174d"
  },
  {
    "url": "assets/js/26.ee481978.js",
    "revision": "ca3e941707dfeb09ea6ffcd918aedb31"
  },
  {
    "url": "assets/js/27.8f1bc96d.js",
    "revision": "7516076323b3ead8ca27029876360080"
  },
  {
    "url": "assets/js/28.2ce5e617.js",
    "revision": "6aecd37290d2ebda8c3e5e7af749c32f"
  },
  {
    "url": "assets/js/29.a98718a5.js",
    "revision": "eef3a1922f8a26eff8d72884883517d8"
  },
  {
    "url": "assets/js/3.48902daf.js",
    "revision": "a0d0c58e6127526275eeca68e794c90a"
  },
  {
    "url": "assets/js/30.07c2d9a1.js",
    "revision": "35b0c315fdba05bc0a780fdf154b28e8"
  },
  {
    "url": "assets/js/31.08c9480d.js",
    "revision": "0138425a55b1826f470f0509873aecb0"
  },
  {
    "url": "assets/js/32.04bf30a7.js",
    "revision": "8c36cc4809b0cc3dd8bd5958e42bf460"
  },
  {
    "url": "assets/js/33.f82a3ba3.js",
    "revision": "3c75825fbd52bbc181534ad4c2a36394"
  },
  {
    "url": "assets/js/34.cbfca3eb.js",
    "revision": "82835a65fd34317484efc18421ed7cc0"
  },
  {
    "url": "assets/js/35.5f954459.js",
    "revision": "207b615184c79d8d80fb8721247f7897"
  },
  {
    "url": "assets/js/36.a074997e.js",
    "revision": "514946ca31e599dc2df1a83cad78e0e0"
  },
  {
    "url": "assets/js/37.ac5348c3.js",
    "revision": "e91d70ee163dd90a3820cfbdc8f7feaf"
  },
  {
    "url": "assets/js/38.c3b9f779.js",
    "revision": "bcdf8a60e2737b985b03ca2074859ad3"
  },
  {
    "url": "assets/js/39.e26e453c.js",
    "revision": "35aa14d6d9edf278e1524c5cc5295ee8"
  },
  {
    "url": "assets/js/4.e70ce108.js",
    "revision": "ad643dda572d6bfb5afbf9d924f86da0"
  },
  {
    "url": "assets/js/40.825afea5.js",
    "revision": "c8cba5fcd3fcf47aadbe8f7c1f2b71cc"
  },
  {
    "url": "assets/js/41.5c459d8e.js",
    "revision": "cb675921c002340beb5b245aa1783687"
  },
  {
    "url": "assets/js/42.a327d287.js",
    "revision": "b580a86daa81bf26d2b053fe50b4f180"
  },
  {
    "url": "assets/js/43.754227a4.js",
    "revision": "dca3f13a102aead1b0373923f6dd0f0a"
  },
  {
    "url": "assets/js/44.88df1868.js",
    "revision": "b32e655a0f7f9adf63ccb7e0b25a17cf"
  },
  {
    "url": "assets/js/45.8b31baf1.js",
    "revision": "2218521c66d37c754b5fe25b0d5f9ff8"
  },
  {
    "url": "assets/js/46.a68a6dea.js",
    "revision": "86514c521151338a9aabae7ef36ba27d"
  },
  {
    "url": "assets/js/47.27491374.js",
    "revision": "9523df393f225473390587754c1a4049"
  },
  {
    "url": "assets/js/48.3a342a3d.js",
    "revision": "ab282b8d3e3f0497637de178d6a5b5d1"
  },
  {
    "url": "assets/js/49.c580aaab.js",
    "revision": "f16531ec29954ec9e15e60d33191b30d"
  },
  {
    "url": "assets/js/5.3ecb7e68.js",
    "revision": "61d90f1ff3c0401a3b620542785988ab"
  },
  {
    "url": "assets/js/50.1cb0320a.js",
    "revision": "78882b117ce9f3ca18554380914e8f0e"
  },
  {
    "url": "assets/js/51.10fbd5ec.js",
    "revision": "f316b3cebc65e14b4605b2238abfcf87"
  },
  {
    "url": "assets/js/52.245e095f.js",
    "revision": "39229babbac32f5fb6521f0046f45450"
  },
  {
    "url": "assets/js/53.58ce8fc7.js",
    "revision": "35e2a2014e84e1801447eb6f4828c121"
  },
  {
    "url": "assets/js/54.3b368fa1.js",
    "revision": "9d4b3c29c33429404596e8883e625715"
  },
  {
    "url": "assets/js/55.1b10fd42.js",
    "revision": "de5c082c97cabc942bcbd9d79a357746"
  },
  {
    "url": "assets/js/56.b3d4fb01.js",
    "revision": "aac36197085d32c81b4c1bd21e531ac0"
  },
  {
    "url": "assets/js/57.c1f403f7.js",
    "revision": "3895c711434d72c4884fb172066493a4"
  },
  {
    "url": "assets/js/58.391f8406.js",
    "revision": "b2b817db12d454976a0369ada234f949"
  },
  {
    "url": "assets/js/59.714ba06b.js",
    "revision": "c2fd02bdb6c3665ca4df861e4727d880"
  },
  {
    "url": "assets/js/6.fd5c7ba0.js",
    "revision": "18aa0a395c617c991605244232165dcd"
  },
  {
    "url": "assets/js/60.a6f70a7e.js",
    "revision": "da1040d1a7b42ff70d2fe069b258f7dd"
  },
  {
    "url": "assets/js/7.5a9583e7.js",
    "revision": "480f055d74eefa7e99feb285bf3f3a38"
  },
  {
    "url": "assets/js/8.1225fe1f.js",
    "revision": "533edea2b866ebe44b8e722e9e299244"
  },
  {
    "url": "assets/js/9.e6e6a7a9.js",
    "revision": "cbf39cbd2f9c89d49406f8e899004eae"
  },
  {
    "url": "assets/js/app.007501a4.js",
    "revision": "6d97a11ba8362ae70359276541bd63f5"
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
    "revision": "37db8e4154f47b87c6c9391a09225479"
  },
  {
    "url": "index.html",
    "revision": "d0099f2a996e192bff9aaca427b645e7"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "88d7ab0226d25772fa674186ecb5f926"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "eb559833b583bed0e25fe210a2093985"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "4a5dd6ba49cf198f79fbe4d6523d7e16"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "5eaef2f5d17e0e3f47c59a0e2e2bbb99"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "8cc0b2b03b1f70d61e700a7c98f4e705"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "ad1a94ae9e3389708846d400a6484f66"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "8953be9c0dcc6567dbc5c796624a3a05"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "df563bff118d9247d725d2c59f74d0f6"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "f40dc4ac2dbac5237135a6a72efcc873"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "3b28430b9cad21fd3addcc79f02ad4cf"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "547848d42d4ed9d782488b8650eb9474"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "17c14e12c5ba32f7e7946edf1ca7cac4"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "569ed6c7fc9b6730f694b7f2cc928a09"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "8be86b3729c60811310b2712018505d1"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "c31ed51067bd9e8d2a51bfa079515a1b"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "b39fb2ed5465382ea1adeba645c345ab"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "11db5d45f31c2ee077daecc5f240508e"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "61a54362ec8791b7db0f5f95134953c0"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "93fed6cddbea114e28c609dca3b1e4f9"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "5eef0f6eea51defa90b2b295be5e72b4"
  },
  {
    "url": "posts/index.html",
    "revision": "1cba80516f11b70e42a5514b97fcd064"
  },
  {
    "url": "projects/index.html",
    "revision": "6a0d79f650a6be528308dcc94c0b2729"
  },
  {
    "url": "zh/about/index.html",
    "revision": "07adf925064244c826c23ebc6592756b"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "bf8db83489b97a3c106823e9e2291725"
  },
  {
    "url": "zh/index.html",
    "revision": "9ce63c4e8a42fa34a1391f6ba53ac953"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "b90ece62c765a1924cb3deee5c733fef"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "8d1091c96f1d9da34e34c1665b8a1671"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "8538e542bf200326a43a430517300289"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "7f2af64a6871c24134c5eae9bc33bec1"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "cc558d18f3be0fc114ba232b43ecacee"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "045c32532851c04614810ff22e69eb4c"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "a67496cde3a24375d2f651f91d3231ce"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "efb2dbaffed3832324523563d15a88f1"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "8b25b3970c9715ae20705b5eaaf21d75"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "64106b2eb11b2e9b58aaf34b47896353"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "b55578cbe63ac603775bf19c58357b31"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "9a364cfb108cd3bf06e03342dbf5b88a"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "ec9d655f51308a96642b18805e84e915"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "13aef658de63ce7f0cc7749940bb2d2e"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "922fddd5177f6a6ccbe15ff8fd6e9609"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "3b0d0a1a6d4cff3aa42ca2e2af286919"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "ebeef45837af7351b834042b5665246c"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "4a494778ef85d5c83171d04827a700f7"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "453a64590933d1086df05a3636bc3339"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "f71806dbcf5230f2dc421441d64ca1e7"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "4c8f4700cb38d48c1516a4a3280481ee"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "af8fd2be411127ef76f745cf532e08be"
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
