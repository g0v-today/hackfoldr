function import$(t,e){var n={}.hasOwnProperty;for(var o in e)n.call(e,o)&&(t[o]=e[o]);return t}function in$(t,e){for(var n=-1,o=e.length>>>0;++n<o;)if(t===e[n])return!0;return!1}require.register("config.jsenv",function(t,e,n){n.exports={BUILD:"git-59dc31b",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}],GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,n){return t.state("about",{url:"/about",templateUrl:"partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/congressoccupied"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(t,e,n,o){return t.$state=e,t.$stateParam=n,t.go=function(t){return o.path(t)},t._build=require("config.jsenv").BUILD,t.$on("$stateChangeSuccess",function(t,e){var n;return n=e.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:o.$$url,title:n}):void 0}),t.safeApply=function(t,e){var n;return n=t.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof e?e():void 0:t.$apply(e)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})};var CONST_CSV,slice$=[].slice,replace$="".replace;CONST_CSV=',反黑箱服貿協議・守護民主日與夜,,,"g0v.today 每 3 分鐘更新",,,\nhttp://newday.tw/intro/,讓晨曦照亮民主,,守護民主手環:important,,,,\nhttp://ecfa.speaking.tw/,服貿跑馬燈,"{""expand"":false} ",,"更新前請 *務必* 先刷新整頁試算表再改，感謝！",,,\n" http://fact.g0v.tw/tisa.html",服貿跑馬燈-時間軸,,,,,,\n" http://ecfa.speaking.tw/imho.php","服貿東西軍 ",,,,,,\n" https://sites.google.com/site/twdstreet/",公民審服貿,,街頭民主審議:info,"影音更新時請記得 *保留前方空白* 和 /embed/ 格式, 把 youtube watch?v=XXXXXX 的 XXXXX 放到 /embed/ 後即可。ustream 也是使用 /embed/ (按「Share/共用」可取得 embed code) — 然後更新 D 欄的「時間」和 F 欄的「更新人」。感謝!",,,\n,行動,,,,,,\n" http://123.g0v.today/",三動作護台灣,,致電立委:important,,,,\n" http://appy.tw/",割闌尾計畫,"{""target"": ""_blank""} ",罷免連署:important,,,,\nhttp://nonuke.today/,停建核四、遍地烽火全記錄,"{""target"":""_blank""}",新分頁:issue,,,,\nhttp://hackfoldr.org/resistancelive/,香港7.1遊行暨後續活動現場直播,"{""target"":""_blank""}",新分頁:important,,,,\nhttp://i.imgur.com/PNyJAIq.png?3,LiveTW即時獲取直播頻道App,"{""expand"":true}",,,,,\n" https://chrome.google.com/webstore/detail/livetw/fhcffinobmpdchcoapdeoinhdmlihiok",Chrome：,"{""target"":""_blank""}",新分頁:issue,,,,\n" https://play.google.com/store/apps/details?id=com.g0v.live",Android：,"{""target"":""_blank""}",新分頁:issue,,,,\n" http://inlivetw.github.io/chrome/",Web：,,新版:important,,,,\n,"7/26 政府各部會直播","{""expand"": false}",,,,,\n" https://livehouse.in/channel/watchout",【沃草直播室】,,,,,,\n" http://www.ustream.tv/embed/18322764","行政院 經貿國是會議-戲智科技1",,"7/26台北:,0900~1710: important",,,,\n" http://www.ustream.tv/embed/18316356","行政院 經貿國是會議-戲智科技2",,,,,,\n" https://livehouse.in/channel/NectwChannel-M","行政院 經貿國是會議-愛卡拉(iKala)1",,,,,,\n" https://livehouse.in/channel/NectwChannel-S","行政院 經貿國是會議-愛卡拉(iKala)2",,,,,,\n" http://www.appledaily.com.tw/livechannel/nationalmeeting01",蘋果LIVE經貿國是會議1,,,,,,\n" http://www.appledaily.com.tw/livechannel/nationalmeeting02",蘋果LIVE經貿國是會議2,,,,,,\n" https://www.youtube.com/channel/UCqxZB7eJ34jf0rZUS_1LUAg","行政院 國發會 國是會議直播小組 Youtube過往直播","{""target"":""_blank""}",新分頁:issue,,,,\n" https://www.youtube.com/channel/UCfgXJRfOL1vek3YFw2QmJ5A","行政院 國發會 國是會議直播小組２ Youtube過往直播","{""target"":""_blank""}",新分頁:issue,,,,\n" http://www.appledaily.com.tw/livechannel/subject/37","7/31蘋果LIVE 二次自經區溝通會",,,,,,\n" https://www.youtube.com/watch?v=edJMUgFsBi8","7/31二次自經區溝通會 農業加值",,,,,,\n" https://www.youtube.com/watch?v=qy_pxqFczgY","8/4二次自經區溝通會 教育創新",,,,,,\n,,,,,,,\n" https://www.youtube.com/watch?v=adFNN0dgsEY","7/21二次自經區溝通會 總體政策",,,,,,\n" http://www.ustream.tv/embed/18469624",7.11二次自經區深度溝通會前會,,,,,,\n" https://www.youtube.com/channel/UC_7MwKr2JOoFH_xOF_R961A","行政院 國發會 二次自經區溝通會 Youtube過往直播","{""target"":""_blank""}",新分頁:issue,,,,\n" https://www.youtube.com/channel/UCL39yxKnDTvz97uvs4hiYRQ/feed","行政院 金管會 Youtube過往直播","{""target"":""_blank""}",新分頁:issue,,,,\n" https://livehouse.in/channel/yda","教育部 青年發展署",,,,,,\n,"影音直播 (黑畫面請按F5)","{""expand"": true}",,,,,\n" https://adblockplus.org/zh_TW/chrome",Chrome擋廣告外掛,"{""target"":""_blank""}",,,,,\n" https://www.google.com/calendar/embed?src=ptt.publicissue%40gmail.com&mode=week",鄉民曆,,,,,,\n" http://www.ustream.tv/embed/17157275","PENNYKEN 公民記者",,,,,,\n" http://www.ustream.tv/embed/17863662","點點 公民記者",,,,,,\n" http://www.ustream.tv/embed/18477607",張慶恩的台獨國際新聞,,"午間,台獨國際新聞:info,2300暫定,人格健全，與台獨的關係:info","7/26:,1800~2200:,台獨史明革命ing:info",,,\n" http://www.ustream.tv/embed/18530557",鄉民email,,,,,,\n" http://www.ustream.tv/embed/17992061","Masaru 南部實況",,,,,,\n" http://www.ustream.tv/embed/18030256","阿凱 公民覺醒紀錄",,,,,,\n" http://www.ustream.tv/embed/17733674","jackywolf 公民記者",,,,,,\n" http://www.ustream.tv/embed/18380808","小鳥台 公民記者",,,,,,\n" http://www.ustream.tv/embed/18103859",文森直播,,,,,,\n" http://www.ustream.tv/embed/17897006",野自Live,,,,,,\n" http://www.ustream.tv/embed/17948037","豪豬 公民記者",,,,,,\n" http://www.ustream.tv/embed/18246634","欣欣 公民記者",,,,,,\n" http://www.ustream.tv/embed/7468658",文源LIVE秀,,,,,,\n" http://www.ustream.tv/embed/17513092",拖鞋直播-1,,,,,,\n" http://www.ustream.tv/embed/17894339","阿法 公民記者",,,,,,\n" http://www.ustream.tv/embed/18109047","新竹蕾拉 公民記者",,,,,,\n" http://www.ustream.tv/embed/17551115","蜂潮 再起",,,,,,\n" http://www.ustream.tv/embed/18200914",直樹Live頻道,,,,,,\n" http://www.ustream.tv/embed/18401148",梁文韜,,,,,,\n" http://www.ustream.tv/embed/18062563",基進側翼,,,,,,\n" http://www.ustream.tv/embed/18511952",哲學非星期五＠台中,,,,,,\n" http://www.ustream.tv/embed/17989057",哲學星期五＠台中,,,,,,\n" http://www.ustream.tv/embed/18245525","髒髒 公民記者",,,,,,\n" http://www.ustream.tv/embed/17811041",Sean-公民記者,,,,,,\n" http://www.ustream.tv/embed/17843610",電池線上,,,,,,\n" http://www.ustream.tv/embed/17969826","飛魚台 南部實況",,,,,,\n" http://www.ustream.tv/embed/18308641",Citizentw,,,,,,\n" http://www.ustream.tv/embed/17858274",台南民主店頭,,,,,,\n" http://www.ustream.tv/embed/18482988",wwe_dx_jad,,,,,,\n" http://www.ustream.tv/embed/18511678","阿至 公民記者",,,,,,\n" http://www.ustream.tv/embed/18412678","麵包 公民記者",,,,,,\n" http://www.ustream.tv/embed/17755037","帽客 公民記者",,,,,,\n" http://www.ustream.tv/embed/17929143","小六 公民記者",,,,,,\n" http://www.ustream.tv/embed/17562385","麵線 公民記者",,,,,,\n" http://www.ustream.tv/embed/18476332","公民線上 Citizen Live",,,,,,\n" http://www.ustream.tv/embed/18407461","Eason小胖 公民記者",,,,,,\n" http://www.ustream.tv/embed/18390482","米飛  公民記者",,,,,,\n" http://www.ustream.tv/embed/17866960",小駿線上,,,,,,\n" http://www.ustream.tv/embed/17916604",阿賢文旦直播台,,,,,,\n" http://www.ustream.tv/embed/3526833",公視新聞網,,,,,,\n" http://www.ustream.tv/embed/18379958","皮皮 公民記者",,,,,,\n" http://www.ustream.tv/embed/18174265","小光 公民記者",,,,,,\n" http://www.ustream.tv/embed/17996833","雪倫 公民記者",,,,,,\n" http://www.ustream.tv/embed/17622630","banana 公民記者",,,,,,\n" http://www.ustream.tv/embed/17958896",拖鞋直播-2,,,,,,\n" http://www.ustream.tv/embed/17587751",拖鞋直播-3,,,,,,\n" http://www.ustream.tv/embed/17894854",拖鞋直播-日本語,,,,,,\n" http://www.ustream.tv/embed/17857738",公投盟直播,,,,,,\n" http://www.ustream.tv/embed/17568654",南民思潮,,,,,,\n" http://www.ustream.tv/embed/17923438",公民Live直播,,,,,,\n" http://www.ustream.tv/embed/17878254","Jivedbyvoice 公民記者",,,,,,\n" http://www.ustream.tv/embed/18127743","Daniel Chen公民記者",,,,,,\n" http://www.ustream.tv/embed/17890296","雨停 公民記者","{""bar"": ""http://g0v.github.io/live/status_bar.html?{url}"", ""enable_bar"": {""video"":true}}",,,,,\n" http://www.ustream.tv/embed/17988421","Hulk_Che 公民記者",,,,,,\n" http://www.ustream.tv/embed/18223731",台灣民政府1,,,,,,\n" http://www.ustream.tv/embed/14603849",台灣民政府2,,,,,,\n" http://www.ustream.tv/embed/18445690",penghuyouth,,,,,,\n" http://www.ustream.tv/embed/16630308","Indie Love",,,,,,\n" http://www.ustream.tv/embed/13620594",五六運動、公民論壇,,"週五1800~2100:,中正紀念堂:,自由廣場前:",,,,\n" http://www.ustream.tv/embed/18123294","週五 太陽花講習會",,"活動暫停:,週五1900~2100:,中正紀念堂:,國家劇院前:",,,,\n" http://www.ustream.tv/embed/17640717","人民民主陣線 人民議會",,週六1900~2200:,,,,\n" http://www.ustream.tv/embed/18506067","Mayaman 社運紀實",,"7/26:,1400~1800:,社運紀實口述歷史2/3:",,,,\n" http://www.ustream.tv/embed/17569549","g0v 1號機",,,,,,\n" http://www.ustream.tv/embed/17557850","g0v 2號機",,,,,,\n" http://www.ustream.tv/embed/17680676","g0v 3號機",,,,,,\n" http://www.ustream.tv/embed/17592160","g0v 4號機",,,,,,\n" http://www.ustream.tv/recorded/45245933",行政院機動組2,,,,,,\n" http://www.ustream.tv/embed/17537793","濟南路 南側 ",,,,,,\n" http://www.ustream.tv/embed/17576277",清大野台講堂,,,,,,\n" http://www.ustream.tv/embed/12933307",公投盟直播機,,,,,,\n" http://www.ustream.tv/embed/17859517",南方公民網,,,,,,\n" http://www.ustream.tv/embed/18109047","新竹蕾拉 公民記者",,,,,,\n" http://musou.tw/schedules",沃草國會無雙,"{""target"":""_blank""}",,,,,\n" http://www.appledaily.com.tw/livechannel/subject/17",蘋果立法院議會LIVE,,,,,,\n" http://www.ustream.tv/embed/17012502","沃草國會無雙 第一競技場",,,,,,\n" http://www.ustream.tv/embed/17401996","沃草國會無雙 第二競技場",,,,,,\n" http://www.ustream.tv/embed/17989031","沃草國會無雙 第三競技場",,,,,,\n" https://livehouse.in/channel/watchout",【沃草直播室】,,,,,,\n" https://livehouse.in/channel/watchout2",【沃草直播室2】,,,,,,\n" http://www.ustream.tv/embed/17823792","民報直播 立法院OnLine",,,,,,\n,過往直播,"{""expand"":false} ",,,,,\n" https://www.youtube.com/watch?v=jhBebtXaIC8"," 蘋果LIVE[直擊現場]香港七一遊行",,,,,,\n" http://www.ustream.tv/recorded/45245933",行政院機動組2,,,,,,\n" https://www.youtube.com/watch?v=HwhE9nKcWdQ",壹電視,,,,,,\n" http://www.youtube.com/embed/mXp2iD8QxvE","濟南路 (g0v)",,,,BITCHDOG,lee,\n" http://www.youtube.com/embed/sHKXPgq19xg","議場內 1F (音地) ",,,,indietaiwan,,\n" http://www.youtube.com/embed/kfLE82spRME",青島東立院廣場,,,,,oJelly,\n" http://www.youtube.com/embed/olBRbBz-q_g","議場內 2F (蘋報) ",,,,appledaily,au,\n" http://www.youtube.com/embed/fIpmkvtvtaQ","青島東 (g0v)",,,1915pm,"bert Wang","bert Wang",\n" http://www.youtube.com/embed/-cWb3SnnyfM","青島東 (蘋報) ",,,,appledaily,au,\n" http://www.youtube.com/embed/pxv-thjDpfU","進場過程 3/18 ",,,,,,\n" http://www.youtube.com/embed/rm5kI7X6sJ0","場外 3/18 ",,,,,,\n" http://www.youtube.com/embed/yj9Dy0IMmi0","場外 3/19 上午 ",,,,,,\n" http://www.youtube.com/embed/bgHcFFWnXkM","場外 3/19 下午 ",,,,,,\n" http://www.youtube.com/embed/pptmdPk-0DQ","北側 3/19 晚間 ",,,,,,\n" http://www.youtube.com/embed/mpqkvYTM30g","北側 3/19 傍晚 ",,,,,,\n" http://www.youtube.com/embed/dDimp7TDhJw","北側 3/19 下午 ",,,,,,\n" http://www.youtube.com/embed/wKuWnBSXF3s","3/19 警方凌晨 3 點第一波攻堅 ",,,,,,\n" http://www.youtube.com/embed/_rwNDRKG-uI","議場內（蘋報 319） ","  ",,"  ",,,\n" http://www.youtube.com/embed/0J4mZlkFmRs","議場內（蘋報 320） ",,,"hychen ",,,\n" http://www.youtube.com/embed/odUyLRc3P0M","台中 ",,,,,,\n" http://www.youtube.com/embed/uTxGjgRu3Xs",行政院機動組1,,,,,,\n" http://www.youtube.com/embed/WjB7waqvNQk","北側 3/24",,,,,,\n" http://www.youtube.com/embed/gq4T8UPSpJk","濟南路 舞台 (音地) ",,,,,,\n" http://www.youtube.com/embed/FvbvAH5_0oI","議場內（蘋報 323） ",,,,,,\n" http://www.youtube.com/embed/m-Vo5DjxNlo","議場內（蘋報 326） ",,,,,,\n" http://www.youtube.com/embed/Rafu80fdAK0","凱道主講台 (音地 330)",,,,,,\nhttps://www.google.com/calendar/embed?src=ptt.publicissue%40gmail.com&mode=week,鄉民曆,,,,,,\n,持續關注&即將發生事件,"{""expand"": false}",,,,,\n" https://www.facebook.com/aorft/posts/777770432268209","控訴國家暴力自訴案件 3/23~24尋找證人",,有些帳現在不算，以後就沒機會了！:important,,,,\n" https://www.ptt.cc/bbs/PublicIssue/M.1404310911.A.D60.html","後灣開發案 不要再被財團騙了",,"線上連署:important,結束時間未定:info",,,,\n" https://www.facebook.com/yilanforyilaneses",[宜蘭]「反對北宜直鐵」,,,,,,\n" http://news.ltn.com.tw/news/life/breakingnews/1055057","北纜案 北市府將再上訴",,7月底最後上訴期限:important,,,,\n" http://www.appledaily.com.tw/appledaily/article/headline/20140713/35956066/%E9%83%AD%E5%86%A0%E8%8B%B1%E9%80%80%E4%BC%91%E9%87%91%E7%9C%81%E5%BA%9C%EF%BC%9A%E5%85%88%E4%B8%8D%E7%B5%A6",郭冠英爽領退休金，全民關注！,,,,,,\n" https://www.facebook.com/aorft/posts/785375354841050",7/31[公投盟]蘇格蘭獨立公投團報名截止日,,觀察團出團時間9/12~9/22,,,,\n" https://www.facebook.com/vivian.chang.18041/posts/10152368592518022","8/2桃園 五千坪客家老宅即將變廢墟",,,,,,\n" https://www.facebook.com/photo.php?fbid=436065626536364&set=a.368489606627300.1073741828.367922930017301&type=1",7/28~8/8二次臨時會已排入自經區審議,,備戰通知:important,,,,\n" http://www.ly.gov.tw/01_lyinfo/0109_meeting/meetingList.action","立法院 會議預報",,,,,,\n" http://www.cwb.gov.tw/V7/forecast/town368/towns/6300500.htm?layer=0&type=Weather&time=3Hr",立法院(中正區)天氣預報,,,,,,\n" http://www.stormmediagroup.com/opencms/news/detail/83f5c8b0-08f5-11e4-8645-ef2804cba5a1/?uuid=83f5c8b0-08f5-11e4-8645-ef2804cba5a1",九月海協會長陳德銘訪台,,,,,,\n,全台活動,,,,,,\n" https://www.facebook.com/censusmarch/app_202746096443643",7/25~7/28[籍行軍]剩餘時間,,"2014年7月29日 1200",,,,\n" https://www.facebook.com/photo.php?fbid=826029420740740&set=a.126145224062500.21698.100000010685369&type=1&permPage=1","7/24~8/2[台中活動]搶救神岡浮圳 10日大作戰",,,,,,\n" http://campaign.tw-npo.org/sign.php?id=20140322102327",反對神岡移水圳砍老樹-浮圳拓路一案,," 網路連署:info",,,,\n" https://www.facebook.com/LoveShengang/photos/a.238796589659260.1073741837.233374530201466/277504339121818/?type=1","大家來找碴之 神岡浮圳 細部設計圖",,,,,,\n" https://www.facebook.com/events/708902059147568/permalink/709256735778767/","7/25[台北記者會]一朵白玫瑰 遙祭馬公空難受難者",,"0900~1100,捷運松山機場站出口3:",,,,\n" https://www.facebook.com/events/708902059147568/permalink/709228285781612/","7/25~8/10[台北祈福]一朵白玫瑰 遙祭馬公空難受難者",,捷運松山機場站出口3:,,,,\n" https://www.facebook.com/events/694906300544454/",7/25[教育部抗議]搶救大學老師！反對各大學違法解聘與資遣教職員，惡化教育品質！,,"0940集合,教育部外人行道:,台北市中山南路5號:,Pennyken直播預定:info",,,,\n" https://www.facebook.com/pan.hanchiang/posts/10202424512190381",7/25[台北記者會]護樹記者會(暫定),,"1500~1700,台北地方法院檢察署:,北市博愛路131號:",,,,\n,割闌尾＆補正公投法,"{""expand"": false}",,,,,\n" http://taiwanmarch.tw/signedonline.html","公投修法 連署書",,線上填寫:info,,,,\n" https://www.facebook.com/infavorofKCteacher/photos/a.1441277809451493.1073741828.1441269276119013/1479277452318195/?type=1",7/25[島國前進]街頭連署,,"7/25高雄:info,1900~2100,中央公園＞捷運2號出口:",,,,\n,,,"7/26台北:info,1700~2200,府中>南雅夜市:,台中:info,1800~2100,一中街水利大樓廣場:,台南:info,1600~1830,海安路與正興街口:,高雄:info,1900~2100,鼓山渡船頭:",,,,\n,,,"7/27台中:info,1600~1800,市民廣場:,台南:info,1600~1830,台南火車站前:,高雄:info,1600~2000,文化中心＞廣州一街出入口:,1630~2030,高雄巨蛋 五月天演唱會:",,,,\n" https://www.facebook.com/permalink.php?story_fbid=331226913706875&id=320272928135607",7/25[內湖南港割闌尾]正元手術房,,"1630~1800,金龍市場:,1900~2100,大湖公園:,NEW!!",,,,\n" https://www.facebook.com/photo.php?fbid=346416472177046&set=a.337300016422025.1073741827.337299219755438&type=1",7/25[高雄割闌尾]小港前鎮割手之夜#2,,"1700~2030,小港平和二路:,大港超市:",,,,\n,全台講座,"{""expand"": false}",,,,,\n" http://grass.tw/","7/18~8/15 民主小草計劃",,,,,,\n" https://www.facebook.com/photo.php?fbid=362895653860578&set=a.360315124118631.1073741828.359933814156762&type=1","7/25民主小草 基隆說明會",,"1900~2100,金豆咖啡:,基隆市忠三路75號:,顧立雄:important,林睿騰:important,李正仁:important",,,,\n" https://www.facebook.com/pages/%E6%88%91%E6%98%AF%E4%BA%BA%E6%88%91%E5%8F%8D%E6%A0%B8/307969115955037",五六運動、公民論壇,,"每週五,1800~2100,中正紀年堂 自由廣場:",,,,\n" https://www.facebook.com/cafephilotw/photos/a.168257056548504.32682.142163125824564/814494531924750/?type=1",7/25[台北哲五]有球必報：台灣體育新聞的問題與想像,,"1930~2130,慕哲咖啡館:,紹興北街3號B1:,捷運板南線:,善導寺站6號出口:,黃國洲:important,資深棒球專欄作家:important,翁嘉銘:important,知名棒球文字工作者:important,",,,,\n" https://www.facebook.com/FlyingV.cc/photos/a.402777886404873.116026.274575209225142/912598925422764/?type=1&fref=nf","7/25[台北講座]FlyingVx天地人文創 成功人生方程式",,"1900~2130,天地人文創:,台北市中正區齊東街74號1樓:,捷運忠孝新生站2號出口:,步行7-10分鐘:,彭筱婷 x 李映昕:important,低消200:info,",,,,\n" https://www.facebook.com/events/751466614896286/","7/25[台中哲五]原住民 關我什麼事？",,"1900~2100,台中市民族路35號:,好伴共同工作空間:,方克舟:important, 《什麼，你也愛台灣原住民？！》:important,小編、Mata Taiwan 創辦人:important,哲五@台中直播預定:info",,,,\n" http://www.wakeupgov.com/event/%E3%80%90%E5%BE%9E%E9%9B%BB%E5%BD%B1%E3%80%8A%E7%99%BD%E7%B1%B3%E7%82%B8%E5%BD%88%E5%AE%A2%E3%80%8B%E8%AB%87%E5%8F%B0%E7%81%A3%E8%BE%B2%E6%A5%AD%E3%80%91",7/25[苗栗講座]從電影《白米炸彈客》談台灣農業,,"1830~2200,竹南咖啡:,苗栗縣大營路99號:,楊儒門:important,低消 一杯飲品:info",,,,\n" https://www.facebook.com/events/539685049490450/","7/25[彰化講座]公民思潮之夜 纜車來了，黑熊何去何從？",,"1900~2100,端倪生活:,彰化市三民路九號:,統聯客運對面:,郭彥仁:important,屏東科技大學:important,野生動物保育所研究助理:important",,,,\n" http://www.beclass.com/rid=173525253ac341855daf","7/25[台南演講]WuTalk 在開發中黯淡的百年華光：台北刑務所的文資保存運動",,"1900~2100,台南市南門路21號:,臺南數位文創園區-胖地:,郁長文:important,台北刑務所護育聯盟研究員:important,台大城鄉所碩士生:important,",,,,\n,次日活動,"{""expand"": false}",,,,,\n,,,"週一1900~2100,雙十人行廣場:,捷運江子翠站三號出口:,沿雙十路走:,屈臣氏和Starbucks之間:",,,,\n,,,"週四1900~2100,新埔郵局:,捷運新埔站旁，近一號出口:,新北市板橋區文化路1段395號:",,,,\n" https://www.facebook.com/AppendectomyDeWhip/posts/610964449011595",7/26[板橋割闌尾]林鴻池(固定擺攤),,"週六17300~1930,板橋車站的站前廣場:,板橋萬坪都會公園:,靠近""文化路一段""那一側:,捷運板橋站三號出口:,出來後向文化路一段方向走:",,,,\n" https://docs.google.com/forms/d/1TXGo-nt7dj7wjuwMRyy_Y0b6_5t8k7R_7P617K63JKE/viewform",7/26~28[樂生]暑期修繕工作坊,,"7/26 1000~1700,蓬萊社:,台灣新北市新莊區中正路794號:,請務必填寫，以利統計人數及保險:important,提供代訂午餐:info,將於當日統計數量及收取費用:info",,,,\n" https://www.facebook.com/permalink.php?story_fbid=331226913706875&id=320272928135607",7/26[內湖南港割闌尾]正元手術房,,"0930~1300,東湖市場內的公園:,1730~1930,碧湖公園:",,,,\n" https://www.facebook.com/permalink.php?story_fbid=337468309737415&id=100004227453348",7/26[關渡講座]台獨史明革命ing,,"1800~2200,史明:important,張慶恩:important,關渡捷運站走出來就到了:,台獨國際新聞直播預定:info",,,,\n" https://docs.google.com/forms/d/1MLxWcWGETeMbkhH57pPpmCoGecqp8CwVDCyWNf_lVqY/viewform?fbzx=7578344857076229268","7/26[台北講座]網路傳播 重新想像世界的可能",,"1000~1200,文化大學大新館309教室:,台北市延平南路127號:,鄭國威:important,全球之聲中文版發行人兼編輯:important",,,,\n" https://www.facebook.com/events/675745935847488/?ref=3&ref_newsfeed_story_type=regular",7/26[台中]青年議會招募中!,,"0900開始,中區再生基地 DRF Goodot Village:,台中市中區中山路69號:",,,,\n" https://www.facebook.com/photo.php?fbid=306625269515850&set=a.263018680543176.1073741829.262680967243614&type=1",7/26[台北培訓]社運紀實口述歷史2/3,,"1400~1800,國立臺灣師範大學勤308教室:,文學院會議室:",,,,\n" https://www.facebook.com/TAVUR.tw/posts/717572864975880",7/26想知道新莊老街發生什麼事？,,"0850~1200,新莊捷運站2號出口集合:,導覽活動:info",,,,\n" https://www.facebook.com/photo.php?fbid=707321822662400&set=a.152858528108735.31770.148513668543221&type=1",7/26[台北論壇]環境、自由化與民主,,"1830~2130,台灣大學校友會館:,台北市濟南路一段2之1號:"," 後續:http://bit.ly/1rFiaEp",,,\n" https://www.facebook.com/photo.php?fbid=255795667949429&set=a.235311836664479.1073741829.234638826731780&type=1&permPage=1","7/26[電影]台南 貢寮你好嗎 ？",,"1850~2130,政大書城後方停車場:,導演崔愫欣 映後座談:important,樂團 少年白 Grey Youth:important",,,,\n" https://www.facebook.com/permalink.php?story_fbid=331226913706875&id=320272928135607",7/27[內湖南港割闌尾]正元手術房,,"1630~2000,東湖哈拉中國信託銀行:1700~1930,碧湖公園:",,,,\n" https://www.facebook.com/vivian.chang.18041/posts/10152368592518022","8/2桃園 五千坪客家老宅即將變廢墟",,,,,,\n" https://www.facebook.com/DaoDongTang/posts/592323230884697",7/27[桃園導覽]搶救楊梅道東堂,,"0900開始,楊梅市楊新路三段一巷36號:,楊梅鄭家瑞源里道東堂:",,,,\n" https://www.facebook.com/events/299388050241455/?ref_newsfeed_story_type=regular&fref=nf",7/27大溪蜜蜂，民主起風，桃園大溪，公民共下,,"1500開始,大溪橋東:",,,,\n" https://www.facebook.com/photo.php?fbid=345649472253746&set=a.337300016422025.1073741827.337299219755438&type=1","7/27[高雄割闌尾]志工大會PART 2！",,"1300~1500,月讀次文化劇場ARIA55:,高雄三民區建國二路255號B1:",,,,\n" https://www.facebook.com/18vote/photos/gm.1476768855897921/535667033245179/?type=1",7/27臺北如何成為一個友善青少年的城市？,,"1500~1700,信義區新光三越香堤廣場:,A8、A9、A11中間廣場:",,,,\n" http://www.happyradio.com.tw/stream/stream_taipei.php","週一 黑鬥不服從",,"1700~1800,廣播[快樂連播網]:info",,,,\n" https://www.facebook.com/events/1515041072053323/?ref=4","0730【作伙講台語，台語當流行 in TAINAN】",,,,,,\n" https://docs.google.com/forms/d/1yLABTGJpTcSP5l4OjUdD_Pew_NL0lzlVVqG2HVwNQDc/viewform","7/31[國發會 台北溝通會]示範區深度溝通#3農業加值",,"1830~2000,台灣台北市大安區光復南路102號:,近捷運國父紀念館站5號出口:,YOUR SPACE:",,,,\n,,,"7/4[國發會 台北溝通會]示範區深度溝通#4教育創新",,,,\n" https://www.facebook.com/IndigenousYouthFront/photos/a.762528523775488.1073741828.762486550446352/896103797084626/?type=1&fref=nf","8/1~8/3[花蓮]Yu\'fafoinana 逐路者圍火會議",,"8/1 1400 ~ 8/3 下午,花蓮港口部落項鍊工作室:,台十一線65K處，月洞正對面:",,,,\n" https://www.facebook.com/events/1520705714816170/?ref=4",8/2[台北講座]從統獨談民主憲政基本概念,,"1400~1600,荒漠甘泉:,羅斯福路三段316巷18號:,姚立明:important",,,,\n" https://www.facebook.com/events/595352340577297/?ref=3&ref_newsfeed_story_type=regular",8/3[國防部抗議]軍冤案沉冤未雪,,"1800~2000,路過國防部:",,,,\n" https://www.facebook.com/events/735071376532010/?ref=3&ref_newsfeed_story_type=regular","8/23~8/25[美國華盛頓]2014 FAPA YPG National Advocacy Conference",,,,,,\n,文字轉播專區,"{""expand"":false} ",,,,,\n" http://ncc.nctu.pro/","服貿討論 (交大)",,,,,,\n" https://ethercalc.org/static/proxy/hackpad/","文字轉播 (主要) ",,,,,,\n" http://congress-text-live.herokuapp.com/","文字轉播 (同上)",,,,,,\n" https://ethercalc.org/static/proxy/live.txt","文字轉播 (內場)",,,,,,\n" https://ethercalc.org/static/proxy/english/","English Transcript",,,,,,\n" https://docs.google.com/document/d/1Esi-GjLXFwF0CDsykyddGaWBTnM22zeVY4ciZ0gyf9M/pub","320 街頭民主教室逐字稿紀錄",,,,,,\n" https://ethercalc.org/static/proxy/hackpad/3-24.html","3-24 中午備份",,,,,,\n" https://ethercalc.org/static/proxy/english/3-24.html","3-24 Noon Archive",,,,,,\n" https://docs.google.com/document/d/1uTmn5-nUKW-MEpR5ygBfG10HEJ-Zul4TrtntKAOPxbQ/edit?disco=AAAAAH_Tjng ","文字轉播 GoogleDoc",,,,,,\n" https://ethercalc.org/static/proxy/hackpad/8a13Bv9DNla","4-22 零時文播",,,,,au,\n,"人力物資需求 ","{""expand"":false} ",,,,,\n" https://g0v.hackpad.com/-Live--HpwTUS2OShF ","遠端文字轉播排班表 ",,停止:,,,,\n" https://docs.google.com/spreadsheets/d/1zxF2MhhCedsKE23lW4sDHb7Uo2HrkEp3VusdWQruRzQ/pubhtml","守護民主之夜 現場需求",,停止:,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AkNsS2a-Qx8ZdGpmekpMQjJBNWZsbjh6cUxORVR4QUE&usp=sharing ","青島東路線路組物資需求 ",,停止:,,,,\n,抗議行動相關資訊,"{""expand"":""false""} ",,,,,\n" https://g0v.hackpad.com/2dCf0sLS70c",聯合指揮中心窗口,,,,,,\n" https://docs.google.com/document/d/1t0Xxy3mI4Ct2QBp6kqoi1NDtgQVe1EMlBlFEu7e6qZQ/pub ","抗議者自保須知 ",,,,,,\n" https://mapsengine.google.com/map/u/1/embed?mid=zlxW8eSZKLlk.k1Nzj2E6NfgY",周邊地圖,,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dFZfdjd2alRLaW83WHpuX0JnUmJPZmc","台北以外活動 ",,,,,,\n,"媒體區  - Media","{""expand"":false} ",,,,,\n" https://g0v.hackpad.com/318--vCNzeS4wnbh","318 學運罷課聲明",,,,,,\n" https://g0v.hackpad.com/ep/pad/static/HeVtO3WBpXk","English Communiqué",,,,,,\n" https://docs.google.com/document/d/1oVxDBCcp4b-IJmIL4-duQo1Y4SBzAUBtwcrUfTdLj18/edit?usp=sharing ","各團體行動聲明 ",,,,,,\n" https://g0v.hackpad.com/318--H6s4KlBRSC3","各團體行動聲明 (備份) ",,,,,,\n" https://g0v.hackpad.com/-FAQ-gGlUisv5cMG","佔領立法院行動 FAQ ",,,,,,\n" https://g0v.hackpad.com/A4-7E4ts6CMRsq","佔領立法院 A4 傳單 ",,,,,,\n" https://g0v.hackpad.com/X0fp4Z6AhiL","街頭採訪要點 ",,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dHhIeVdaTHNnMjhIT1VWRm5VSjNQd1E",外電消息整理,,,,,,\n" https://docs.google.com/document/d/1NoiYQyZOhGcN2cRA9DRZ85_sFh7AUe-lpaxPmNcO1Ps/edit?usp=sharing ","照片來源 ",,,,,,\n" https://g0v.hackpad.com/--PEn9NyJRh2X","創作收集 ",,,,,,\n" http://occupation.today/","照片與訊息 Tumblr ",,,,,,\n" http://review.fumao.today/",自己的服貿自己審,"{""target"": ""_blank""} ",新視窗:info,,,,\n" https://www.facebook.com/NtuNewsEForum",台大新聞E論壇,"{""target"": ""_blank""} ",新視窗:info,,,,\n,連結彙集平台,"{""expand"":false} ",,,,,\n" http://time-fumao.rhcloud.com/",太陽花怪獸,,,,,,\n" http://news.anon.tw",台灣大補帖＃fumao.tw,,,,,,',angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(t,e,n,o,a){return t.$watch("$state.current.name",function(e){return"irc"===e?t.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return a(function(){return window.scrollTo(0,1)},0)}),a(function(){return o.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$sce","$window","$state","$cookies","HackFolder"].concat(function(t,e,n,o,a,r){var c,s;return import$(t,{hasViewMode:function(t){return null!=t?t.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:r.iframes,docs:r.docs,tree:r.tree,godoc:function(e){var n;return"_blank"===(null!=(n=e.opts)?n.target:void 0)?(window.open(e.url,e.id),!0):e.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(e.url,e.id),!0):t.go("/"+t.hackId+"/"+decodeURIComponent(e.id))},open:function(t){return window.open(t.url,t.id),!1},activate:function(t){var e;return e=r.activate(t),"hackfoldr"===(null!=e?e.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(e,n,o){return t.saveModalOpen=e,o&&(t.saveBtn=$(o.target)),n&&(a.savebtn="consumed",t.saveBtn)?t.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==a.savebtn},HackFolder:r,barframeSrc:function(t){var n;return n=t.opts.bar.replace(/\{(\w+)\}/g,function(){return t[arguments[1]]}),e.trustAsResourceUrl(n)},iframeCallback:function(e){return function(n){return t.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,e),o.current.title=e.title+" – g0v.today",e.noiframe="fail"===n?!0:!1,"unsure"===n?e.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return r.getIndex(t,!0,function(){})}}),t.$watch("hackId",function(e){return r.getIndex(e,!1,function(){var n,a;return t.$watch("docId",function(n){var o;return n&&(o=r.activate(n)),"hackfoldr"===(null!=o?o.type:void 0)?(t.showIndex=!0,r.loadRemoteCsv(o.id,function(o,a,c){var s,p,i;return s=function(){var t,e,o,a=[];for(t=0,o=(e=r.tree).length;o>t;++t)s=e[t],s.id===n&&a.push(s);return a}()[0],s.tagFilter=null!=(p=s.tags)&&null!=(i=p[0])?i.content:void 0,s.chidlren||(null==s.children&&(s.children=null!=c?c[0].children:void 0),(p=r.docs).splice.apply(p,[a.length,0].concat(slice$.call(a)))),t.indexDocs=a,t.indexSearch=e.replace(/^g0v-/,"")})):t.showIndex=!1}),t.showIndex="hack.index"===o.current.name,t.showIndex?void 0:!t.docId&&(n=null!=(a=r.docs[0])?a.id:void 0)?o.transitionTo("hack.doc",{docId:n,hackId:t.hackId}):void 0})}),t.collapsed=null!=(c=a.collapsed)?c:n.innerWidth<768,t.$watch("collapsed",function(t){return null!=t?a.collapsed=t:void 0}),t.hackId=(s=o.params.hackId)?s:"congressoccupied",t.$watch("$state.params.docId",function(e){return e?t.docId=encodeURIComponent(encodeURIComponent(e)):void 0}),t.sidebar=!1,t.toggleSidebar=function(){return t.collapsed=!1,t.sidebar=!t.sidebar}})}).directive("resize",["$window"].concat(function(t){return function(e,n){var o;return o=function(){return e.width=t.innerWidth,e.height=t.innerHeight,e.contentHeight=t.innerHeight-$(n).offset().top},angular.element(t).bind("resize",function(){return e.$apply(o)}),o()}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,o){var a,r,c;return a=t(o.ngxIframe)(e),r=function(t,e){var n;return n=!function(){try{return"about:blank"==t.location}catch(e){}}(),a(e&&$.browser.mozilla?"unsure":n?"ok":"fail")},$(n).load(function(){return clearTimeout(c),r(this.contentWindow,!0)}),c=setTimeout(function(){return r(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,o){var a,r;return a=t(o.ngxClickMeta),r=navigator.appVersion.match(/Win/)?function(t){return t.ctrlKey}:function(t){return t.metaKey},$(n).click(function(t){return r(t)&&!a(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(t){return function(e){var n;return n=function(){var n;return n=$(".index"),e.hasScrollbar=n.get(0).scrollHeight>t.innerHeight-$(".navbar").height()},angular.element(t).bind("resize",function(){return e.$apply(n)}),e.$watch("docs",n),n()}})).factory({HackFolder:["$http","$sce"].concat(function(t,e){var n,o,a,r,c;return n={},o=[],a=[],c={iframes:n,docs:o,tree:a,activate:function(t,r){function c(t){return t.id}var s,p,i,w,u,l,d,h,m,v,b;for(null==r&&(r=!1),p=function(){var e,n,a,r=[];for(e=0,a=(n=o).length;a>e;++e)s=n[e],s.id===t&&r.push(s);return r}()[0],i=null!=p?p.type:void 0,w=0,l=(u=a).length;l>w;++w)d=u[w],(h=null!=d&&null!=(m=d.children)?m.map(c):void 0)&&in$(t,h)&&(d.expand=!0);return v=r?"edit":"view",b=function(){var e;switch(e=[i],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+v+"?pli=1&overridemobile=true";case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+v;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+v;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://"+(null!=(e=p.site)?e:"")+"hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"video"!==e[0]:if("youtube"===p.provider)return"https://www.youtube.com/embed/"+t;if("ustream"===p.provider)return"http://www.ustream.tv/embed/"+t+"?v=3";break;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),null!=p&&p.hashtag&&(b+=null!=p?p.hashtag:void 0),b&&(b=e.trustAsResourceUrl(b)),"hackfoldr"===(null!=p?p.type:void 0)?p:((h=n[t])?(h.src=b,h.mode=v):n[t]={src:b,doc:p,mode:v},p)},getIndex:function(t,e,n){var a,c,s=this;return r!==t||e?(a=0,(c=function(){var e;return e=CONST_CSV,setTimeout(function(){return r=t,o.length=0,s.processCsv(e,n)},1)})()):n(o)},processCsv:function(t,e){return this.loadCsv(t,o,a,function(t,n){return c.folderTitle=t,e(n)})},loadRemoteCsv:function(t,e){var n,o=this;return n=CONST_CSV,setTimeout(function(){var t,a;return t=[],a=[],o.loadCsv(n,t,a,function(n){return e(n,t,a)})},1)},loadCsv:function(t,e,n,o){function a(){try{return JSON.parse(f.replace(/""/g,'"'))}catch(t){}}function r(){var t;switch(t=[v],!1){case void 0!==t[0]:return p||(b&&(p=b,b=null),f&&(i=f)),{title:b,type:"dummy",id:"dummy"};
case!(I=/^\/\/(.*?)(?:\#(.*))?$/.exec(t[0])):return{type:"hackfoldr",id:I[1],tag:I[2]};case!(I=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:I[1]};case!(I=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:I[1]};case!(I=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:I[1]};case!(I=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:I[1]};case!(I=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:I[1]};case!(I=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",site:I[1],id:I[2]};case!(I=/https?:\/\/(?:youtu\.be\/|(?:www\.)?youtube\.com\/(?:embed\/|watch\?v=))([-\w]+)/.exec(t[0])):return{type:"video",provider:"youtube",id:I[1],icon:"http://g.etfv.co/"+v};case!(I=/https?:\/\/(?:www\.)?ustream\.tv\/(?:embed|channel)\/([-\w]+)/.exec(t[0])):return{type:"video",provider:"ustream",id:I[1],icon:"http://g.etfv.co/"+v};case!(I=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(v)),icon:"http://g.etfv.co/"+I[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",v):void 0}}function c(t){return t.length}function s(t){var e,n,o,a,r;return e=t.match(/^(.*?)(?::(.*))?$/),n=e[0],o=e[1],a=e[2],r=slice$.call(e,3),{content:o,"class":null!=a?a:"warning"}}var p,i,w,u,l,d,h,m,v,b,f,g,y,k,E,C,x,A,_,I,B,F,L,R,S,D;for(t=replace$.call(t,/^\"?#.*\n/gm,""),i={},u=[],l=0,h=(d=CSV.parse(t)).length;h>l;++l)m=d[l],v=m[0],b=m[1],f=m[2],g=m[3],y=m[4],k=slice$.call(m,5),b&&(b=replace$.call(b,/^"|"$/g,""),f&&(f=replace$.call(f,/^"|"$/g,"")),f&&(f=a()),null==f&&(f={}),g&&(g=replace$.call(g,/^"|"$/g,"")),E=v.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),C=E[0],x=E[1],v=E[2],A=E[3],_=import$({summary:y,hashtag:A,url:v,title:b,indent:x.length,opts:import$(import$({},i),f)},r()),u.push("dummy"!==_.type||null!=(E=_.title)&&E.length?import$(import$({icon:"/img/"+_.type+".png"},_),{tags:(null!=(E=null!=(B=_.opts)?B.tags:void 0)?E:[]).concat((null!=(E=null!=g?g.split(","):void 0)?E:[]).filter(c).map(s))}):null));for(w=u,w.filter(function(t){return null!=t?t.url:void 0}).map(function(t){var e,n,o;return"video"===t.type&&"youtube"===t.provider?(e=gapi.client.youtube.videos.list({id:t.id,part:"snippet"}),e.execute(function(e){var n;return"live"===(null!=(n=e.items)?n[0].snippet.liveBroadcastContent:void 0)?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(n=t.url.match(/ustream.tv\/embed\/([^?]+)/))?(o=n[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+o+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(e){var n,o;return"live"===JSON.parse(null!=(n=e.query)&&null!=(o=n.results)&&null!=(n=o.body)?n.p:void 0).results?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),e.splice.apply(e,[0,e.length].concat(slice$.call(w.filter(function(t){return null!=t})))),F=0,u=[],l=0,h=e.length;h>l;++l)R=l,_=e[l],R>0&&_.indent?(S=e[F],D=null!=(d=S.children)?d:S.children=[],D.push(_),u.push(null)):(F=R,u.push(_));return L=u,L=L.filter(function(t){return null!=t}),L=L.map(function(t){var e,n;return t.children&&(t.expand=null!=(e=null!=(n=t.opts)?n.expand:void 0)?e:t.children.length<5),t}),n.splice.apply(n,[0,n.length].concat(slice$.call(L))),o(p,e)}}})});