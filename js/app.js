function import$(t,e){var n={}.hasOwnProperty;for(var o in e)n.call(e,o)&&(t[o]=e[o]);return t}function in$(t,e){for(var n=-1,o=e.length>>>0;++n<o;)if(t===e[n])return!0;return!1}require.register("config.jsenv",function(t,e,n){n.exports={BUILD:"git-5f8479e",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}],GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,n){return t.state("about",{url:"/about",templateUrl:"partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/congressoccupied"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(t,e,n,o){return t.$state=e,t.$stateParam=n,t.go=function(t){return o.path(t)},t._build=require("config.jsenv").BUILD,t.$on("$stateChangeSuccess",function(t,e){var n;return n=e.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:o.$$url,title:n}):void 0}),t.safeApply=function(t,e){var n;return n=t.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof e?e():void 0:t.$apply(e)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})};var CONST_CSV,slice$=[].slice,replace$="".replace;CONST_CSV=',反黑箱服貿協議・守護民主日與夜,,,,直播人,更新人,"g0v.today 每 3 分鐘更新"\nhttp://newday.tw/intro/,讓晨曦照亮民主,,守護民主手環:important,,,even,\nhttp://ecfa.speaking.tw/,服貿跑馬燈,"{""expand"":false} ",,,,,\n" http://fact.g0v.tw/tisa.html",服貿跑馬燈-時間軸,,,,,,\nhttp://ecfa.speaking.tw/imho.php,"服貿東西軍 ",,,,,,"更新前請 *務必* 先刷新整頁試算表再改，感謝！"\nhttps://sites.google.com/site/twdstreet/,公民審服貿,,街頭民主審議:info,,,,"影音更新時請記得 *保留前方空白* 和 /embed/ 格式, 把 youtube watch?v=XXXXXX 的 XXXXX 放到 /embed/ 後即可。ustream 也是使用 /embed/ (按「Share/共用」可取得 embed code) — 然後更新 D 欄的「時間」和 F 欄的「更新人」。感謝!"\n,行動,,,,,,\n" http://123.g0v.today/",三動作護台灣,,致電立委:important,,,ipa,\n" http://appy.tw/",割闌尾計畫,"{""target"": ""_blank""} ",罷免連署:important,,,lee,\nhttp://nonuke.today/,停建核四、遍地烽火全記錄,"{""target"":""_blank""}",新分頁:issue,,,,\nhttp://hackfoldr.org/resistancelive/,香港7.1遊行暨後續活動現場直播,"{""target"":""_blank""}",新分頁:important,,,,\nhttp://i.imgur.com/PNyJAIq.png?3,LiveTW即時獲取直播頻道App,"{""expand"":true}",,,,,\n" https://chrome.google.com/webstore/detail/livetw/fhcffinobmpdchcoapdeoinhdmlihiok",Chrome：,"{""target"":""_blank""}",新分頁:issue,,,,\n" https://play.google.com/store/apps/details?id=com.g0v.live",Android：,"{""target"":""_blank""}",新分頁:issue,,,,\n" http://inlivetw.github.io/chrome/",Web：,,新版:important,,,,\n,"影音直播 (黑畫面請按F5)","{""expand"": true}",,,,,\n" https://adblockplus.org/zh_TW/chrome",Chrome擋廣告外掛,"{""target"":""_blank""}",,5/16加入,,,\n" https://www.google.com/calendar/embed?src=ptt.publicissue%40gmail.com&mode=week","鄉民日報 事件列表",,,6/19新增,,,\n" http://www.ustream.tv/embed/18245525","髒髒 公民記者",,高雄護樹公聽會:info,,,,\n" http://www.ustream.tv/embed/18246634","欣欣 公民記者",,,"love378297 6/28加入",,,\n" http://www.ustream.tv/embed/18401148",音地大帝,,"七一遊行前後 香港的變化:info",,,,\n" http://www.ustream.tv/embed/17897006",野自Live,,"台中 守護神岡 守護浮圳:info","野自 台中",,,\n" http://www.ustream.tv/embed/18477607",台獨國際新聞,,"7/20:,1500~1900:,光榮史明革命ing:",,,,\n" http://www.ustream.tv/embed/7468658",文源LIVE秀,,,文源LIVE秀,,,\n" http://www.ustream.tv/embed/17948037","豪豬 公民記者",,,"豪豬 5/5加入",,,\n" http://www.ustream.tv/embed/17513092",拖鞋直播-1,,,阿北一號機,,,\n" http://www.ustream.tv/embed/17811041",Sean-公民記者,,,"sean 5/13修改5/20改回",,,\n" http://www.ustream.tv/embed/17843610",電池線上,,,battery0922,,,\n" http://www.ustream.tv/embed/17969826","飛魚台 南部實況",,,"flyfish1130 5/25加入",,,\n" http://www.ustream.tv/embed/17989057",哲學星期五＠台中,,,,,,\n" http://www.ustream.tv/embed/18308641",Citizentw,,,,,,\n" http://www.ustream.tv/embed/17858274",台南民主店頭,,,,,,\n" http://www.ustream.tv/embed/17992061","Masaru 南部實況",,,"Masaru 南部實況轉播 5/9加入",,,\n" http://www.ustream.tv/embed/18482988",wwe_dx_jad,,,,,,\n" http://www.ustream.tv/embed/18103859",文森直播,,,"文森 6/26加入",,,\n" http://www.ustream.tv/embed/18511678","阿至 公民記者",,,freedom123602,,,\n" http://www.ustream.tv/embed/18412678","麵包 公民記者",,,,,,\n" http://www.ustream.tv/embed/18062563",基進側翼,,,,,,\n" http://www.ustream.tv/embed/17157275","PENNYKEN 公民記者",,,"PENNYKEN 5/12加入",,,\n" http://www.ustream.tv/embed/17863662","點點 公民記者",,,點點,,,\n" http://www.ustream.tv/embed/17755037","帽客 公民記者",,,,,,\n" http://www.ustream.tv/embed/18030256","阿凱 公民覺醒紀錄",,,"阿凱 5/13加入",,,\n" http://www.ustream.tv/embed/17929143","小六 公民記者",,,"小六 5/8加入",,,\n" http://www.ustream.tv/embed/17562385","麵線 公民記者",,,,,,\n" http://www.ustream.tv/embed/18476332","公民線上 Citizen Live",,,,,,\n" http://www.ustream.tv/embed/18407461","Eason小胖 公民記者",,,,,,\n" http://www.ustream.tv/embed/18380808","小鳥台 公民記者",,," 小鳥台 6/28加入",,,\n" http://www.ustream.tv/embed/18385635",阿弘直播台,,,,,,\n" http://www.ustream.tv/embed/17733674","jackywolf 公民記者",,,"jackywolf 6/9加入",,,\n" http://www.ustream.tv/embed/18390482","米飛  公民記者",,,"米飛  6/26加入",,,\n" http://www.ustream.tv/embed/18200914",直樹Live頻道,,,,,,\n" http://www.ustream.tv/embed/17866960",小駿線上,,,小駿,,,\n" http://www.ustream.tv/embed/17916604",阿賢文旦直播台,,,ahsien98,,,\n" http://www.ustream.tv/embed/3526833",公視新聞網,,,"公視新聞網 6/4加入",,,\n" http://www.ustream.tv/embed/18379958","皮皮 公民記者",,,"皮皮jonethwc 6/26加入",,,\n" http://www.ustream.tv/embed/18174265","小光 公民記者",,,"cvspka04476 6/13加入",,,\n" http://www.ustream.tv/embed/17894339","阿法 公民記者",,,"afrayang211 5/5加入",,,\n" http://www.ustream.tv/embed/17996833","雪倫 公民記者",,,"sharon chen 5/5加入",,,\n" http://www.ustream.tv/embed/17622630","banana 公民記者",,,,,,\n" http://www.ustream.tv/embed/17958896",拖鞋直播-2,,,阿北二號機,,,\n" http://www.ustream.tv/embed/17587751",拖鞋直播-3,,,"拖鞋直播-3 5/18加入",,,\n" http://www.ustream.tv/embed/17894854",拖鞋直播-日本語,,,"拖鞋直播-4 5/28加入",,,\n" http://www.ustream.tv/embed/17857738",公投盟直播,,,公投盟6/27加入,,,\n" http://www.ustream.tv/embed/17568654",南民思潮,,,"南民思潮 6/27新增",,,\n" http://www.ustream.tv/embed/17923438",公民Live直播,,,"公民Live直播 6/27新增",,,\n" http://www.ustream.tv/embed/17878254","Jivedbyvoice 公民記者",,,拖鞋直播陣線,,,\n" http://www.ustream.tv/embed/18127743","Daniel Chen公民記者",,,"Daniel Chen 5/22加入",,,\n" http://www.ustream.tv/embed/17890296","雨停 公民記者","{""bar"": ""http://g0v.github.io/live/status_bar.html?{url}"", ""enable_bar"": {""video"":true}}",,雨停,,,\n" http://www.ustream.tv/embed/17988421","Hulk_Che 公民記者",,,"Hulk_Che 5/14加入",,,\n" http://www.ustream.tv/embed/18223731",台灣民政府1,,,,,,\n" http://www.ustream.tv/embed/14603849",台灣民政府2,,,,,,\n" http://www.ustream.tv/embed/18445690",penghuyouth,,,,,,\n" http://www.ustream.tv/embed/16630308","Indie Love",,,,,,\n" http://www.ustream.tv/embed/13620594",五六運動、公民論壇,,"週五1800~2100:,中正紀念堂:,自由廣場前:",,,,\n" http://www.ustream.tv/embed/18123294","週五 太陽花講習會",,"活動暫停:,週五1900~2100:,中正紀念堂:,國家劇院前:","太陽花講習會 6/21加入",,,\n" http://www.ustream.tv/embed/17640717","人民民主陣線 人民議會",,"週六1900~2200:,長安西路145巷15號:",peopleboss,,,\n" http://www.ustream.tv/embed/18469624",二次自經區溝通會,,"7/21 總體政策:,7/24 國際健康:,7/31 農業加值:,8/4 教育創新:,1830開始:",,,,\n" http://www.ustream.tv/embed/18506067","Mayaman 社運紀實",,"7/26:,1400~1800:,社運紀實口述歷史2/3:",,,,\n" http://www.ustream.tv/embed/17569549","g0v 1號機",,,,jackie6chiang,chien,\n" http://www.ustream.tv/embed/17557850","g0v 2號機",,,,,,\n" http://www.ustream.tv/embed/17680676","g0v 3號機",,,,,,\n" http://www.ustream.tv/embed/17592160","g0v 4號機",,,,jonethwc,au,\n" http://www.ustream.tv/embed/17733928","只是路過 (公民記者)",,,,,,\n" http://www.ustream.tv/embed/17747496",台南魚腸花論壇,,,,,,\n" http://www.ustream.tv/embed/17548030","English LIVE",,,,(1F),rsghost,\n" http://www.ustream.tv/embed/17537793","濟南路 南側 ",,,,,,\n" http://www.ustream.tv/embed/17576277",清大野台講堂,,,,,,\n" http://www.ustream.tv/embed/12933307",公投盟直播機,,,,,,\n" http://www.ustream.tv/embed/17859517",南方公民網,,,,,,\n" http://www.ustream.tv/embed/18109047","新竹蕾拉 公民記者",,,,,,\n" http://musou.tw/schedules",沃草國會無雙,"{""target"":""_blank""}",,國會無雙IVOD,,,\n" http://www.appledaily.com.tw/livechannel/subject/17",蘋果立法院議會LIVE,,,"蘋果立法院議會 6/13 加入",,,\n" http://www.ustream.tv/embed/17012502","沃草國會無雙 第一競技場",,,"沃草國會無雙-1 5/15加入",,,\n" http://www.ustream.tv/embed/17401996","沃草國會無雙 第二競技場",,,"國會無雙 5/13加入",,,\n" http://www.ustream.tv/embed/17989031","沃草國會無雙 第三競技場",,,"沃草國會無雙-1 5/15加入",,,\n" https://livehouse.in/channel/watchout",【沃草直播室】,,,,,,\n" https://livehouse.in/channel/watchout2",【沃草直播室2】,,,,,,\n" http://www.ustream.tv/embed/17823792","民報直播 立法院OnLine",,,"cks6662 5/13加入",,,\n,過往直播,"{""expand"":false} ",,,,,\n" https://www.youtube.com/watch?v=jhBebtXaIC8"," 蘋果LIVE[直擊現場]香港七一遊行",,,,,,\n" http://www.ustream.tv/recorded/45245933",行政院機動組2,,,,,,\n" http://www.youtube.com/embed/iFNS5umx3Uo",壹電視,,,,,,\n" http://www.youtube.com/embed/mXp2iD8QxvE","濟南路 (g0v)",,,,BITCHDOG,lee,\n" http://www.youtube.com/embed/sHKXPgq19xg","議場內 1F (音地) ",,,,indietaiwan,,\n" http://www.youtube.com/embed/kfLE82spRME",青島東立院廣場,,,,,oJelly,\n" http://www.youtube.com/embed/olBRbBz-q_g","議場內 2F (蘋報) ",,,,appledaily,au,\n" http://www.youtube.com/embed/fIpmkvtvtaQ","青島東 (g0v)",,,1915pm,"bert Wang","bert Wang",\n" http://www.youtube.com/embed/-cWb3SnnyfM","青島東 (蘋報) ",,,,appledaily,au,\n" http://www.youtube.com/embed/pxv-thjDpfU","進場過程 3/18 ",,,,,,\n" http://www.youtube.com/embed/rm5kI7X6sJ0","場外 3/18 ",,,,,,\n" http://www.youtube.com/embed/yj9Dy0IMmi0","場外 3/19 上午 ",,,,,,\n" http://www.youtube.com/embed/bgHcFFWnXkM","場外 3/19 下午 ",,,,,,\n" http://www.youtube.com/embed/pptmdPk-0DQ","北側 3/19 晚間 ",,,,,,\n" http://www.youtube.com/embed/mpqkvYTM30g","北側 3/19 傍晚 ",,,,,,\n" http://www.youtube.com/embed/dDimp7TDhJw","北側 3/19 下午 ",,,,,,\n" http://www.youtube.com/embed/wKuWnBSXF3s","3/19 警方凌晨 3 點第一波攻堅 ",,,,,,\n" http://www.youtube.com/embed/_rwNDRKG-uI","議場內（蘋報 319） ","  ",,"  ",,,\n" http://www.youtube.com/embed/0J4mZlkFmRs","議場內（蘋報 320） ",,,"hychen ",,,\n" http://www.youtube.com/embed/odUyLRc3P0M","台中 ",,,,,,\n" http://www.youtube.com/embed/uTxGjgRu3Xs",行政院機動組1,,,,,,\n" http://www.youtube.com/embed/WjB7waqvNQk","北側 3/24",,,,,,\n" http://www.youtube.com/embed/gq4T8UPSpJk","濟南路 舞台 (音地) ",,,,,,\n" http://www.youtube.com/embed/FvbvAH5_0oI","議場內（蘋報 323） ",,,,,,\n" http://www.youtube.com/embed/m-Vo5DjxNlo","議場內（蘋報 326） ",,,,,,\n" http://www.youtube.com/embed/Rafu80fdAK0","凱道主講台 (音地 330)",,,,,,\n,持續關注&即將發生事件,"{""expand"": false}",,,,,\n" https://www.facebook.com/aorft/posts/777770432268209","控訴國家暴力自訴案件 3/23~24尋找證人",,有些帳現在不算，以後就沒機會了！:important,,,,\n" https://www.ptt.cc/bbs/PublicIssue/M.1404310911.A.D60.html","後灣開發案 不要再被財團騙了",,"線上連署:important,結束時間未定:info",,,,\n" http://www.chinatimes.com/newspapers/20140719000427-260108","7/19徐嘉森遭限制出境 海基會聘台籍律師協助",,,,,,\n" https://www.facebook.com/vivian.chang.18041/posts/10152368592518022","8/2桃園 五千坪客家老宅即將變廢墟",,,,,,\n" http://www.ly.gov.tw/01_lyinfo/0109_meeting/meetingList.action","立法院 會議預報",,,,,,\n" http://www.cwb.gov.tw/V7/forecast/town368/towns/6300500.htm?layer=0&type=Weather&time=3Hr",立法院(中正區)天氣預報,,,,,,\n" https://www.facebook.com/media/set/?set=a.360316390785171.1073741829.359933814156762&type=1","7/18開始 民主小草計劃",,,,,,\n" https://www.facebook.com/photo.php?fbid=436065626536364&set=a.368489606627300.1073741828.367922930017301&type=1",7/28~8/8二次臨時會已排入自經區審議,,備戰通知:important,"6/4日 新增",,,\n" https://www.facebook.com/aorft/posts/785375354841050",7/31[公投盟]蘇格蘭獨立公投團報名截止日,,觀察團出團時間9/12~9/22,,,,\n" http://www.stormmediagroup.com/opencms/news/detail/83f5c8b0-08f5-11e4-8645-ef2804cba5a1/?uuid=83f5c8b0-08f5-11e4-8645-ef2804cba5a1",九月海協會長陳德銘訪台,,,,,,\n" http://news.ltn.com.tw/news/life/breakingnews/1055057","北纜案 北市府將再上訴",,7月底最後上訴期限:important,,,,\n" http://www.appledaily.com.tw/appledaily/article/headline/20140713/35956066/%E9%83%AD%E5%86%A0%E8%8B%B1%E9%80%80%E4%BC%91%E9%87%91%E7%9C%81%E5%BA%9C%EF%BC%9A%E5%85%88%E4%B8%8D%E7%B5%A6",郭冠英爽領退休金，全民關注！,,,,,,\n,全台活動,"{""expand"": true}",,,,,\n" https://www.google.com/calendar/embed?src=ptt.publicissue%40gmail.com&mode=week","鄉民日報 事件列表",,,,,,\n" https://www.facebook.com/LoveShengang","7/19[台中緊急動員]守護神岡，守護浮圳 ! ",,"0800~1000:important,台中神岡區浮圳路:,坐台鐵到豐原站下車:,坐91號公車到神岡圳堵:,PS.距離現場還有一大段距離:,地點在國4神岡交流道出口處:",,,,\n" https://www.facebook.com/KaohsiungCentralParkTree/photos/a.520048634773341.1073741828.519999161444955/539327982845406/?type=1",7/19[高雄護樹公聽會]守護中央公園，自己的公園自己救！,,"0930~1130,欣欣直播預定:info,高雄市立圖書館總館 中興堂:",,,,\n" https://docs.google.com/forms/d/1foC6mP-38GflPImg6iD2-Cp1QbR5a5Bnni8eNrqbUf0/viewform",7/17~24[樂生]暑期修繕工作坊,,"7/19 1330~1700,蓬萊社:,台灣新北市新莊區中正路794號:,請務必填寫，以利統計人數及保險:important,提供代訂午餐:info,將於當日統計數量及收取費用:info",,,,\n" https://www.facebook.com/events/520301858069718/?ref=3&ref_newsfeed_story_type=regular","7/19[綠黨]王鐘銘 競選總部成立",,"1400~2100,淡水區新市一路三段55號:",,,,\n" https://docs.google.com/forms/d/1MLxWcWGETeMbkhH57pPpmCoGecqp8CwVDCyWNf_lVqY/viewform?fbzx=7578344857076229268","7/19[台北講座] 開窗說話‧我心目中的新聞人",,"1000~1200,文化大學大新館309教室:,台北市延平南路127號:,楊伊湄:important,「新聞左左右右」節目主持人:important",,,,\n" https://www.facebook.com/photo.php?fbid=657881394287234&set=a.207698029305575.52628.113799592028753&type=1","7/19[台北講座]七一遊行前後 香港的變化",,"1000~1200,台北市中正區濟南路一段2-1號:,台大校友會館:,梁文韜:important,成功大學政治系教授:important,英國牛津大學政治學博士:important",,,,\nhttp://www.tfam.museum/Event/Event_page.aspx?ddlLang=zh-tw&id=2135&allObj=%7B%22DateB%22%3A%222014-07-19%22%2C%22DateE%22%3A%222014-07-19%22%2C%22State%22%3A%22Now%22%2C%22JJMethod%22%3A%22GetEv%22%7D,7/19[台北講座]在新科技中劇烈蠕動的人際網絡及其所促發的世代行動,,"1400~1600,音地大帝:important,臺北市立美術館:,臺北市中山區中山北路三段181號:",,,,\n" https://www.facebook.com/civilmedia/photos/a.129045361879.104395.79765636879/10152534211511880/?type=1",7/19[台北講座]台灣新聞自由的危機？從資通訊安全到新聞自由,,"1400~1600,台北文創大樓6樓會議室:,臺北市信義區菸廠路88號6樓:",,,,\n" https://www.facebook.com/photo.php?fbid=750801464982380&set=a.194271440635388.51268.192290507500148&type=1&permPage=1","7/19[台北講座]左岸沙龍 公民不服從#3 公民與不服從之間的張力、政治與詩意",,"1900~2130,台灣教授協會:,中正區臨沂街25巷15號 地下室:,捷運忠孝新生2號出口後直行:,臨沂街25巷右轉:,林秀幸:important,國立交通大學人文社會學系:important,副教授兼系主任:important,梁文韜:important,國立成功大學政治系教授:important",,,,\n" https://www.facebook.com/events/246217222243410/","7/19[台北講座]司法改革 全民啟動--追求正義的第三部門",,"1930~2130,後門咖啡:,台北市大安區復興南路二段332號:,高榮志 民間司改會執行長:important,苗博雅 廢除死刑推動聯盟法務主任:important",,,,\n" https://www.facebook.com/photo.php?fbid=745711682155589&set=a.654229961303762.1073741830.638482176211874&type=1","7/19[彰化@哲五]彰化台鐵宿舍村保存運動 我們一起找回城市的歷史記憶",,"1400~1700,彰化縣彰化市中正路一段242號:,邱明憲:important,半線新生會召集人:important,玉米媽媽:important,彰化台鐵宿舍村保存運動志工:important",,,,\n" https://www.facebook.com/pages/青年佔領政治/232428416964975",7/19[苗栗]村村市集,,"1500~1900,捍衛苗栗青年聯盟:important,苗栗縣大營路99號:,竹南咖啡:",,,,\n" https://www.facebook.com/photo.php?fbid=480083758793609&set=a.326546650813988.1073741828.323779901090663&type=1&theater",7/19[高雄@哲五]教科書的轉型正義：歷史課綱細說從頭,,"1530~1800,高雄市鹽埕區大勇路64號2F:,新濱碼頭藝術空間:,捷運橘線鹽埕埔站1號出口右斜對面:,周婉窈 台大歷史系教授:important",,,,\n" https://www.facebook.com/photo.php?fbid=523191301141188&set=a.163357900457865.33932.100003509692968&type=1",7/19[高雄講座]與台獨面對面,,"1900~2200,蔡丁貴教授:important,高雄前鎮廣濟宮:,前鎮區中山二路217號:",,,,\n" http://eaphet.myweb.hinet.net/latest.html",7/19[屏東講座]棄民與隱蔽、福島的現在,,"1000~1200,屏東市華正路97號108室:,屏東縣托育資源中心:,古川Chikashi老師:important,東海大學日本語言文化學系:important,Eaphet台灣東亞歷史資料交流協會:important,昌子媽媽:important,來自福島避難的媽媽:important,",,,,\n" https://www.facebook.com/events/1444150475867173/","7/19[內湖小蜜蜂] 湖頭蜂再臨─內湖夏日uBike花火祭",,"1600~1930,東湖國小ubike點集合:,臺北市內湖區東湖路133巷49弄1號:",,,,\n" https://www.facebook.com/AppendectomyDeWhip/posts/610964449011595",7/19[板橋割闌尾]林鴻池(固定擺攤),,"1730~2030,板橋車站的站前廣場:,板橋萬坪都會公園:,靠近""文化路一段""那一側:,捷運板橋站三號出口:,往文化路一段方向走:",,,,\n,次日活動,"{""expand"": false}",,,,,\n" https://www.facebook.com/KaohsiungCentralParkTree/photos/a.520048634773341.1073741828.519999161444955/539327982845406/?type=1",7/19[高雄護樹公聽會]守護中央公園，自己的公園自己救！,,"0930開始,高雄市立圖書館總館 中興堂:",,,,\n" https://www.facebook.com/civilmedia/photos/a.129045361879.104395.79765636879/10152534211511880/?type=1",7/19[台北講座]台灣新聞自由的危機？從資通訊安全到新聞自由,,"1400~1600,台北文創大樓6樓會議室:,臺北市信義區菸廠路88號6樓:",,,,\n" https://docs.google.com/forms/d/1MLxWcWGETeMbkhH57pPpmCoGecqp8CwVDCyWNf_lVqY/viewform?fbzx=7578344857076229268","7/19[演講]台北 開窗說話‧我心目中的新聞人",,"1000~1200,文化大學大新館309教室:,台北市延平南路127號:,楊伊湄:important,「新聞左左右右」節目主持人:important",,,,\n" https://www.facebook.com/events/520301858069718/?ref=3&ref_newsfeed_story_type=regular","7/19[綠黨]王鐘銘 競選總部成立",,"1400~2100,淡水區新市一路三段55號:",,,,\n" https://www.facebook.com/photo.php?fbid=523191301141188&set=a.163357900457865.33932.100003509692968&type=1","7/19與台獨面對面 高雄場",,"1900~2200,高雄前鎮廣濟宮:,前鎮區中山二路217號:,蔡丁貴教授:important",,,,\n" https://www.facebook.com/photo.php?fbid=344242685727758&set=a.337300016422025.1073741827.337299219755438&type=1","7/20割闌尾 打狗割正順 左營區",,"0730~1200,蓮池潭高雄物產館前集合:,翠華路1435號:",,,,\n" https://www.facebook.com/photo.php?fbid=877320485628676&set=a.217502898277108.71518.100000521994427&type=1",7/20[台中講座]經濟自由化與台灣糧食主權狀況,,"1400開始,好伴共同工作空間:,台中市中區民族路35號:",,,,\n" https://www.facebook.com/photo.php?fbid=335714333246146&set=a.102591343225114.6915.100004227453348&type=1",7/20[台南講座]光榮史明革命ing,,"1500~1900,史明:important,黃敏紅:important,張慶恩:important,低消飲料一杯:,台南市中西區民生路一段205巷11號2樓:,台獨國際新聞直播預定:info",,,,\n" https://www.facebook.com/CafeDelam/photos/a.377311555656726.91535.377298322324716/679613385426540/?type=1&theater",7/20青年為何佔領政治？,,"1900~2100,冼義哲 青年佔領政治 共同發起人 :important,Cafe De lam 竹南咖啡:,苗栗縣竹南鎮大厝里大營路99號:",,,,\n" https://www.facebook.com/photo.php?fbid=523198457807139&set=a.163357900457865.33932.100003509692968&type=1&relevant_count=1","7/20與台獨面對面 屏東場",,"1900~2200,蔡丁貴教授:important,屏東 海豐三山國王廟:,屏東市三山里海豐街28號:",,,,\n" http://www.happyradio.com.tw/stream/stream_taipei.php","週一 黑鬥不服從",,"\'1700~1800,廣播[快樂連播網]:info",,,,\n" https://www.facebook.com/photo.php?fbid=680051168732394&set=gm.1524074631159013&type=1",7/22[台北講座]政府沒說的自由貿易,,"1900開始,台北市中正區紹興北街3號:,幕哲咖啡B1:,邱俊榮:important,中央大學經濟系教授:important,賴忠強 律師:important,",,,,\n" https://www.facebook.com/events/1499824633565724/","7/24[樂團]P!SCO-4-Asia Series",,"台北公館 THE WALL MUSIC:",,,,\n" https://www.facebook.com/photo.php?fbid=614818251959548&set=a.607932865981420.1073741829.602996456475061&type=1&theater","7/24[割闌尾]板橋 林鴻池(每週四固定擺攤)",,"1900~2100,新埔郵局:,捷運新埔站旁，近一號出口:,新北市板橋區文化路1段395號:",,,,\n" https://www.facebook.com/events/675745935847488/?ref=3&ref_newsfeed_story_type=regular",7/26[台中]青年議會招募中!,,"0900開始,中區再生基地 DRF Goodot Village:,台中市中區中山路69號:",,,,\n" https://www.facebook.com/photo.php?fbid=306625269515850&set=a.263018680543176.1073741829.262680967243614&type=1",7/26[台北培訓]社運紀實口述歷史2/3,,"1400~1800,國立臺灣師範大學勤308教室:,文學院會議室:",,,,\n" https://www.facebook.com/TAVUR.tw/posts/717572864975880",7/26想知道新莊老街發生什麼事？,,"0850~1200,新莊捷運站2號出口集合:,導覽活動:info",,,,\n" https://www.facebook.com/photo.php?fbid=707321822662400&set=a.152858528108735.31770.148513668543221&type=1",7/26[台北論壇]環境、自由化與民主,,"1830~2130,台灣大學校友會館:,台北市濟南路一段2之1號:",,,,\n" https://www.facebook.com/photo.php?fbid=255795667949429&set=a.235311836664479.1073741829.234638826731780&type=1&permPage=1","7/26[電影]台南 貢寮你好嗎 ？",,"1850~2130,政大書城後方停車場:,導演崔愫欣 映後座談:important,樂團 少年白 Grey Youth:important",,,,\n" https://www.facebook.com/photo.php?fbid=345328555619171&set=a.337300016422025.1073741827.337299219755438&type=1","7/27[高雄割闌尾]志工大會PART 2！",,"1300~1500,月讀次文化劇場ARIA55:,高雄三民區建國二路255號B1:",,,,\n" https://www.facebook.com/events/1520705714816170/?ref=4",8/2[台北講座]從統獨談民主憲政基本概念,,"1400~1600,荒漠甘泉:,羅斯福路三段316巷18號:,姚立明:important",,,,\n" https://www.facebook.com/events/735071376532010/?ref=3&ref_newsfeed_story_type=regular","8/23~8/25[美國華盛頓]2014 FAPA YPG National Advocacy Conference",,,,,,\n,已結束活動列表,"{""expand"":false} ",,,,,\n" https://www.facebook.com/photo.php?fbid=335649796585933&set=a.102591343225114.6915.100004227453348&type=1&relevant_count=1","7/17[台中講座]台獨成功ING的11堂課 第一堂 台獨現況，法理台獨，真台獨，假台獨？",,,,,,\n" https://plus.google.com/events/c79e74aha27oc894uhqrtaaoc4o",0706袁紅冰教授台南板聚,"{""target"":""_blank""}",,,,,\n" https://www.facebook.com/photo.php?fbid=1452992851623387&set=gm.646561768753566&type=1","0706雙湖音樂祭 補正公投法 割掉祭止兀",,,,,,\n" https://www.facebook.com/photo.php?fbid=331106903706889&set=a.102591343225114.6915.100004227453348&type=1","0706光榮高雄 台獨ing",,,,,,\n" https://www.facebook.com/events/656220247793483/?ref=22","0705壓不扁的玫瑰 寫下台灣反抗史的家族",,,,,,\n" https://www.facebook.com/events/319093591589182/?source=1",0704全民關注立法院搞什麼鬼,,,,,,\n" https://www.facebook.com/milkfishtainan/photos/a.673284986077545.1073741827.673275422745168/714602495279127/?type=1","0704魚腸花街頭文藝復興運動 台南青年志士大對談會",,,,,,\n" https://www.facebook.com/photo.php?fbid=803357396371797&set=a.168257056548504.32682.142163125824564&type=1","0704哲五 割割罷罷真偉大 割闌尾進行式",,,,,,\n" https://www.facebook.com/photo.php?fbid=314406452050908&set=a.276078935883660.1073741828.240170506141170&type=1",0629台灣，你資安有洞嗎？(沃草),,,,,,\n" http://www.ndc.gov.tw/m1.aspx?sNo=0060472","0629「行政院」經貿國是會議 南區分區會議",,,,,,\n" https://www.facebook.com/ey.gov.tw/photos/a.449506128410605.115211.135213893173165/837984339562780/","0628~29「行政院」經貿國是會議 南區分區會議",,,,,,\n" https://www.facebook.com/photo.php?fbid=638988389524693&set=a.589277274495805.1073741829.100002406139125&type=1&ref=nf","0625~0628 國台辦 張志軍主任 訪台事件",,,,,,\n" https://www.facebook.com/photo.php?fbid=812637358746613&set=a.126145224062500.21698.100000010685369&type=1&theater","0628台灣獨立建國大旗隊 集合",,,,,,\n" http://www.peoplenews.tw/news/f1411b3b-4f37-42cf-878e-306d534eaf1b","0628  張志軍 最後一天行程 註:天后宮取消",,,,,,\n" https://www.facebook.com/events/1487022118201923/?ref=3&ref_newsfeed_story_type=regular","0628 2014鹿港噴水節",,,,,,\n" https://www.facebook.com/photo.php?fbid=431887586954168&set=a.368489606627300.1073741828.367922930017301&type=1",0628最後一戰，重返機場,,,,,,\n" https://www.facebook.com/aorft/posts/773990205979565","0626緊急！立院回娘家 國民黨 甲級動員 自由經濟示範區特別條例草案"," ",,,,,\n" https://www.facebook.com/events/334046850081575/",0626【干你屁事】迎接張志軍！遍地開花！,,,,,,\n" https://www.facebook.com/groups/twobservers/permalink/860870063941775/","0625「自己的民主，自己守，自己的選票，自己顧」聯合記者會 已結束",,,,,,\n" https://www.facebook.com/events/275916992593654/",0625【紅牌行動】人民舉紅牌，拒絕王張會！,,,,,,\n" https://www.facebook.com/photo.php?fbid=773450982700154&set=a.266374543407803.68474.265413413503916&type=1","0625照三餐K 絕對不讓中國張志軍這麼好吃睏",,,,,,\n" http://berryvoice.org/b/berry-watch/item/132-ftz-finance","0625[自經區金融篇] 金管會聲東擊西 粉飾太平 台灣門戶全開!",,,,,,\n" http://ncc.nctu.pro/","服貿討論 (交大)",,,,nctu,au,\n,文字轉播專區,"{""expand"":false} ","重要:important ",,,,\n" https://ethercalc.org/static/proxy/hackpad/","文字轉播 (主要) ",,每分鐘更新:warning,,,,\n" http://congress-text-live.herokuapp.com/","文字轉播 (同上)",,"即時更新:warning ",,,,\n" https://ethercalc.org/static/proxy/live.txt","文字轉播 (內場)",,,,,,\n" https://ethercalc.org/static/proxy/english/","English Transcript",,,,,,\n" https://docs.google.com/document/d/1Esi-GjLXFwF0CDsykyddGaWBTnM22zeVY4ciZ0gyf9M/pub","320 街頭民主教室逐字稿紀錄",,,,,,\n" https://ethercalc.org/static/proxy/hackpad/3-24.html","3-24 中午備份",,,,,,\n" https://ethercalc.org/static/proxy/english/3-24.html","3-24 Noon Archive",,,,,,\n" https://docs.google.com/document/d/1uTmn5-nUKW-MEpR5ygBfG10HEJ-Zul4TrtntKAOPxbQ/edit?disco=AAAAAH_Tjng ","文字轉播 GoogleDoc",,,,,,\nhttps://ethercalc.org/static/proxy/hackpad/8a13Bv9DNla,"4-22 零時文播",,,,,au,\n,"人力物資需求 ","{""expand"":false} ",,,,,\n" https://g0v.hackpad.com/-Live--HpwTUS2OShF ","遠端文字轉播排班表 ",,,,,,\n" https://docs.google.com/spreadsheets/d/1zxF2MhhCedsKE23lW4sDHb7Uo2HrkEp3VusdWQruRzQ/pubhtml","守護民主之夜 現場需求",,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AkNsS2a-Qx8ZdGpmekpMQjJBNWZsbjh6cUxORVR4QUE&usp=sharing ","青島東路線路組物資需求 ",,停止:error,,,,\n,抗議行動相關資訊,"{""expand"":""false""} ",,,,,\n" https://g0v.hackpad.com/2dCf0sLS70c",聯合指揮中心窗口,,,,,,\n" https://docs.google.com/document/d/1t0Xxy3mI4Ct2QBp6kqoi1NDtgQVe1EMlBlFEu7e6qZQ/pub ","抗議者自保須知 ",,,,,,\n" https://mapsengine.google.com/map/u/1/embed?mid=zlxW8eSZKLlk.k1Nzj2E6NfgY",周邊地圖,,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dFZfdjd2alRLaW83WHpuX0JnUmJPZmc","台北以外活動 ",,,,,,\n,"媒體區  - Media","{""expand"":false} ",,,,,\n" https://g0v.hackpad.com/318--vCNzeS4wnbh","318 學運罷課聲明",,,,,,\n" https://g0v.hackpad.com/ep/pad/static/HeVtO3WBpXk","English Communiqué",,,,,,\n" https://docs.google.com/document/d/1oVxDBCcp4b-IJmIL4-duQo1Y4SBzAUBtwcrUfTdLj18/edit?usp=sharing ","各團體行動聲明 ",,,,,,\n" https://g0v.hackpad.com/318--H6s4KlBRSC3","各團體行動聲明 (備份) ",,,,,,\n" https://g0v.hackpad.com/-FAQ-gGlUisv5cMG","佔領立法院行動 FAQ ",,,,,,\n" https://g0v.hackpad.com/A4-7E4ts6CMRsq","佔領立法院 A4 傳單 ",,,,,,\n" https://g0v.hackpad.com/X0fp4Z6AhiL","街頭採訪要點 ",,,,,,\n" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dHhIeVdaTHNnMjhIT1VWRm5VSjNQd1E",外電消息整理,,,,,,\n" https://docs.google.com/document/d/1NoiYQyZOhGcN2cRA9DRZ85_sFh7AUe-lpaxPmNcO1Ps/edit?usp=sharing ","照片來源 ",,,,,,\n" https://g0v.hackpad.com/--PEn9NyJRh2X","創作收集 ",,,,,,\n" http://occupation.today/","照片與訊息 Tumblr ",,,,,,\n" http://review.fumao.today/",自己的服貿自己審,"{""target"": ""_blank""} ",新視窗:info,,,,\n" https://www.facebook.com/NtuNewsEForum",台大新聞E論壇,"{""target"": ""_blank""} ",新視窗:info,,,,\n,連結彙集平台,"{""expand"":false} ",,,,,\n" http://time-fumao.rhcloud.com/",太陽花怪獸,,,,,,\n" http://news.anon.tw",台灣大補帖＃fumao.tw,,,,,,',angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(t,e,n,o,a){return t.$watch("$state.current.name",function(e){return"irc"===e?t.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return a(function(){return window.scrollTo(0,1)},0)}),a(function(){return o.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$sce","$window","$state","$cookies","HackFolder"].concat(function(t,e,n,o,a,r){var c,p;return import$(t,{hasViewMode:function(t){return null!=t?t.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:r.iframes,docs:r.docs,tree:r.tree,godoc:function(e){var n;return"_blank"===(null!=(n=e.opts)?n.target:void 0)?(window.open(e.url,e.id),!0):e.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(e.url,e.id),!0):t.go("/"+t.hackId+"/"+decodeURIComponent(e.id))},open:function(t){return window.open(t.url,t.id),!1},activate:function(t){var e;return e=r.activate(t),"hackfoldr"===(null!=e?e.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(e,n,o){return t.saveModalOpen=e,o&&(t.saveBtn=$(o.target)),n&&(a.savebtn="consumed",t.saveBtn)?t.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==a.savebtn},HackFolder:r,barframeSrc:function(t){var n;return n=t.opts.bar.replace(/\{(\w+)\}/g,function(){return t[arguments[1]]}),e.trustAsResourceUrl(n)},iframeCallback:function(e){return function(n){return t.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,e),o.current.title=e.title+" – g0v.today",e.noiframe="fail"===n?!0:!1,"unsure"===n?e.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return r.getIndex(t,!0,function(){})}}),t.$watch("hackId",function(e){return r.getIndex(e,!1,function(){var n,a;return t.$watch("docId",function(n){var o;return n&&(o=r.activate(n)),"hackfoldr"===(null!=o?o.type:void 0)?(t.showIndex=!0,r.loadRemoteCsv(o.id,function(o,a,c){var p,s,i;return p=function(){var t,e,o,a=[];for(t=0,o=(e=r.tree).length;o>t;++t)p=e[t],p.id===n&&a.push(p);return a}()[0],p.tagFilter=null!=(s=p.tags)&&null!=(i=s[0])?i.content:void 0,p.chidlren||(null==p.children&&(p.children=null!=c?c[0].children:void 0),(s=r.docs).splice.apply(s,[a.length,0].concat(slice$.call(a)))),t.indexDocs=a,t.indexSearch=e.replace(/^g0v-/,"")})):t.showIndex=!1}),t.showIndex="hack.index"===o.current.name,t.showIndex?void 0:!t.docId&&(n=null!=(a=r.docs[0])?a.id:void 0)?o.transitionTo("hack.doc",{docId:n,hackId:t.hackId}):void 0})}),t.collapsed=null!=(c=a.collapsed)?c:n.innerWidth<768,t.$watch("collapsed",function(t){return null!=t?a.collapsed=t:void 0}),t.hackId=(p=o.params.hackId)?p:"congressoccupied",t.$watch("$state.params.docId",function(e){return e?t.docId=encodeURIComponent(encodeURIComponent(e)):void 0}),t.sidebar=!1,t.toggleSidebar=function(){return t.collapsed=!1,t.sidebar=!t.sidebar}})}).directive("resize",["$window"].concat(function(t){return function(e,n){var o;return o=function(){return e.width=t.innerWidth,e.height=t.innerHeight,e.contentHeight=t.innerHeight-$(n).offset().top},angular.element(t).bind("resize",function(){return e.$apply(o)}),o()}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,o){var a,r,c;return a=t(o.ngxIframe)(e),r=function(t,e){var n;return n=!function(){try{return"about:blank"==t.location}catch(e){}}(),a(e&&$.browser.mozilla?"unsure":n?"ok":"fail")},$(n).load(function(){return clearTimeout(c),r(this.contentWindow,!0)}),c=setTimeout(function(){return r(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,o){var a,r;return a=t(o.ngxClickMeta),r=navigator.appVersion.match(/Win/)?function(t){return t.ctrlKey}:function(t){return t.metaKey},$(n).click(function(t){return r(t)&&!a(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(t){return function(e){var n;return n=function(){var n;return n=$(".index"),e.hasScrollbar=n.get(0).scrollHeight>t.innerHeight-$(".navbar").height()},angular.element(t).bind("resize",function(){return e.$apply(n)}),e.$watch("docs",n),n()}})).factory({HackFolder:["$http","$sce"].concat(function(t,e){var n,o,a,r,c;return n={},o=[],a=[],c={iframes:n,docs:o,tree:a,activate:function(t,r){function c(t){return t.id}var p,s,i,w,u,h,m,l,d,b,v;for(null==r&&(r=!1),s=function(){var e,n,a,r=[];
for(e=0,a=(n=o).length;a>e;++e)p=n[e],p.id===t&&r.push(p);return r}()[0],i=null!=s?s.type:void 0,w=0,h=(u=a).length;h>w;++w)m=u[w],(l=null!=m&&null!=(d=m.children)?d.map(c):void 0)&&in$(t,l)&&(m.expand=!0);return b=r?"edit":"view",v=function(){var e;switch(e=[i],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+b+"?pli=1&overridemobile=true";case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+b;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+b;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://"+(null!=(e=s.site)?e:"")+"hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"video"!==e[0]:if("youtube"===s.provider)return"https://www.youtube.com/embed/"+t;if("ustream"===s.provider)return"http://www.ustream.tv/embed/"+t+"?v=3";break;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),null!=s&&s.hashtag&&(v+=null!=s?s.hashtag:void 0),v&&(v=e.trustAsResourceUrl(v)),"hackfoldr"===(null!=s?s.type:void 0)?s:((l=n[t])?(l.src=v,l.mode=b):n[t]={src:v,doc:s,mode:b},s)},getIndex:function(t,e,n){var a,c,p=this;return r!==t||e?(a=0,(c=function(){var e;return e=CONST_CSV,setTimeout(function(){return r=t,o.length=0,p.processCsv(e,n)},1)})()):n(o)},processCsv:function(t,e){return this.loadCsv(t,o,a,function(t,n){return c.folderTitle=t,e(n)})},loadRemoteCsv:function(t,e){var n,o=this;return n=CONST_CSV,setTimeout(function(){var t,a;return t=[],a=[],o.loadCsv(n,t,a,function(n){return e(n,t,a)})},1)},loadCsv:function(t,e,n,o){function a(){try{return JSON.parse(f.replace(/""/g,'"'))}catch(t){}}function r(){var t;switch(t=[b],!1){case void 0!==t[0]:return s||(v&&(s=v,v=null),f&&(i=f)),{title:v,type:"dummy",id:"dummy"};case!(A=/^\/\/(.*?)(?:\#(.*))?$/.exec(t[0])):return{type:"hackfoldr",id:A[1],tag:A[2]};case!(A=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:A[1]};case!(A=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",site:A[1],id:A[2]};case!(A=/https?:\/\/(?:youtu\.be\/|(?:www\.)?youtube\.com\/(?:embed\/|watch\?v=))([-\w]+)/.exec(t[0])):return{type:"video",provider:"youtube",id:A[1],icon:"http://g.etfv.co/"+b};case!(A=/https?:\/\/(?:www\.)?ustream\.tv\/(?:embed|channel)\/([-\w]+)/.exec(t[0])):return{type:"video",provider:"ustream",id:A[1],icon:"http://g.etfv.co/"+b};case!(A=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(b)),icon:"http://g.etfv.co/"+A[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",b):void 0}}function c(t){return t.length}function p(t){var e,n,o,a,r;return e=t.match(/^(.*?)(?::(.*))?$/),n=e[0],o=e[1],a=e[2],r=slice$.call(e,3),{content:o,"class":null!=a?a:"warning"}}var s,i,w,u,h,m,l,d,b,v,f,g,y,k,C,x,I,E,_,A,L,F,S,B,W,D;for(t=replace$.call(t,/^\"?#.*\n/gm,""),i={},u=[],h=0,l=(m=CSV.parse(t)).length;l>h;++h)d=m[h],b=d[0],v=d[1],f=d[2],g=d[3],y=d[4],k=slice$.call(d,5),v&&(v=replace$.call(v,/^"|"$/g,""),f&&(f=replace$.call(f,/^"|"$/g,"")),f&&(f=a()),null==f&&(f={}),g&&(g=replace$.call(g,/^"|"$/g,"")),C=b.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),x=C[0],I=C[1],b=C[2],E=C[3],_=import$({summary:y,hashtag:E,url:b,title:v,indent:I.length,opts:import$(import$({},i),f)},r()),u.push("dummy"!==_.type||null!=(C=_.title)&&C.length?import$(import$({icon:"/img/"+_.type+".png"},_),{tags:(null!=(C=null!=(L=_.opts)?L.tags:void 0)?C:[]).concat((null!=(C=null!=g?g.split(","):void 0)?C:[]).filter(c).map(p))}):null));for(w=u,w.filter(function(t){return null!=t?t.url:void 0}).map(function(t){var e,n,o;return"video"===t.type&&"youtube"===t.provider?(e=gapi.client.youtube.videos.list({id:t.id,part:"snippet"}),e.execute(function(e){var n;return"live"===(null!=(n=e.items)?n[0].snippet.liveBroadcastContent:void 0)?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(n=t.url.match(/ustream.tv\/embed\/([^?]+)/))?(o=n[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+o+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(e){var n,o;return"live"===JSON.parse(null!=(n=e.query)&&null!=(o=n.results)&&null!=(n=o.body)?n.p:void 0).results?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),e.splice.apply(e,[0,e.length].concat(slice$.call(w.filter(function(t){return null!=t})))),F=0,u=[],h=0,l=e.length;l>h;++h)B=h,_=e[h],B>0&&_.indent?(W=e[F],D=null!=(m=W.children)?m:W.children=[],D.push(_),u.push(null)):(F=B,u.push(_));return S=u,S=S.filter(function(t){return null!=t}),S=S.map(function(t){var e,n;return t.children&&(t.expand=null!=(e=null!=(n=t.opts)?n.expand:void 0)?e:t.children.length<5),t}),n.splice.apply(n,[0,n.length].concat(slice$.call(S))),o(s,e)}}})});