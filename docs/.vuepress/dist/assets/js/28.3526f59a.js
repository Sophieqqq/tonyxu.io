(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{279:function(e,t,s){"use strict";s.r(t);var r=s(47),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"rest-api-design-interview-preparation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-api-design-interview-preparation","aria-hidden":"true"}},[e._v("#")]),e._v(" REST API Design Interview Preparation")]),e._v(" "),s("p",[e._v("REST API has become a very popular concept for designing back-end service interface. Most platforms provide REST API as unified interface for web/native applications. If you are going to interview for a job that will require REST API knowledge, you are encouraged to be well prepared for it. Below is my own summary for REST API interview. Hopefully it's helpful for you as well.")]),e._v(" "),s("h2",{attrs:{id:"principle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#principle","aria-hidden":"true"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),s("ul",[s("li",[e._v("Self-describing")]),e._v(" "),s("li",[e._v("Simple")]),e._v(" "),s("li",[e._v("Safe")])]),e._v(" "),s("h2",{attrs:{id:"preparation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparation","aria-hidden":"true"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),s("ul",[s("li",[e._v("("),s("strong",[e._v("WHO")]),e._v(") Identify users\n"),s("ul",[s("li",[e._v("Internal or External")]),e._v(" "),s("li",[e._v("Roles (Developer, Admin, Customer, Support...)")])])]),e._v(" "),s("li",[e._v("("),s("strong",[e._v("HOW")]),e._v(") Identify scenario, use cases")]),e._v(" "),s("li",[e._v("("),s("strong",[e._v("WHAT")]),e._v(") What functionality or resource will be exposed by API")]),e._v(" "),s("li",[s("strong",[e._v("Clarify and confirm above and continue to API design")])])]),e._v(" "),s("p",[e._v("Note:")]),e._v(" "),s("ul",[s("li",[e._v("Don't guess")]),e._v(" "),s("li",[e._v("Don't make things up")])]),e._v(" "),s("h2",{attrs:{id:"design-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design-flow","aria-hidden":"true"}},[e._v("#")]),e._v(" Design Flow")]),e._v(" "),s("ul",[s("li",[e._v("Determine what types of resources an API provides")]),e._v(" "),s("li",[e._v("Determine the relationships between resources")]),e._v(" "),s("li",[e._v("Decide the resource name schemes based on types and relationships")]),e._v(" "),s("li",[e._v("Decide the resource schemas")]),e._v(" "),s("li",[e._v("Attach minimum set of methods to resources")])]),e._v(" "),s("h2",{attrs:{id:"api-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-design","aria-hidden":"true"}},[e._v("#")]),e._v(" API Design")]),e._v(" "),s("p",[e._v("Design how to expose the functionality and resource")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("End point")]),e._v(" "),s("ul",[s("li",[e._v("https://"),s("code",[e._v("api_domain")]),e._v("/"),s("code",[e._v("version")]),e._v("/"),s("code",[e._v("collection")]),e._v("/")]),e._v(" "),s("li",[e._v("https://"),s("code",[e._v("api_domain")]),e._v("/"),s("code",[e._v("version")]),e._v("/"),s("code",[e._v("collection")]),e._v("/"),s("code",[e._v("resource")]),e._v("/")]),e._v(" "),s("li",[e._v("https://"),s("code",[e._v("api_domain")]),e._v(": Can respond information such as API version, list of top level collections, list of singleton resources")]),e._v(" "),s("li",[e._v("Use "),s("code",[e._v("Noun")]),e._v(" rather than "),s("code",[e._v("Verbs")])])])]),e._v(" "),s("li",[s("p",[e._v("Method")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("GET")]),e._v("/"),s("code",[e._v("POST")]),e._v("/"),s("code",[e._v("PATCH")]),e._v("/"),s("code",[e._v("PUT")]),e._v("/"),s("code",[e._v("DELETE")])])])]),e._v(" "),s("li",[s("p",[e._v("Request Header")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Authorization")]),e._v(": Bearer "),s("code",[e._v("access_token")])]),e._v(" "),s("li",[s("code",[e._v("Accept")]),e._v(": To request for response in a specified content-type")]),e._v(" "),s("li",[s("code",[e._v("Content-Type")]),e._v(": Content type for the request body")]),e._v(" "),s("li",[e._v("...")])])]),e._v(" "),s("li",[s("p",[e._v("Request Parameters")]),e._v(" "),s("ul",[s("li",[e._v("Filtering: "),s("code",[e._v("type")]),e._v("=news,photo&"),s("code",[e._v("days")]),e._v("=sunday")]),e._v(" "),s("li",[e._v("Sorting: "),s("code",[e._v("sort")]),e._v("=create_time,-creator")]),e._v(" "),s("li",[e._v("Paging: "),s("code",[e._v("offset")]),e._v("=100&"),s("code",[e._v("limit")]),e._v("=100")]),e._v(" "),s("li",[e._v("Search/Query: "),s("code",[e._v("q")]),e._v("=AI")]),e._v(" "),s("li",[e._v("Access Token: "),s("code",[e._v("access_token")]),e._v("=")])])]),e._v(" "),s("li",[s("p",[e._v("Response Status Codes")]),e._v(" "),s("ul",[s("li",[e._v("Standard HTTP status codes should be used")])])]),e._v(" "),s("li",[s("p",[e._v("Response Header")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Content-Type")])]),e._v(" "),s("li",[s("code",[e._v("ETag")])]),e._v(" "),s("li",[e._v("...")])])]),e._v(" "),s("li",[s("p",[e._v("Response Body (in JSON format)")])]),e._v(" "),s("li",[s("p",[e._v("Error Handling")])])]),e._v(" "),s("h2",{attrs:{id:"example-gmail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-gmail","aria-hidden":"true"}},[e._v("#")]),e._v(" Example (Gmail)")]),e._v(" "),s("h3",{attrs:{id:"resource-model-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-model-examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Resource Model Examples")]),e._v(" "),s("ul",[s("li",[e._v("API service: "),s("code",[e._v("gmail.googleapis.com")])]),e._v(" "),s("li",[e._v("A collection of users: "),s("code",[e._v("users/*")]),e._v(". Each user has the following resources.\n"),s("ul",[s("li",[e._v("A collection of messages: "),s("code",[e._v("users/*/messages/*")]),e._v(".")]),e._v(" "),s("li",[e._v("A collection of threads: "),s("code",[e._v("users/*/threads/*")]),e._v(".")]),e._v(" "),s("li",[e._v("A collection of labels: "),s("code",[e._v("users/*/labels/*")]),e._v(".")]),e._v(" "),s("li",[e._v("A collection of change history: "),s("code",[e._v("users/*/history/*")]),e._v(".")]),e._v(" "),s("li",[e._v("A resource representing the user profile: "),s("code",[e._v("users/*/profile")]),e._v(".")]),e._v(" "),s("li",[e._v("A resource representing user settings: "),s("code",[e._v("users/*/settings")]),e._v(".")])])])]),e._v(" "),s("h3",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[e._v("#")]),e._v(" Response")]),e._v(" "),s("h4",{attrs:{id:"success-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#success-response","aria-hidden":"true"}},[e._v("#")]),e._v(" Success Response")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lwj2lk3jlk2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello World"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"pagination"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"offset"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"limit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"total"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3464")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    //...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h4",{attrs:{id:"error-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-response","aria-hidden":"true"}},[e._v("#")]),e._v(" Error Response")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ERROR_CODE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" // "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"INVALID-REQUEST"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"longer error description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"link"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"An documentation url for error details and solutions"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h2",{attrs:{id:"most-used-http-status-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#most-used-http-status-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Most-used HTTP Status Code")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Code")]),e._v(" "),s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("200")]),e._v(" "),s("td",[s("code",[e._v("OK")])]),e._v(" "),s("td",[e._v("The request has succeeded")])]),e._v(" "),s("tr",[s("td",[e._v("201")]),e._v(" "),s("td",[s("code",[e._v("Created")])]),e._v(" "),s("td",[e._v("The request has succeeded and a new resource has been created")])]),e._v(" "),s("tr",[s("td",[e._v("204")]),e._v(" "),s("td",[s("code",[e._v("No Content")])]),e._v(" "),s("td",[e._v("There is no content to send for this request")])]),e._v(" "),s("tr",[s("td",[e._v("301")]),e._v(" "),s("td",[s("code",[e._v("Moved Permanently")])]),e._v(" "),s("td",[e._v("the URI of the requested resource has been changed permanently")])]),e._v(" "),s("tr",[s("td",[e._v("302")]),e._v(" "),s("td",[s("code",[e._v("Found")])]),e._v(" "),s("td",[e._v("The URI of requested resource has been changed temporarily")])]),e._v(" "),s("tr",[s("td",[e._v("400")]),e._v(" "),s("td",[s("code",[e._v("Bad Request")])]),e._v(" "),s("td",[e._v("The server could not understand the request due to invalid syntax")])]),e._v(" "),s("tr",[s("td",[e._v("401")]),e._v(" "),s("td",[s("code",[e._v("Unauthorized")])]),e._v(" "),s("td",[e._v("The client must authenticate itself to get the requested response")])]),e._v(" "),s("tr",[s("td",[e._v("403")]),e._v(" "),s("td",[s("code",[e._v("Forbidden")])]),e._v(" "),s("td",[e._v("The client does not have access rights to the content")])]),e._v(" "),s("tr",[s("td",[e._v("404")]),e._v(" "),s("td",[s("code",[e._v("Not Found")])]),e._v(" "),s("td",[e._v("The server can not find requested resource")])]),e._v(" "),s("tr",[s("td",[e._v("405")]),e._v(" "),s("td",[s("code",[e._v("Method Not Allowed")])]),e._v(" "),s("td",[e._v("The request method has been disabled and cannot be used")])]),e._v(" "),s("tr",[s("td",[e._v("408")]),e._v(" "),s("td",[s("code",[e._v("Request Timeout")])]),e._v(" "),s("td",[e._v("The server would like to shut down this unused connection")])]),e._v(" "),s("tr",[s("td",[e._v("409")]),e._v(" "),s("td",[s("code",[e._v("Conflict")])]),e._v(" "),s("td",[e._v("The request conflicts with the current state of the server")])]),e._v(" "),s("tr",[s("td",[e._v("411")]),e._v(" "),s("td",[s("code",[e._v("Length Required")])]),e._v(" "),s("td",[e._v("Content-Length header field is not defined and the server requires it")])]),e._v(" "),s("tr",[s("td",[e._v("414")]),e._v(" "),s("td",[s("code",[e._v("URI Too Long")])]),e._v(" "),s("td",[e._v("The URI is longer than the server is willing to interpret")])]),e._v(" "),s("tr",[s("td",[e._v("415")]),e._v(" "),s("td",[s("code",[e._v("Unsupported Media Type")])]),e._v(" "),s("td",[e._v("The media format of the requested data is not supported")])]),e._v(" "),s("tr",[s("td",[e._v("429")]),e._v(" "),s("td",[s("code",[e._v("Too Many Requests")])]),e._v(" "),s("td",[e._v('The user has sent too many requests ("rate limiting")')])]),e._v(" "),s("tr",[s("td",[e._v("500")]),e._v(" "),s("td",[s("code",[e._v("Internal Server Error")])]),e._v(" "),s("td",[e._v("The server has encountered a situation it doesn't know how to handle")])]),e._v(" "),s("tr",[s("td",[e._v("502")]),e._v(" "),s("td",[s("code",[e._v("Bad Gateway")])]),e._v(" "),s("td",[e._v("The server got an invalid response")])]),e._v(" "),s("tr",[s("td",[e._v("503")]),e._v(" "),s("td",[s("code",[e._v("Service Unavailable")])]),e._v(" "),s("td",[e._v("The server is not ready to handle the request")])]),e._v(" "),s("tr",[s("td",[e._v("504")]),e._v(" "),s("td",[s("code",[e._v("Gateway Timeout")])]),e._v(" "),s("td",[e._v("The server is acting as a gateway and cannot get a response in time")])])])]),e._v(" "),s("h2",{attrs:{id:"what-else"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-else","aria-hidden":"true"}},[e._v("#")]),e._v(" What else")]),e._v(" "),s("ul",[s("li",[e._v("Security\n"),s("ul",[s("li",[e._v("HTTPS: HTTPS everywhere")]),e._v(" "),s("li",[e._v("Access Control\n"),s("ul",[s("li",[e._v("Authentication")]),e._v(" "),s("li",[e._v("JWT")]),e._v(" "),s("li",[e._v("API Key")])])]),e._v(" "),s("li",[e._v("User Role")]),e._v(" "),s("li",[e._v("Input Validation\n"),s("ul",[s("li",[e._v("Length, Range, Format, Type")]),e._v(" "),s("li",[e._v("Define request size limit")])])]),e._v(" "),s("li",[e._v("CORS\n"),s("ul",[s("li",[e._v("Support CORS headers for all public facing APIs and allow origin of "),s("code",[e._v("*")])])])])])]),e._v(" "),s("li",[e._v("Pagination")]),e._v(" "),s("li",[e._v("Monitoring\n"),s("ul",[s("li",[s("code",[e._v("/heath")]),e._v(": "),s("code",[e._v("200 OK")]),e._v(" or "),s("code",[e._v("503 Service Unavailable")]),e._v(", for load balancers and service discovery solutions")]),e._v(" "),s("li",[s("code",[e._v("/version")]),e._v(": Version")]),e._v(" "),s("li",[s("code",[e._v("/status")]),e._v(": "),s("code",[e._v("200 OK")]),e._v(" or "),s("code",[e._v("500 Internal Server Error")])]),e._v(" "),s("li",[s("code",[e._v("/metrics")]),e._v(": Uptime in seconds, average response time, number of 500 errors")])])])])])},[],!1,null,null,null);a.options.__file="README.md";t.default=a.exports}}]);