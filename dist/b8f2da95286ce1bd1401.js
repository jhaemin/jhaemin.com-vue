(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(t,e,o){var content=o(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("317f42d4",content,!0,{sourceMap:!1})},154:function(t,e,o){var content=o(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("0f3e5ff1",content,!0,{sourceMap:!1})},164:function(t,e,o){t.exports=o.p+"img/5f76f01.svg"},183:function(t,e,o){"use strict";var n=o(153);o.n(n).a},184:function(t,e,o){(t.exports=o(26)(!1)).push([t.i,".box[data-v-8a38ef54]{position:relative;box-shadow:0 1rem 2rem rgba(0,0,0,.1);background-color:#fff;border-radius:.8rem;padding:1.2rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:transform .2s ease,box-shadow .2s ease}.box.hovered[data-v-8a38ef54]{transform:scale(1.03)}.box.pressed[data-v-8a38ef54]{transform:scale(.92);box-shadow:0 .5rem 1rem rgba(0,0,0,.1)}.box.expand[data-v-8a38ef54]{transition:transform .4s ease,boder-radius .4s;border-radius:0;z-index:8888}.box.expand .box-content[data-v-8a38ef54]{transition:opacity .2s;opacity:0}.box .link[data-v-8a38ef54]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;position:absolute;top:0;right:0;bottom:0;left:0}.box .title[data-v-8a38ef54]{color:#333;font-weight:800}.box .description[data-v-8a38ef54]{color:grey;margin-top:.8rem;line-height:1.3}",""])},185:function(t,e,o){"use strict";var n=o(154);o.n(n).a},186:function(t,e,o){(t.exports=o(26)(!1)).push([t.i,"#home[data-v-c8454c10]{width:calc(100% - 2.6rem);margin:auto;padding-bottom:6rem}#home .intro[data-v-c8454c10]{text-align:center;height:calc(100vh - 150px);height:50vh;min-height:15rem;display:flex}#home .intro .name[data-v-c8454c10]{font-size:2.5rem}#home .intro .path-container[data-v-c8454c10]{width:50rem;max-width:90%;position:relative;margin:auto}#home .intro .path-container svg[data-v-c8454c10]{width:100%}#home .intro .path-container .jhaemin-path[data-v-c8454c10]{left:0;top:0;opacity:0}#home .intro .path-container .jhaemin-complete[data-v-c8454c10]{position:absolute;left:0;top:0;opacity:0}#home .intro .path-container .jhaemin-complete.reveal[data-v-c8454c10]{opacity:1}#home .intro .path-container .jhaemin-complete-noscript[data-v-c8454c10]{width:100%}#home .intro .manifesto[data-v-c8454c10]{margin-top:1rem;font-size:.9rem;color:#333}#home .home-content .about-preview[data-v-c8454c10]{text-align:center}#home .home-content .acts[data-v-c8454c10]{max-width:85rem;margin:5rem auto auto;display:grid;grid-gap:1.3rem 1.3rem;grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))}.popup[data-v-c8454c10]{position:fixed;top:0;left:0;width:100%;height:100%;-webkit-overflow-scrolling:touch;overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:9999}",""])},220:function(t,e,o){"use strict";o.r(e);var n=o(165),r=(o(166),{props:["boxLink","boxExternalLink"],data:function(){return{boxStatus:"",relaseTimeout:null,expanded:!1}},methods:{hoverBox:function(){this.boxStatus="hovered"},pressBox:function(){var t=this;this.boxStatus="pressed",this.relaseTimeout=setTimeout(function(){t.boxStatus=""},1500)},releaseBox:function(){clearTimeout(this.relaseTimeout),this.boxStatus=""},expandBox:function(){var t=this,e=this.$el,o=e.querySelector(".box"),rect=e.getBoundingClientRect(),n=rect.left,r=rect.top,c=rect.width,d=window.innerWidth,l=rect.height,L=window.innerHeight,h="translateX(".concat(-n,"px) translateY(").concat(-r,"px) scaleX(").concat(d/c,") scaleY(").concat(L/l,")");this.expanded=!0,o.style.transformOrigin="0px 0px",o.style.transform=h,setTimeout(function(){o.style.transition="none",o.style.transform="",t.expanded=!1,setTimeout(function(){o.style=""},10)},800)}}}),c=(o(183),o(24)),d={scrollToTop:!1,components:{Box:Object(c.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box-origin"},[o("div",{staticClass:"box",class:[t.boxStatus,{expand:t.expanded}],on:{mouseenter:t.hoverBox,mouseleave:t.releaseBox,mousedown:t.pressBox,mouseup:t.releaseBox,touchstart:t.pressBox,touchend:t.releaseBox,dragstart:function(t){return t.preventDefault()}}},[t.boxLink?o("nuxt-link",{staticClass:"link",attrs:{event:"click",to:t.boxLink?t.boxLink:"/"},nativeOn:{click:function(e){return t.expandBox(e)}}}):t.boxExternalLink?o("a",{staticClass:"link",attrs:{href:t.boxExternalLink?t.boxExternalLink:"",target:"_blank"}}):t._e(),t._v(" "),o("div",{staticClass:"box-content"},[o("h1",{staticClass:"title"},[t._t("title")],2),t._v(" "),o("p",{staticClass:"description"},[t._t("description")],2)])],1)])},[],!1,null,"8a38ef54",null).exports},asyncData:function(){return{project:"nuxt"}},data:function(){return{project:"default",popupEnabled:!1}},mounted:function(){this.$el.querySelector(".home-content"),document.querySelector(".intro");document.documentElement.style.backgroundColor="#fff";sessionStorage.getItem("sawHome"),sessionStorage.setItem("sawHome","true"),Object(n.a)({targets:".jhaemin-path",opacity:1,easing:"easeInOutQuad",duration:100}),Object(n.a)({targets:".jhaemin-path path",strokeDashoffset:[n.a.setDashoffset,0],easing:"easeInOutSine",duration:1500,delay:function(t,i){return 100*i},direction:"alternate",loop:!1}),Object(n.a)({targets:".jhaemin-complete",opacity:1,easing:"cubicBezier(.78,.2,.26,.94)",duration:500,delay:2300})}},l=(o(185),Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",{attrs:{id:"home"}},[n("div",{staticClass:"intro"},[n("div",{staticClass:"path-container",attrs:{"aria-label":"Jang Haemin name"}},[n("svg",{staticClass:"jhaemin-path",attrs:{viewBox:"0 0 639 98",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("path",{attrs:{d:"M1.01399788,53.734375 C1.4384202,68.7846407 11.4892183,77.90625 27.734375,77.90625 C44.5384606,77.90625 54.1269531,69.0151024 54.1269531,53.2226562 L54.1269531,8.2265625 L35.4238281,8.2265625 L35.4238281,53.0761719 C35.4238281,59.1731803 32.6082768,62.5722656 27.4414062,62.5722656 C22.4115022,62.5722656 19.2017878,59.1838313 18.8554164,53.734375 L1.01399788,53.734375 Z",id:"Path",stroke:"#333333","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M98.0214844,76.6855469 L115.552734,76.6855469 L115.552734,40.8203125 C115.552734,30.4808101 106.00332,23.4121094 91.6015625,23.4121094 C76.9534257,23.4121094 67.6959125,29.8238223 66.6960556,40.2109375 L82.6789998,40.2109375 C83.5042948,37.2451738 86.5345207,35.2304688 90.5273438,35.2304688 C94.9471272,35.2304688 98.0214844,37.751767 98.0214844,41.796875 L98.0214844,45.3735294 L97.0833491,45.4316783 L85.2693517,46.1639479 C71.0977187,47.0766972 63.8417969,52.4397698 63.8417969,62.0117188 C63.8417969,70.8614058 71.3928019,77.4667969 81.0058594,77.4667969 C87.3351285,77.4667969 93.2746053,74.594962 95.7498649,69.9858577 L96.0328155,69.4589844 L98.0214844,69.4589844 L98.0214844,76.6855469 Z M88.4765625,66.0878906 C84.3794013,66.0878906 81.5683594,63.9382703 81.5683594,60.4492188 C81.5683594,57.1435024 84.2545555,54.9881115 88.4565885,54.7152603 L98.0214844,54.0556123 L98.0214844,58.6425781 C98.0214844,63.0248217 93.6695831,66.0878906 88.4765625,66.0878906 Z",id:"Combined-Shape",stroke:"#333333","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M125.072266,76.6855469 L143.091797,76.6855469 L143.091797,47.5585938 C143.091797,44.8393716 143.852586,42.5162472 145.368621,40.675356 C146.891433,38.8141411 149.039746,37.8671875 151.708984,37.8671875 C157.211758,37.8671875 160.277344,41.5251575 160.277344,47.6074219 L160.277344,76.6855469 L178.296875,76.6855469 L178.296875,43.1640625 C178.296875,36.9008512 176.762021,32.1102464 173.721114,28.7468191 C170.692632,25.3971345 166.318609,23.7050781 160.546875,23.7050781 C152.842473,23.7050781 147.552638,27.4685513 144.934641,34.7147936 L144.696114,35.375 L142.603516,35.375 L142.603516,24.7792969 L125.072266,24.7792969 L125.072266,76.6855469 Z",id:"Path",stroke:"#333333","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M241.773438,24.7792969 L223.753906,24.7792969 L223.753906,34.4960938 L221.658947,34.4960938 L221.421713,33.832915 C219.305899,27.918254 213.649053,23.9980469 206.542969,23.9980469 C193.753663,23.9980469 186.205078,33.7771821 186.205078,50.5859375 C186.205078,66.5810464 193.936366,76.0019531 206.25,76.0019531 C213.784246,76.0019531 219.765612,72.3792521 221.408217,67.0864133 L221.626576,66.3828125 L223.753906,66.3828125 L223.753906,77.734375 C223.753906,83.0571298 220.128526,86.3515625 213.916016,86.3515625 C209.508411,86.3515625 206.039494,84.6436065 204.9328,81.9082031 L187.547032,81.9082031 C188.935561,90.9864492 198.679164,96.9980469 213.476562,96.9980469 C230.576611,96.9980469 241.773438,89.2290901 241.773438,77.2460938 L241.773438,24.7792969 Z M214.257812,63.5488281 C208.135117,63.5488281 204.712891,58.8951724 204.712891,50.7324219 C204.712891,42.6076069 208.300101,37.4277344 214.257812,37.4277344 C220.229636,37.4277344 223.851562,42.6295963 223.851562,50.78125 C223.851562,58.9193304 220.397355,63.5488281 214.257812,63.5488281 Z",id:"Combined-Shape",stroke:"#333333","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M335.669922,76.6855469 L335.669922,8.2265625 L316.966797,8.2265625 L316.966797,34.984375 L290.162109,34.984375 L290.162109,8.2265625 L271.458984,8.2265625 L271.458984,76.6855469 L290.162109,76.6855469 L290.162109,49.4394531 L316.966797,49.4394531 L316.966797,76.6855469 L335.669922,76.6855469 Z",id:"Path",stroke:"#333333","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M377.757812,76.6855469 L395.289062,76.6855469 L395.289062,40.8203125 C395.289062,30.4808101 385.739648,23.4121094 371.337891,23.4121094 C356.689754,23.4121094 347.432241,29.8238223 346.432384,40.2109375 L362.415328,40.2109375 C363.240623,37.2451738 366.270849,35.2304688 370.263672,35.2304688 C374.683455,35.2304688 377.757812,37.751767 377.757812,41.796875 L377.757812,45.3735294 L376.819677,45.4316783 L365.00568,46.1639479 C350.834047,47.0766972 343.578125,52.4397698 343.578125,62.0117188 C343.578125,70.8614058 351.12913,77.4667969 360.742188,77.4667969 C367.071457,77.4667969 373.010933,74.594962 375.486193,69.9858577 L375.769144,69.4589844 L377.757812,69.4589844 L377.757812,76.6855469 Z M368.212891,66.0878906 C364.115729,66.0878906 361.304688,63.9382703 361.304688,60.4492188 C361.304688,57.1435024 363.990884,54.9881115 368.192917,54.7152603 L377.757812,54.0556123 L377.757812,58.6425781 C377.757812,63.0248217 373.405911,66.0878906 368.212891,66.0878906 Z",id:"Combined-Shape",stroke:"#333333","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M440.075601,61.2050781 C438.586687,64.4475459 435.147136,66.3320313 430.908203,66.3320313 C425.000934,66.3320313 420.728516,62.0917368 420.728516,56.25 L420.728516,53.9804688 L456.470703,53.9804688 L456.470703,49.5605469 C456.470703,33.6162412 446.134735,23.4121094 429.974672,23.4120926 C413.683713,23.3176522 403.299593,34.0981135 403.441406,51.0253906 C403.441406,68.0342318 413.523478,78.0527344 430.615234,78.0527344 C444.439046,78.0527344 453.965312,71.6177489 456.041304,61.2050781 L440.075601,61.2050781 Z M430.419922,35.1816406 C432.990269,35.1816406 435.188958,35.9924075 436.974718,37.611476 C438.688915,39.2703755 439.656631,41.4684739 439.81649,44.0795149 L439.881456,45.140625 L420.932763,45.140625 L421.025086,44.0558252 C421.460358,38.9413817 425.414569,35.1816406 430.419922,35.1816406 Z",id:"Combined-Shape",stroke:"#333333","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M464.574219,76.6855469 L482.59375,76.6855469 L482.59375,46.3867187 C482.59375,41.1562692 485.46307,37.7695312 490.087891,37.7695312 C495.01737,37.7695312 497.582031,40.8268387 497.582031,46.484375 L497.582031,76.6855469 L514.576172,76.6855469 L514.576172,46.3867187 C514.576172,41.1131442 517.391027,37.7695312 522.021484,37.7695312 C526.96816,37.7695312 529.564453,40.8009574 529.564453,46.4355469 L529.564453,76.6855469 L547.583985,76.6855469 L547.584025,41.2507974 C547.676572,30.9317294 540.669735,23.6125721 530.859375,23.7050781 C523.16104,23.7050781 516.922675,28.1835677 515.277176,34.8112729 L515.088724,35.5703125 L513.075151,35.5703125 L512.930851,34.7419219 C511.700557,27.6791245 506.669966,23.7050781 498.925781,23.7050781 C491.997103,23.7050781 486.387736,28.0494626 484.459058,34.9375987 L484.254554,35.6679687 L482.105469,35.6679687 L482.105469,24.7792969 L464.574219,24.7792969 L464.574219,76.6855469 Z",id:"Path",stroke:"#333333","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M556.908203,76.6855469 L574.927734,76.6855469 L574.927734,24.7792969 L556.908203,24.7792969 L556.908203,76.6855469 Z",id:"Path",stroke:"#333333","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M565.820312,17.6523438 C570.514076,17.6523438 574.341797,13.8789171 574.341797,9.32617188 C574.341797,4.77342668 570.514076,1 565.820312,1 C561.126549,1 557.298828,4.77342668 557.298828,9.32617188 C557.298828,13.8789171 561.126549,17.6523438 565.820312,17.6523438 Z",id:"Path",stroke:"#333333","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M584.447266,76.6855469 L602.466797,76.6855469 L602.466797,47.5585938 C602.466797,44.8393716 603.227586,42.5162472 604.743621,40.675356 C606.266433,38.8141411 608.414746,37.8671875 611.083984,37.8671875 C616.586758,37.8671875 619.652344,41.5251575 619.652344,47.6074219 L619.652344,76.6855469 L637.671875,76.6855469 L637.671875,43.1640625 C637.671875,36.9008512 636.137021,32.1102464 633.096114,28.7468191 C630.067632,25.3971345 625.693609,23.7050781 619.921875,23.7050781 C612.217473,23.7050781 606.927638,27.4685513 604.309641,34.7147936 L604.071114,35.375 L601.978516,35.375 L601.978516,24.7792969 L584.447266,24.7792969 L584.447266,76.6855469 Z",id:"Path",stroke:"#333333","stroke-width":"2"}})])]),t._v(" "),n("svg",{staticClass:"jhaemin-complete",attrs:{viewBox:"0 0 639 98",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("path",{attrs:{d:"M1.01399788,53.734375 C1.4384202,68.7846407 11.4892183,77.90625 27.734375,77.90625 C44.5384606,77.90625 54.1269531,69.0151024 54.1269531,53.2226562 L54.1269531,8.2265625 L35.4238281,8.2265625 L35.4238281,53.0761719 C35.4238281,59.1731803 32.6082768,62.5722656 27.4414062,62.5722656 C22.4115022,62.5722656 19.2017878,59.1838313 18.8554164,53.734375 L1.01399788,53.734375 Z",id:"Path",stroke:"#333333","stroke-width":"2",fill:"#333333"}}),t._v(" "),n("path",{attrs:{d:"M98.0214844,76.6855469 L115.552734,76.6855469 L115.552734,40.8203125 C115.552734,30.4808101 106.00332,23.4121094 91.6015625,23.4121094 C76.9534257,23.4121094 67.6959125,29.8238223 66.6960556,40.2109375 L82.6789998,40.2109375 C83.5042948,37.2451738 86.5345207,35.2304688 90.5273438,35.2304688 C94.9471272,35.2304688 98.0214844,37.751767 98.0214844,41.796875 L98.0214844,45.3735294 L97.0833491,45.4316783 L85.2693517,46.1639479 C71.0977187,47.0766972 63.8417969,52.4397698 63.8417969,62.0117188 C63.8417969,70.8614058 71.3928019,77.4667969 81.0058594,77.4667969 C87.3351285,77.4667969 93.2746053,74.594962 95.7498649,69.9858577 L96.0328155,69.4589844 L98.0214844,69.4589844 L98.0214844,76.6855469 Z M88.4765625,66.0878906 C84.3794013,66.0878906 81.5683594,63.9382703 81.5683594,60.4492188 C81.5683594,57.1435024 84.2545555,54.9881115 88.4565885,54.7152603 L98.0214844,54.0556123 L98.0214844,58.6425781 C98.0214844,63.0248217 93.6695831,66.0878906 88.4765625,66.0878906 Z",id:"Combined-Shape",stroke:"#333333","stroke-width":"2",fill:"#333333"}}),t._v(" "),n("path",{attrs:{d:"M125.072266,76.6855469 L143.091797,76.6855469 L143.091797,47.5585938 C143.091797,44.8393716 143.852586,42.5162472 145.368621,40.675356 C146.891433,38.8141411 149.039746,37.8671875 151.708984,37.8671875 C157.211758,37.8671875 160.277344,41.5251575 160.277344,47.6074219 L160.277344,76.6855469 L178.296875,76.6855469 L178.296875,43.1640625 C178.296875,36.9008512 176.762021,32.1102464 173.721114,28.7468191 C170.692632,25.3971345 166.318609,23.7050781 160.546875,23.7050781 C152.842473,23.7050781 147.552638,27.4685513 144.934641,34.7147936 L144.696114,35.375 L142.603516,35.375 L142.603516,24.7792969 L125.072266,24.7792969 L125.072266,76.6855469 Z",id:"Path",stroke:"#333333","stroke-width":"2",fill:"#333333"}}),t._v(" "),n("path",{attrs:{d:"M241.773438,24.7792969 L223.753906,24.7792969 L223.753906,34.4960938 L221.658947,34.4960938 L221.421713,33.832915 C219.305899,27.918254 213.649053,23.9980469 206.542969,23.9980469 C193.753663,23.9980469 186.205078,33.7771821 186.205078,50.5859375 C186.205078,66.5810464 193.936366,76.0019531 206.25,76.0019531 C213.784246,76.0019531 219.765612,72.3792521 221.408217,67.0864133 L221.626576,66.3828125 L223.753906,66.3828125 L223.753906,77.734375 C223.753906,83.0571298 220.128526,86.3515625 213.916016,86.3515625 C209.508411,86.3515625 206.039494,84.6436065 204.9328,81.9082031 L187.547032,81.9082031 C188.935561,90.9864492 198.679164,96.9980469 213.476562,96.9980469 C230.576611,96.9980469 241.773438,89.2290901 241.773438,77.2460938 L241.773438,24.7792969 Z M214.257812,63.5488281 C208.135117,63.5488281 204.712891,58.8951724 204.712891,50.7324219 C204.712891,42.6076069 208.300101,37.4277344 214.257812,37.4277344 C220.229636,37.4277344 223.851562,42.6295963 223.851562,50.78125 C223.851562,58.9193304 220.397355,63.5488281 214.257812,63.5488281 Z",id:"Combined-Shape",stroke:"#333333","stroke-width":"2",fill:"#333333"}}),t._v(" "),n("path",{attrs:{d:"M335.669922,76.6855469 L335.669922,8.2265625 L316.966797,8.2265625 L316.966797,34.984375 L290.162109,34.984375 L290.162109,8.2265625 L271.458984,8.2265625 L271.458984,76.6855469 L290.162109,76.6855469 L290.162109,49.4394531 L316.966797,49.4394531 L316.966797,76.6855469 L335.669922,76.6855469 Z",id:"Path",stroke:"#333333","stroke-width":"2",fill:"#333333"}}),t._v(" "),n("path",{attrs:{d:"M377.757812,76.6855469 L395.289062,76.6855469 L395.289062,40.8203125 C395.289062,30.4808101 385.739648,23.4121094 371.337891,23.4121094 C356.689754,23.4121094 347.432241,29.8238223 346.432384,40.2109375 L362.415328,40.2109375 C363.240623,37.2451738 366.270849,35.2304688 370.263672,35.2304688 C374.683455,35.2304688 377.757812,37.751767 377.757812,41.796875 L377.757812,45.3735294 L376.819677,45.4316783 L365.00568,46.1639479 C350.834047,47.0766972 343.578125,52.4397698 343.578125,62.0117188 C343.578125,70.8614058 351.12913,77.4667969 360.742188,77.4667969 C367.071457,77.4667969 373.010933,74.594962 375.486193,69.9858577 L375.769144,69.4589844 L377.757812,69.4589844 L377.757812,76.6855469 Z M368.212891,66.0878906 C364.115729,66.0878906 361.304688,63.9382703 361.304688,60.4492188 C361.304688,57.1435024 363.990884,54.9881115 368.192917,54.7152603 L377.757812,54.0556123 L377.757812,58.6425781 C377.757812,63.0248217 373.405911,66.0878906 368.212891,66.0878906 Z",id:"Combined-Shape",stroke:"#333333","stroke-width":"2",fill:"#333333"}}),t._v(" "),n("path",{attrs:{d:"M440.075601,61.2050781 C438.586687,64.4475459 435.147136,66.3320313 430.908203,66.3320313 C425.000934,66.3320313 420.728516,62.0917368 420.728516,56.25 L420.728516,53.9804688 L456.470703,53.9804688 L456.470703,49.5605469 C456.470703,33.6162412 446.134735,23.4121094 429.974672,23.4120926 C413.683713,23.3176522 403.299593,34.0981135 403.441406,51.0253906 C403.441406,68.0342318 413.523478,78.0527344 430.615234,78.0527344 C444.439046,78.0527344 453.965312,71.6177489 456.041304,61.2050781 L440.075601,61.2050781 Z M430.419922,35.1816406 C432.990269,35.1816406 435.188958,35.9924075 436.974718,37.611476 C438.688915,39.2703755 439.656631,41.4684739 439.81649,44.0795149 L439.881456,45.140625 L420.932763,45.140625 L421.025086,44.0558252 C421.460358,38.9413817 425.414569,35.1816406 430.419922,35.1816406 Z",id:"Combined-Shape",stroke:"#333333","stroke-width":"2",fill:"#333333"}}),t._v(" "),n("path",{attrs:{d:"M464.574219,76.6855469 L482.59375,76.6855469 L482.59375,46.3867187 C482.59375,41.1562692 485.46307,37.7695312 490.087891,37.7695312 C495.01737,37.7695312 497.582031,40.8268387 497.582031,46.484375 L497.582031,76.6855469 L514.576172,76.6855469 L514.576172,46.3867187 C514.576172,41.1131442 517.391027,37.7695312 522.021484,37.7695312 C526.96816,37.7695312 529.564453,40.8009574 529.564453,46.4355469 L529.564453,76.6855469 L547.583985,76.6855469 L547.584025,41.2507974 C547.676572,30.9317294 540.669735,23.6125721 530.859375,23.7050781 C523.16104,23.7050781 516.922675,28.1835677 515.277176,34.8112729 L515.088724,35.5703125 L513.075151,35.5703125 L512.930851,34.7419219 C511.700557,27.6791245 506.669966,23.7050781 498.925781,23.7050781 C491.997103,23.7050781 486.387736,28.0494626 484.459058,34.9375987 L484.254554,35.6679687 L482.105469,35.6679687 L482.105469,24.7792969 L464.574219,24.7792969 L464.574219,76.6855469 Z",id:"Path",stroke:"#333333","stroke-width":"2",fill:"#333333"}}),t._v(" "),n("path",{attrs:{d:"M556.908203,76.6855469 L574.927734,76.6855469 L574.927734,24.7792969 L556.908203,24.7792969 L556.908203,76.6855469 Z",id:"Path",stroke:"#333333","stroke-width":"2",fill:"#333333"}}),t._v(" "),n("path",{attrs:{d:"M565.820312,17.6523438 C570.514076,17.6523438 574.341797,13.8789171 574.341797,9.32617188 C574.341797,4.77342668 570.514076,1 565.820312,1 C561.126549,1 557.298828,4.77342668 557.298828,9.32617188 C557.298828,13.8789171 561.126549,17.6523438 565.820312,17.6523438 Z",id:"Path",stroke:"#333333","stroke-width":"2",fill:"#333333"}}),t._v(" "),n("path",{attrs:{d:"M584.447266,76.6855469 L602.466797,76.6855469 L602.466797,47.5585938 C602.466797,44.8393716 603.227586,42.5162472 604.743621,40.675356 C606.266433,38.8141411 608.414746,37.8671875 611.083984,37.8671875 C616.586758,37.8671875 619.652344,41.5251575 619.652344,47.6074219 L619.652344,76.6855469 L637.671875,76.6855469 L637.671875,43.1640625 C637.671875,36.9008512 636.137021,32.1102464 633.096114,28.7468191 C630.067632,25.3971345 625.693609,23.7050781 619.921875,23.7050781 C612.217473,23.7050781 606.927638,27.4685513 604.309641,34.7147936 L604.071114,35.375 L601.978516,35.375 L601.978516,24.7792969 L584.447266,24.7792969 L584.447266,76.6855469 Z",id:"Path",stroke:"#333333","stroke-width":"2",fill:"#333333"}})])]),t._v(" "),n("noscript",{inlineTemplate:{render:function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"jhaemin-complete-noscript",attrs:{src:o(164),alt:"Jang Haemin Logo"}})},staticRenderFns:[]}})])]),t._v(" "),n("div",{staticClass:"home-content"},[t._m(0),t._v(" "),n("div",{staticClass:"acts"},[n("div",{staticClass:"grid-item-wrapper"},[n("box",{staticClass:"gallery",attrs:{"box-link":"/gallery"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("갤러리")]},proxy:!0},{key:"description",fn:function(){return[t._v("나의 눈부신 작업과 확고한 디자인 철학을 만나보세요.")]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"grid-item-wrapper"},[n("box",{staticClass:"eodiro",attrs:{"box-external-link":"https://eodiro.com"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("어디로")]},proxy:!0},{key:"description",fn:function(){return[t._v("중대생이 만든 중대생을 위한 필수 서비스")]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"grid-item-wrapper"},[n("box",{staticClass:"github",attrs:{"box-external-link":"https://github.com/jhaemin"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("GitHub")]},proxy:!0},{key:"description",fn:function(){return[t._v("github.com/jhaemin")]},proxy:!0}])})],1)])])]),t._v(" "),n("nuxt-child",{staticClass:"popup"})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-preview"},[e("p",{staticClass:"manifesto"},[this._v("\n          🙋‍♂️ 안녕하세요! 개발자 장해민입니다.\n          "),e("br"),this._v("중앙대학교에서 소프트웨어를 공부하고 있습니다.\n          "),e("br"),this._v("팝송, 영화, 웹툰, 여행을 좋아합니다.\n          "),e("br"),this._v("단순함과 정교함을 추구합니다.\n        ")])])}],!1,null,"c8454c10",null));e.default=l.exports}}]);