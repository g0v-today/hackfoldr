function import$(t,e){var n={}.hasOwnProperty;for(var o in e)n.call(e,o)&&(t[o]=e[o]);return t}function in$(t,e){for(var n=-1,o=e.length>>>0;++n<o;)if(t===e[n])return!0;return!1}require.register("config.jsenv",function(t,e,n){n.exports={BUILD:"git-60ad802",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}],GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,n){return t.state("about",{url:"/about",templateUrl:"partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/congressoccupied"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(t,e,n,o){return t.$state=e,t.$stateParam=n,t.go=function(t){return o.path(t)},t._build=require("config.jsenv").BUILD,t.$on("$stateChangeSuccess",function(t,e){var n;return n=e.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:o.$$url,title:n}):void 0}),t.safeApply=function(t,e){var n;return n=t.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof e?e():void 0:t.$apply(e)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})};var CONST_CSV,slice$=[].slice,replace$="".replace;CONST_CSV=',g0v.today,,,,直播人,更新人,"g0v.today 恢復每 3 分鐘更新， hackfoldr.org 每分鐘更新",,,,,\nhttp://newday.tw/intro/,讓晨曦照亮民主,,守護民主手環:important,,,even,,,,,,\nhttps://sites.google.com/site/twdstreet/volunteer,公民審服貿,,街頭民主審議:important,,,ve,,,,,,\nhttp://123.g0v.today/,三動作護台灣,,致電立委:important,,,ipa,,,,,,\nhttps://ethercalc.org/static/proxy/hackpad/,"文字轉播 (主要) ","{""expand"":false} ",每分鐘更新:warning,,,au,,,,,,\n" http://congress-text-live.herokuapp.com/","文字轉播 (同上)",,"即時更新:warning ",,,au,,,,,,\nhttps://ethercalc.org/static/proxy/live.txt,"文字轉播 (內場)",,每分鐘更新:warning,,,au,,,,,,\n,,,,,,,,,,,,\nhttps://ethercalc.org/static/proxy/english/,"English Transcript",,Auto-refresh:warning,,,au,,,,,,\n,,,,,,,"更新前請 *務必* 先刷新整頁試算表再改，感謝！",,,,,\nhttp://fact.g0v.tw/tisa.html,服貿跑馬燈,,,,,jimmy,,,,,,\nhttp://ecfa.speaking.tw/imho.php,"服貿東西軍 ",,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,影音直播,"{""expand"":true} ",4/1)warning,,,,"影音更新時請記得保留前方空白和 /embed/ 格式, 把 youtube.com/watch?v=XXXXXX 的 XXXXX 放到 /embed/ 後即可。ustream 也是使用 /embed/ (按「Share/共用」可取得 embed code) — 然後更新 D 欄的「時間」和 F 欄的「更新人」。感謝!",,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n" https://www.youtube.com/embed/sHKXPgq19xg","議場內 1F (音地) ",,,,indietaiwan,,,,,,,\n" https://www.ustream.tv/embed/13620594","議場內 1F (五六) ",,,12am,,rsghost,,,,,,\n,,,,,,,,,,,,\n" https://www.ustream.tv/embed/17548030","English LIVE",,,,(1F),rsghost,,,,,,\n,,,,,,,,,,,,\n" https://www.youtube.com/embed/kfLE82spRME",青島東立院廣場,,,,,oJelly,,,,,,\n" https://www.ustream.tv/embed/17513092","議場內 2F (民報)",,,,longson3000,au,,,,,,\n" https://www.youtube.com/embed/EGHKN4Iv2qg","議場內 2F (蘋報) ",,,,appledaily,au,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n" https://www.youtube.com/embed/LJ8_Eub7tJc","青島東 (g0v)",,,,ben,au,,,,,,\n" https://www.youtube.com/embed/SegyHVcKwV0","青島東 (蘋報) ",,,,appledaily,au,,,,,,\n" https://www.youtube.com/embed/UqYE65xayyg","濟南路 (g0v)",,,,"Tan Ho",oJelly,,,,,,\n,,,,,,,,,,,,\n,"機動 - 青島東人民議會 (g0v)",,,,,,"更新前請 *務必* 先刷新整頁試算表再改，感謝！",,,,,\n" https://www.ustream.tv/embed/17592160","機動 - 淡水掃街 (g0v)",,,,jonethwc,au,,,,,,\n" https://www.ustream.tv/embed/17622630","機動 (g0v)",,,,bananana,au,,,,,,\n" http://broadcast.skywatch24.com:318/","多機直播 (skywatch)",,,,skywatch,isacl,,,,,,\n" http://stlive.maxorz.com","6 合一聯播網 ","{""target"": ""_blank""} ",新視窗:info,,,,,,,,,\n" https://www.ustream.tv/embed/17640717",青島東路林森南路口,,,,ddio,mosiwang,,,,,,\n,,,,,,,,,,,,\n,"現場轉播回報 ","{""expand"":false} ",,,,,,,,,,\n" http://task.g0v.today/","現場轉播回報 (IRC)",,"主要:info ",,,,,,,,,\n" https://docs.google.com/spreadsheets/d/1Xj9XLK24ON99jBuSON8e8tUuNgi320aOZSVF60xncos/pubhtml ",現場轉播回報,,"備用:info ",,,,,,,,,\n" https://docs.google.com/document/d/1LoTj147B5IHji5vmZYJxXEBKSfnGDzld4oTBloGL7UM/edit?usp=sharing ","現場轉播回報 ",,"備用:info ",,,,,,,,,\n,文字轉播專區,"{""expand"":false} ","重要:important ",,,,,,,,,\n" https://docs.google.com/document/d/1Esi-GjLXFwF0CDsykyddGaWBTnM22zeVY4ciZ0gyf9M/pub","320 街頭民主教室逐字稿紀錄",,,,,,,,,,,\n" https://ethercalc.org/static/proxy/hackpad/3-24.html","3-24 中午備份",,,,,,,,,,,\n" https://ethercalc.org/static/proxy/english/3-24.html","3-24 Noon Archive",,,,,,,,,,,\n,,,,,,,,,,,,\n" https://docs.google.com/document/d/1uTmn5-nUKW-MEpR5ygBfG10HEJ-Zul4TrtntKAOPxbQ/edit?disco=AAAAAH_Tjng ","文字轉播 GoogleDoc",,,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,"人力物資需求 ","{""expand"":false} ",,,,,,,,,,\n" https://g0v.hackpad.com/-Live--HpwTUS2OShF ","遠端文字轉播排班表 ",,"請支援:important ",,,,,,,,,\n" https://docs.google.com/spreadsheets/d/1zxF2MhhCedsKE23lW4sDHb7Uo2HrkEp3VusdWQruRzQ/pubhtml","守護民主之夜 現場需求",,"請支援:important ",,,,,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AkNsS2a-Qx8ZdGpmekpMQjJBNWZsbjh6cUxORVR4QUE&usp=sharing ","青島東路線路組物資需求 ",,停止:error,,,,,,,,,\n,,,,,,,,,,,,\n,,,,,,,,,,,,\n,抗議行動相關資訊,"{""expand"":""false""} ",,,,,,,,,,\n" https://g0v.hackpad.com/2dCf0sLS70c",聯合指揮中心窗口,,,,,,,,,,,\n,,,,,,,,,,,,\n" https://docs.google.com/document/d/1t0Xxy3mI4Ct2QBp6kqoi1NDtgQVe1EMlBlFEu7e6qZQ/pub ","抗議者自保須知 ",,,,,,,,,,,\n" https://mapsengine.google.com/map/u/1/embed?mid=zlxW8eSZKLlk.k1Nzj2E6NfgY",周邊地圖,,,,,,,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dFZfdjd2alRLaW83WHpuX0JnUmJPZmc","台北以外活動 ",,,,,,,,,,,\n,影音記錄,"{""expand"":false}",,,,,,,,,,\n" https://www.youtube.com/embed/pxv-thjDpfU","進場過程 3/18 ",,,,,,,,,,,\n" https://www.youtube.com/embed/rm5kI7X6sJ0","場外 3/18 ",,,,,,,,,,,\n" https://www.youtube.com/embed/yj9Dy0IMmi0","場外 3/19 上午 ",,,,,,,,,,,\n" https://www.youtube.com/embed/bgHcFFWnXkM","場外 3/19 下午 ",,,,,,,,,,,\n" https://www.youtube.com/embed/pptmdPk-0DQ","北側 3/19 晚間 ",,,,,,,,,,,\n" https://www.youtube.com/embed/mpqkvYTM30g","北側 3/19 傍晚 ",,,,,,,,,,,\n" https://www.youtube.com/embed/dDimp7TDhJw","北側 3/19 下午 ",,,,,,,,,,,\n" https://www.youtube.com/embed/wKuWnBSXF3s","3/19 警方凌晨 3 點第一波攻堅 ",,,,,,,,,,,\n" https://www.youtube.com/embed/_rwNDRKG-uI","議場內（蘋報 319） ",,,,,,,,,,,\n" https://www.youtube.com/embed/0J4mZlkFmRs","議場內（蘋報 320） ",,,,,,,,,,,\n" http://www.ustream.tv/embed/17537793","濟南路 南側 ",,,,,,,,,,,\n" https://www.youtube.com/embed/odUyLRc3P0M","台中 ",,,,,,,,,,,\n" http://www.youtube.com/embed/uTxGjgRu3Xs",行政院機動組1,"  ",,"  ","  ","  ","  ","  ","  ","  ","  "," "\n" https://www.youtube.com/embed/WjB7waqvNQk","北側 3/24",,,"hychen ",,,,,,,,\n" https://www.youtube.com/embed/gq4T8UPSpJk","濟南路 舞台 (音地) ",,,,,,,,,,,\n" http://www.ustream.tv/recorded/45245933",行政院機動組2,,,,,,,,,,,\n" https://www.youtube.com/embed/FvbvAH5_0oI","議場內（蘋報 323） ",,,,,,,,,,,\n" https://www.youtube.com/embed/m-Vo5DjxNlo","議場內（蘋報 326） ",,,,,,,,,,,\n" http://ppt.cc/vfFq",清大野台講堂,,,,,,,,,,,\n" http://www.ustream.tv/embed/17569549",勞陣研討會,,,,,,,,,,,\n" https://www.youtube.com/embed/Rafu80fdAK0","凱道主講台 (音地 330)",,,,,,,,,,,\n,,,,,,,,,,,,\n,"媒體區  - Media","{""expand"":false} ",,,,,,,,,,\n" https://g0v.hackpad.com/318--vCNzeS4wnbh","318 學運罷課聲明",,,,,,,,,,,\n" https://g0v.hackpad.com/ep/pad/static/HeVtO3WBpXk","English Communiqué",,,,,,,,,,,\n" https://docs.google.com/document/d/1oVxDBCcp4b-IJmIL4-duQo1Y4SBzAUBtwcrUfTdLj18/edit?usp=sharing ","各團體行動聲明 ",,,,,,,,,,,\n" https://g0v.hackpad.com/318--H6s4KlBRSC3","各團體行動聲明 (備份) ",,,,,,,,,,,\n" https://g0v.hackpad.com/-FAQ-gGlUisv5cMG","佔領立法院行動 FAQ ",,,,,,,,,,,\n" https://g0v.hackpad.com/A4-7E4ts6CMRsq","佔領立法院 A4 傳單 ",,,,,,,,,,,\n" https://g0v.hackpad.com/X0fp4Z6AhiL","街頭採訪要點 ",,,,,,,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dHhIeVdaTHNnMjhIT1VWRm5VSjNQd1E",外電消息整理,,,,,,,,,,,\n" https://docs.google.com/document/d/1NoiYQyZOhGcN2cRA9DRZ85_sFh7AUe-lpaxPmNcO1Ps/edit?usp=sharing ","照片來源 ",,,,,,,,,,,\n" https://g0v.hackpad.com/--PEn9NyJRh2X","創作收集 ",,,,,,,,,,,\n" http://occupation.today/","照片與訊息 Tumblr ",,,,,,,,,,,\n" http://review.fumao.today/",自己的服貿自己審,"{""target"": ""_blank""} ",新視窗:info,,,,,,,,,',angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(t,e,n,o,a){return t.$watch("$state.current.name",function(e){return"irc"===e?t.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return a(function(){return window.scrollTo(0,1)},0)}),a(function(){return o.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$window","$state","$cookies","HackFolder"].concat(function(t,e,n,o,a){var c,r;return import$(t,{hasViewMode:function(t){return null!=t?t.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:a.iframes,docs:a.docs,tree:a.tree,godoc:function(e){var n;return"_blank"===(null!=(n=e.opts)?n.target:void 0)?(window.open(e.url,e.id),!0):e.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(e.url,e.id),!0):t.go("/"+t.hackId+"/"+decodeURIComponent(e.id))},open:function(t){return window.open(t.url,t.id),!1},activate:function(t){var e;return e=a.activate(t),"hackfoldr"===(null!=e?e.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(e,n,a){return t.saveModalOpen=e,a&&(t.saveBtn=$(a.target)),n&&(o.savebtn="consumed",t.saveBtn)?t.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==o.savebtn},HackFolder:a,iframeCallback:function(e){return function(o){return t.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",o,e),n.current.title=e.title+" – g0v.today",e.noiframe="fail"===o?!0:!1,"unsure"===o?e.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return a.getIndex(t,!0,function(){})}}),t.$watch("hackId",function(e){return a.getIndex(e,!1,function(){var o,c;return t.$watch("docId",function(n){var o;return n&&(o=a.activate(n)),"hackfoldr"===(null!=o?o.type:void 0)?(t.showIndex=!0,a.loadRemoteCsv(o.id,function(o,c,r){var s,l,u;return s=function(){var t,e,o,c=[];for(t=0,o=(e=a.tree).length;o>t;++t)s=e[t],s.id===n&&c.push(s);return c}()[0],s.tagFilter=null!=(l=s.tags)&&null!=(u=l[0])?u.content:void 0,s.chidlren||(null==s.children&&(s.children=null!=r?r[0].children:void 0),(l=a.docs).splice.apply(l,[c.length,0].concat(slice$.call(c)))),t.indexDocs=c,t.indexSearch=e.replace(/^g0v-/,"")})):t.showIndex=!1}),t.showIndex="hack.index"===n.current.name,t.showIndex?void 0:!t.docId&&(o=null!=(c=a.docs[0])?c.id:void 0)?n.transitionTo("hack.doc",{docId:o,hackId:t.hackId}):void 0})}),t.collapsed=null!=(c=o.collapsed)?c:e.innerWidth<768,t.$watch("collapsed",function(t){return null!=t?o.collapsed=t:void 0}),t.hackId=(r=n.params.hackId)?r:"congressoccupied",t.$watch("$state.params.docId",function(e){return e?t.docId=encodeURIComponent(encodeURIComponent(e)):void 0})})}).directive("resize",["$window"].concat(function(t){return function(e,n){var o;return o=function(){return e.width=t.innerWidth,e.height=t.innerHeight,e.contentHeight=t.innerHeight-$(n).offset().top},angular.element(t).bind("resize",function(){return e.$apply(o)}),o()}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,o){var a,c,r;return a=t(o.ngxIframe)(e),c=function(t,e){var n;return n=!function(){try{return"about:blank"==t.location}catch(e){}}(),a(e&&$.browser.mozilla?"unsure":n?"ok":"fail")},$(n).load(function(){return clearTimeout(r),c(this.contentWindow,!0)}),r=setTimeout(function(){return c(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,o){var a,c;return a=t(o.ngxClickMeta),c=navigator.appVersion.match(/Win/)?function(t){return t.ctrlKey}:function(t){return t.metaKey},$(n).click(function(t){return c(t)&&!a(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(t){return function(e){var n;return n=function(){var n;return n=$(".index"),e.hasScrollbar=n.get(0).scrollHeight>t.innerHeight-$(".navbar").height()},angular.element(t).bind("resize",function(){return e.$apply(n)}),e.$watch("docs",n),n()}})).factory({HackFolder:["$http","$sce"].concat(function(t,e){var n,o,a,c,r;return n={},o=[],a=[],r={iframes:n,docs:o,tree:a,activate:function(t,c){function r(t){return t.id}var s,l,u,i,d,p,h,m,g,v,w;for(null==c&&(c=!1),l=function(){var e,n,a,c=[];for(e=0,a=(n=o).length;a>e;++e)s=n[e],s.id===t&&c.push(s);return c}()[0],u=null!=l?l.type:void 0,i=0,p=(d=a).length;p>i;++i)h=d[i],(m=null!=h&&null!=(g=h.children)?g.map(r):void 0)&&in$(t,m)&&(h.expand=!0);return v=c?"edit":"view",w=function(){var e;switch(e=[u],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+v+"?pli=1&overridemobile=true";case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+v;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+v;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://"+(null!=(e=l.site)?e:"")+"hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),null!=l&&l.hashtag&&(w+=null!=l?l.hashtag:void 0),w&&(w=e.trustAsResourceUrl(w)),"hackfoldr"===(null!=l?l.type:void 0)?l:((m=n[t])?(m.src=w,m.mode=v):n[t]={src:w,doc:l,mode:v},l)},getIndex:function(t,e,n){var a,r,s=this;return c!==t||e?(a=0,(r=function(){var e;return e=CONST_CSV,setTimeout(function(){return c=t,o.length=0,s.processCsv(e,n)},1)})()):n(o)},processCsv:function(t,e){return this.loadCsv(t,o,a,function(t,n){return r.folderTitle=t,e(n)})},loadRemoteCsv:function(t,e){var n,o=this;return n=CONST_CSV,setTimeout(function(){var t,a;return t=[],a=[],o.loadCsv(n,t,a,function(n){return e(n,t,a)})},1)},loadCsv:function(t,e,n,o){function a(){try{return JSON.parse(null!=f?f:"{}")}catch(t){}}function c(){var t;switch(t=[v],!1){case void 0!==t[0]:return l||w&&(l=w,w=null),{title:w,type:"dummy",id:"dummy"};case!(S=/^\/\/(.*?)(?:\#(.*))?$/.exec(t[0])):return{type:"hackfoldr",id:S[1],tag:S[2]};case!(S=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:S[1]};case!(S=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:S[1]};case!(S=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:S[1]};case!(S=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:S[1]};case!(S=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:S[1]};case!(S=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",site:S[1],id:S[2]};case!(S=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(v)),icon:"http://g.etfv.co/"+S[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",v):void 0}}function r(t){return t.length}function s(t){var e,n,o,a,c;return e=t.match(/^(.*?)(?::(.*))?$/),n=e[0],o=e[1],a=e[2],c=slice$.call(e,3),{content:o,"class":null!=a?a:"warning"}}var l,u,i,d,p,h,m,g,v,w,f,b,y,k,x,C,I,F,S,A,E,L,R,O,B;for(t=replace$.call(t,/^\"?#.*\n/gm,""),i=[],d=0,h=(p=t.split(/\n/)).length;h>d;++d)m=p[d],m&&(g=m.split(/,/),v=g[0],w=g[1],f=g[2],b=g[3],y=g[4],k=slice$.call(g,5),w=replace$.call(w,/^"|"$/g,""),f&&(f=replace$.call(f,/^"|"$/g,"")),f&&(f=f.replace(/""/g,'"')),b&&(b=replace$.call(b,/^"|"$/g,"")),g=v.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),x=g[0],C=g[1],v=g[2],I=g[3],F=import$({summary:y,hashtag:I,url:v,title:w,indent:C.length,opts:a()},c()),i.push("dummy"!==F.type||null!=(g=F.title)&&g.length?import$(import$({icon:"/img/"+F.type+".png"},F),{tags:(null!=(g=null!=(A=F.opts)?A.tags:void 0)?g:[]).concat((null!=(g=null!=b?b.split(","):void 0)?g:[]).filter(r).map(s))}):null));for(u=i,u.filter(function(t){return t&&t.url}).map(function(t){var e,n,o;return(e=t.url.match(/youtube.com\/embed\/(.*)/))?(n=e[1],o=gapi.client.youtube.videos.list({id:n,part:"snippet"}),o.execute(function(e){var n;return"live"===(null!=(n=e.items)?n[0].snippet.liveBroadcastContent:void 0)?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(e=t.url.match(/ustream.tv\/embed\/(.*)/))?(n=e[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+n+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(e){var n,o;return"live"===JSON.parse(null!=(n=e.query)&&null!=(o=n.results)&&null!=(n=o.body)?n.p:void 0).results?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),e.splice.apply(e,[0,e.length].concat(slice$.call(u.filter(function(t){return null!=t})))),E=0,i=[],d=0,h=e.length;h>d;++d)R=d,F=e[d],R>0&&F.indent?(O=e[E],B=null!=(p=O.children)?p:O.children=[],B.push(F),i.push(null)):(E=R,i.push(F));return L=i,L=L.filter(function(t){return null!=t}),L=L.map(function(t){var e,n;return t.children&&(t.expand=null!=(e=null!=(n=t.opts)?n.expand:void 0)?e:t.children.length<5),t}),n.splice.apply(n,[0,n.length].concat(slice$.call(L))),o(l,e)}}})});