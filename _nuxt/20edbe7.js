(window.webpackJsonp=window.webpackJsonp||[]).push([[15,6,12,13,14],{492:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return v}));var n=r(493),o=r(0),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");n.a},493:function(t,e,r){"use strict";r(14),r(15),r(17),r(3),r(9),r(16),r(23);var n=r(2),o=(r(26),r(176),r(177),r(495),r(214)),c=r(222),l=r(100),d=r(8);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},495:function(t,e,r){var content=r(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("e23b7040",content,!0,{sourceMap:!1})},496:function(t,e,r){var n=r(24)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},497:function(t,e,r){var content=r(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("7132a15d",content,!0,{sourceMap:!1})},498:function(t,e,r){var n=r(24)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},499:function(t,e,r){var map={"./hash_tag.svg":500,"./icon-hashtag.svg":501,"./nuxtjs_vuetify.png":502,"./nuxtjs_vuetify2.png":503,"./programming/aws.svg":504,"./programming/c-plusplus.svg":505,"./programming/c-sharp.svg":506,"./programming/c.svg":507,"./programming/css-3.svg":508,"./programming/docker.svg":509,"./programming/git-icon.svg":510,"./programming/git.svg":511,"./programming/html-5.svg":512,"./programming/java.svg":513,"./programming/javascript.svg":514,"./programming/mysql.svg":515,"./programming/nuxt-icon.svg":516,"./programming/php.svg":517,"./programming/python.svg":518,"./programming/unity.svg":519,"./programming/vue.svg":520,"./takoyaki.png":308};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=499},500:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4="},501:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4="},502:function(t,e,r){t.exports=r.p+"img/nuxtjs_vuetify.7c6dd6c.png"},503:function(t,e,r){t.exports=r.p+"img/nuxtjs_vuetify2.7c6dd6c.png"},504:function(t,e,r){t.exports=r.p+"img/aws.b6e95e0.svg"},505:function(t,e,r){t.exports=r.p+"img/c-plusplus.c4a42e1.svg"},506:function(t,e,r){t.exports=r.p+"img/c-sharp.e2c0510.svg"},507:function(t,e,r){t.exports=r.p+"img/c.2f52df3.svg"},508:function(t,e,r){t.exports=r.p+"img/css-3.e7a9de3.svg"},509:function(t,e,r){t.exports=r.p+"img/docker.4362ba8.svg"},510:function(t,e,r){t.exports=r.p+"img/git-icon.fd38164.svg"},511:function(t,e,r){t.exports=r.p+"img/git.5021482.svg"},512:function(t,e,r){t.exports=r.p+"img/html-5.e7638e3.svg"},513:function(t,e,r){t.exports=r.p+"img/java.83165df.svg"},514:function(t,e,r){t.exports=r.p+"img/javascript.fd46ca4.svg"},515:function(t,e,r){t.exports=r.p+"img/mysql.88631d0.svg"},516:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMTcycHgiIHZpZXdCb3g9IjAgMCAyNTYgMTcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICAgIDx0aXRsZT5OdXh0SlM8L3RpdGxlPgogICAgPGc+CgkJCQk8cGF0aCBkPSJNMTEyLjk3MzQxNiw5LjI0OTY3ODkgQzEwNS44MDA2MDIsLTMuMDgzMjI2MyA4Ny44Njg5OTU0LC0zLjA4MzIyNjMgODAuNjk2MTgxNSw5LjI0OTY3ODkgTDIuNTI0NDYwNDYsMTQzLjY1OTYyOCBDLTQuNjQ4MjY3NzYsMTU1Ljk5Mjk2MSA0LjMxNzYyMTEsMTcxLjQwODk4NSAxOC42NjMxMjA0LDE3MS40MDg5ODUgTDc5LjY4ODMyMSwxNzEuNDA4OTg1IEM3My41NTg0OTA2LDE2Ni4wNTE4NjIgNzEuMjg4MzQxNywxNTYuNzg0MDg3IDc1LjkyNzE1NTUsMTQ4LjgzMjU2OSBMMTM1LjEzMDkyNiw0Ny4zNDc5MTc1IEwxMTIuOTczNDE2LDkuMjQ5Njc4OSBaIiBmaWxsPSIjODBFRUMwIj48L3BhdGg+CgkJCQk8cGF0aCBkPSJNMTYyLjUwNDYzOCwzOC43MzI5MTY2IEMxNjguNDQwODYzLDI4LjY0MjMxODkgMTgzLjI4MDc4NCwyOC42NDIzMTg5IDE4OS4yMTcwMDksMzguNzMyOTE2NiBMMjUzLjkxMDY4NSwxNDguNzA0NDk4IEMyNTkuODQ2OTEsMTU4Ljc5NTA5NiAyNTIuNDI2OTUsMTcxLjQwODU1NyAyNDAuNTU0NDk5LDE3MS40MDg1NTcgTDExMS4xNjcxNDgsMTcxLjQwODU1NyBDOTkuMjk1MTI2LDE3MS40MDg1NTcgOTEuODc0NzM3NCwxNTguNzk1MDk2IDk3LjgxMDk2MjYsMTQ4LjcwNDQ5OCBMMTYyLjUwNDYzOCwzOC43MzI5MTY2IFoiIGZpbGw9IiMwMERDODIiPjwvcGF0aD4KCQk8L2c+Cjwvc3ZnPgo="},517:function(t,e,r){t.exports=r.p+"img/php.8c49448.svg"},518:function(t,e,r){t.exports=r.p+"img/python.6a8b299.svg"},519:function(t,e,r){t.exports=r.p+"img/unity.ffa4e31.svg"},520:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjIyMXB4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjA0LjgsMCBMMjU2LDAgTDEyOCwyMjAuOCBMMCwwIEw1MC41NiwwIEw5Ny45MiwwIEwxMjgsNTEuMiBMMTU3LjQ0LDAgTDIwNC44LDAgWiIgZmlsbD0iIzQxQjg4MyI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0wLDAgTDEyOCwyMjAuOCBMMjU2LDAgTDIwNC44LDAgTDEyOCwxMzIuNDggTDUwLjU2LDAgTDAsMCBaIiBmaWxsPSIjNDFCODgzIj48L3BhdGg+CgkJPHBhdGggZD0iTTUwLjU2LDAgTDEyOCwxMzMuMTIgTDIwNC44LDAgTDE1Ny40NCwwIEwxMjgsNTEuMiBMOTcuOTIsMCBMNTAuNTYsMCBaIiBmaWxsPSIjMzU0OTVFIj48L3BhdGg+Cgk8L2c+Cjwvc3ZnPgo="},521:function(t,e,r){var content=r(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("58842e33",content,!0,{sourceMap:!1})},526:function(t,e,r){"use strict";r(521)},527:function(t,e,r){var n=r(24)(!1);n.push([t.i,".card-category[data-v-6c2e461a]{display:inline-block;font-size:.8em;text-transform:none;background-color:#ffc75e;border-radius:5px;padding:0 2px;margin:0}",""]),t.exports=n},528:function(t,e,r){"use strict";r(14),r(15),r(17),r(3),r(9),r(16),r(23);var n=r(2),o=(r(497),r(27));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},532:function(t,e,r){"use strict";r.r(e);var n=r(12),o=r(11),c=r(20),l=r(19),d=r(5),v=r(7),f=(r(9),r(3),r(40),r(22));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var M=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r)}(f.Vue);M([Object(f.Prop)({type:String,required:!0})],j.prototype,"imgSrc",void 0);var y=j=M([f.Component],j),x=r(32),m=r(30),O=r.n(m),D=r(172),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-img",{attrs:{src:r(499)("./"+t.imgSrc),"aspect-ratio":1.6,contain:""}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VImg:D.a})},533:function(t,e,r){"use strict";r.r(e);var n=r(12),o=r(11),c=r(20),l=r(19),d=r(5),v=r(7),f=(r(9),r(3),r(40),r(22));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var M=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r)}(f.Vue);M([Object(f.Prop)({type:Boolean,required:!0})],j.prototype,"hover",void 0);var y=j=M([f.Component],j),x=r(32),m=r(30),O=r.n(m),D=r(101),w=r(205),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-fade-transition",[t.hover?r("v-overlay",{attrs:{absolute:"","z-index":0}},[r("div",{staticClass:"text-center"},[t._t("default")],2)]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VFadeTransition:D.b,VOverlay:w.a})},534:function(t,e,r){"use strict";r.r(e);r(526);var n=r(32),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"card-category"},[t._t("default")],2)}),[],!1,null,"6c2e461a",null);e.default=component.exports},535:function(t,e,r){"use strict";r.r(e);var n=r(32),o=r(30),c=r.n(o),l=r(492),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-card-title",{staticClass:"text-body-1",attrs:{height:"100%"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCardTitle:l.c})},545:function(t,e,r){"use strict";r(14),r(15),r(17),r(3),r(9),r(16),r(23);var n=r(2),o=r(111),c=r(60),l=r(78),d=r(8),v=r(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(d.a)(o.a,c.a).extend({name:"VLazy",directives:{intersect:l.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(v.n)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,r){this.isActive||(this.isActive=r)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},551:function(t,e,r){"use strict";r.r(e);var n=r(12),o=r(11),c=r(20),l=r(19),d=r(5),v=r(7),f=(r(9),r(3),r(40),r(22));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var M=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r)}(f.Vue);M([Object(f.Prop)({type:Object,required:!0})],j.prototype,"blog",void 0);var y=j=M([f.Component],j),x=r(32),m=r(30),O=r.n(m),D=r(493),w=r(528),I=r(465),N=r(545),T=r(200),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-lazy",{attrs:{options:{threshold:1},transition:"fade-transition",height:"100%"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"rounded-card d-flex flex-column",attrs:{nuxt:"",light:"",hover:"",color:"white",height:"100%",width:"100%",ripple:{center:!0},to:t.blog.path}},[r("v-responsive",{attrs:{"aspect-ratio":1}},[r("PagesBlogsCardImg",{attrs:{"img-src":t.blog.imgsrc||"nuxtjs_vuetify.png"}},[r("PagesBlogsCardCategory",[t._v("\n            "+t._s(t.blog.category)+"\n          ")])],1),t._v(" "),r("v-divider"),t._v(" "),r("PagesBlogsCardTitle",[t._v("\n          "+t._s(t.blog.title)+"\n        ")]),t._v(" "),r("MaterialsOverRayTransition",{attrs:{hover:n}},[t._v("\n          "+t._s(t.blog.description)+"\n        ")])],1)],1)]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{PagesBlogsCardCategory:r(534).default,PagesBlogsCardImg:r(532).default,PagesBlogsCardTitle:r(535).default,MaterialsOverRayTransition:r(533).default}),O()(component,{VCard:D.a,VDivider:w.a,VHover:I.a,VLazy:N.a,VResponsive:T.a})}}]);