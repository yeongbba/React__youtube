(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{2:function(e,t,a){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",list:"video_item_list__2jYRY",video:"video_item_video__37dg9",thumbnail:"video_item_thumbnail__1w2AL",metadata:"video_item_metadata__N-I6a",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},20:function(e,t,a){e.exports={videos:"video_list_videos__1VCw_"}},24:function(e,t,a){e.exports=a(48)},29:function(e,t,a){},3:function(e,t,a){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",input:"search_header_input__3vem-",button:"search_header_button__19_1L",buttonImg:"search_header_buttonImg__3Mukl"}},4:function(e,t,a){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),c=a.n(r),o=(a(29),a(8)),s=a(4),l=a.n(s),u=a(2),m=a.n(u),d=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,r="list"===e.display?m.a.list:m.a.grid;return i.a.createElement("li",{className:"".concat(m.a.container," ").concat(r),onClick:function(){return n(t)}},i.a.createElement("div",{className:m.a.video},i.a.createElement("img",{className:m.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),i.a.createElement("div",{className:m.a.metadata},i.a.createElement("p",{className:m.a.title},a.title),i.a.createElement("p",{className:m.a.channel},a.channelTitle))))})),p=a(20),_=a.n(p),h=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return i.a.createElement("ul",{className:_.a.videos},t.map((function(e){return i.a.createElement(d,{key:e.id,video:e,onVideoClick:a,display:n})})))},v=a(3),b=a.n(v),f=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),r=function(){var e=a.current.value;t(e)};return i.a.createElement("header",{className:b.a.header},i.a.createElement("div",{className:b.a.logo},i.a.createElement("img",{className:b.a.img,src:"/images/logo.png",alt:"logo"}),i.a.createElement("h1",{className:b.a.title},"Youtube")),i.a.createElement("input",{ref:a,className:b.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&r()}}),i.a.createElement("button",{className:b.a.button,type:"submit",onClick:function(){r()}},i.a.createElement("img",{className:b.a.buttonImg,src:"/images/search.png",alt:"search"})))})),E=a(6),g=a.n(E),y=function(e){var t=e.video,a=e.video.snippet;return i.a.createElement("section",{className:g.a.detail},i.a.createElement("iframe",{className:g.a.video,type:"text/html",title:"youtuve video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),i.a.createElement("h2",null,a.title),i.a.createElement("h3",null,a.channelTitle),i.a.createElement("pre",{className:g.a.description},a.description))};var N=function(e){var t=e.youtube,a=Object(n.useState)([]),r=Object(o.a)(a,2),c=r[0],s=r[1],u=Object(n.useState)(null),m=Object(o.a)(u,2),d=m[0],p=m[1],_=Object(n.useCallback)((function(e){p(null),t.search(e).then((function(e){return s(e)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),i.a.createElement("div",{className:l.a.app},i.a.createElement(f,{onSearch:_}),i.a.createElement("section",{className:l.a.content},d&&i.a.createElement("div",{className:l.a.detail},i.a.createElement(y,{video:d})),i.a.createElement("div",{className:l.a.list},i.a.createElement(h,{videos:c,onVideoClick:function(e){p(e)},display:d?"list":"grid"}))))},k=a(9),w=a(5),j=a.n(w),x=a(7),O=a(21),C=a(22),I=function(){function e(t){Object(O.a)(this,e),this.youtube=t}return Object(C.a)(e,[{key:"mostPopular",value:function(){var e=Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(x.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),S=a(23),P=new I(a.n(S).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyCCE_PEU8dddWxY9pxS1DAJG1rAl1z9dIw"}}));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,{youtube:P})),document.getElementById("root"))},6:function(e,t,a){e.exports={detail:"video_detail_detail__2BkQh",description:"video_detail_description__3nW_r"}}},[[24,1,2]]]);
//# sourceMappingURL=main.04558932.chunk.js.map