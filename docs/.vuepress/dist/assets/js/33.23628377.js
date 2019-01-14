(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{274:function(t,e,s){"use strict";s.r(e);var a=s(47),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"use-gitlab-ci-to-run-free-scheduled-jobs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-gitlab-ci-to-run-free-scheduled-jobs","aria-hidden":"true"}},[t._v("#")]),t._v(" Use GitLab-CI to run free scheduled jobs")]),t._v(" "),s("p",[t._v("In this topic, I'll introduce how to run scheduled job with GitLab-CI, without the need to have a server running cron job or other application.")]),t._v(" "),s("p",[t._v("GitLab-CI is a continuous integration/deployment tool, it will trigger some scripts (such as build, test, deployment) when there is new deployment or defined interval. GitLab-CI has a free quota of 2,000 minutes running time, which is 1 hour everyday.")]),t._v(" "),s("p",[t._v("If you prefer GitHub than GitLab, Travis CI also offers similar tool for free.")]),t._v(" "),s("p",[t._v("GitLab-CI 和 Travis CI都支持\b定时执行脚本，但是GitLab-CI最多可以支持每小时运行一次，而Travis只支持最多每天运行一次。\nGitLab-CI and Travis CI both support scheduled jobs, however, GitLab-CI supports as often as every hour, while Travis supports as often as every day.")]),t._v(" "),s("p",[t._v("So, why we need to run scheduled job? Here are the use cases:")]),t._v(" "),s("ol",[s("li",[t._v("I need a job to monitor Bitcoin price, when the price is higher or lower than some price, it will notify me to make transaction")]),t._v(" "),s("li",[t._v("I need a job to monitor price of a product, when it's lower than a certain price, it will notify me to make order")]),t._v(" "),s("li",[t._v("I need a job to keep Heroku app up and running (Prevent it to sleep)")])]),t._v(" "),s("p",[t._v("First, create a "),s("code",[t._v(".gitlab-ci.yml")]),t._v(" file in your repo")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("test:\n  script:\n    - bash scripts/script_a.sh\n")])])]),s("p",[t._v("This file defined a task called "),s("code",[t._v("test")]),t._v(", and specified it to run "),s("code",[t._v("script_a.sh")]),t._v(" file under "),s("code",[t._v("scripts")]),t._v(" folder with bash")]),t._v(" "),s("p",[t._v("Now, let's create the "),s("code",[t._v("script_a.sh")]),t._v(" file under "),s("code",[t._v("scripts")]),t._v(" folder:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#!/bin/sh\ncurl curl http://ip-api.com/json\n")])])]),s("blockquote",[s("p",[t._v("Note: job name, script file, script file folder can all be changed with your own need.")])]),t._v(" "),s("p",[t._v("Upload the repo including "),s("code",[t._v(".gitlab-ci.yml")]),t._v(" to GitLab, it will trigger the job automatically, and you can go to "),s("code",[t._v("CI/CD - Jobs")]),t._v(" on the repo admin.")]),t._v(" "),s("p",[t._v("You can set schedule in "),s("code",[t._v("CI/CD - Schedules")]),t._v(" section. It provides options as every day, every week, every month, or customize like cron interval. You can go to https://crontab.guru to test out cron interval syntax. Technically you can set it to every minute, however, GitLab is only able to run it every hour.")]),t._v(" "),s("p",[t._v("Now, the job will only run based on your schedule settings.")]),t._v(" "),s("p",[t._v("If you go to "),s("code",[t._v("CI/CD - Jobs")]),t._v(" to check logs, you will find something like this:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("Running with gitlab-runner 11.1.0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("081978aa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  on docker-auto-scale 0277ea0f\nUsing Docker executor with image ruby:2.5 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nPulling docker image ruby:2.5 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nUsing docker image sha256:1d8640b852eb145393da754ec38a4153edcf473a249448b7a271cea5f06016fa "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ruby:2.5 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nRunning on runner-0277ea0f-project-7572283-concurrent-0 via runner-0277ea0f-srm-1532409609-e458cf74"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nCloning repository"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nCloning into "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/builds/example/scheduled-jobs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nChecking out 67e03220 as master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nSkipping Git submodules setup\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" scripts/script_a.sh\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0\n100   463  100   463    0     0    717      0 --:--:--\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"as"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AS15169 Google LLC"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"city"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mountain View"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"country"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"United States"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"countryCode"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"US"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isp"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Googlebot"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lat"')]),t._v(":37.4192,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lon"')]),t._v(":-122.0574,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Googlebot"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"66.249.64.149"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"region"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CA"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"regionName"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"California"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timezone"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"America/Los_Angeles"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zip"')]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"94043"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n --:--:-- --:--:--   716\nJob succeeded\n")])])])])},[],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);