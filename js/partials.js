angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/about.html', [
'<div class="about"><h1>Welcome to Hackfoldr</h1><p>Hackfoldr 是你的黑客公事包，用一個網址就可以和夥伴們分享所有的專案文件！ :D</p><h2>為你的專案製作 hackfoldr</h2><h3>建立 hackfoldr</h3><ol><li>想好專案英文網址名稱（例如：g0v.tw-hackfoldr）</li><li>在瀏覽器網址列輸入「hack.g0v.tw/(你的專案的英文網址名稱)」</li></ol><p>恭喜！你已經建立自己的 hackfoldr 了！</p><h3>自訂 hackfoldr</h3><ol><li>點左上 home 圖案旁文字連結，會自動在新分頁打開 ethercalc</li><li>在 B2 格子中輸入本 hackfoldr 名稱（通常是中文）</li><li>接著從第3行開始，可以增加你想收集的網址</li><li>輸入格式為：在 B3 中輸入第一份文件名稱，A3 格子中輸入第一份文件網址</li><li>以此類推，把所有文件的顯示名稱和網址都輸入進去</li><li>切回「hack.g0v.tw/(你的專案的英文網址名稱)」這個瀏覽器分頁</li><li>按 home 圖示旁的 ↺ 按鈕，或者 F5 / Ctrl + R 重新整理頁面</li></ol><p>恭喜！你已經打造出屬於自己的 hackfoldr 了！</p><h3>hackfoldr 進階用法</h3><ol><li>第3欄的格子為參數設定，常用的有：\'{"expand":true} 為資料夾預設展開、false為關；\'{"target":"_blank"} 為此連結開啟新視窗</li><li>第4欄的格子為註解，主要有三種型別：warning、important、issue，打法為 \'註解:型別</li><li>第1欄的格子網址多空一格會成為子目錄，例：A3為\'www.example.com，A4為\' www.google.com，則A3變為資料夾，A4為A3子目錄</li></ol><p>註：使用 ethercalc 不需登入，編輯後即自動存檔。如果想修改 ethercalc 試算表的名稱，直接開新的 etherclac.org 網址後，將舊試算表的內容剪貼過來即可。</p><h3>hackfoldr</h3><p>hackfoldr 是 clkao 為了 g0v 黑客松活動而開發的開源專案，原始碼也在<a href="https://github.com/hackfoldr/hackfoldr">github</a></p></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/authz.html', [
'<div class="h1">authz request</div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/hackindex.html', [
'<div class="hackindex"><div class="search-label">Search:</div><input ng-model="indexSearch" placeholder="搜尋關鍵字.."/><article ng-repeat="doc in (indexDocs || docs) | filter:indexSearch" class="index-item"><h2 class="title">{{doc.title || doc.id}}</h2><p class="summary">{{ doc.summary }}</p></article></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/hackitem.html', [
'<span ng-if="doc.type == \'dummy\'" ng-click="doc.expand=!doc.expand" tooltip="{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}" tooltip-placement="right" tooltip-trigger="hover" title="{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}" tooltip-append-to-body="true" tooltip-animation="false" class="link"><img src="/img/folder.png"/><span class="expanded-content">{{doc.title || doc.id}}</span></span><a ng-click="godoc(doc)" ngx-click-meta="open(doc)" ngx-final="ngx-final" ng-if="doc.type != \'dummy\'" tooltip="{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}" tooltip-placement="right" tooltip-trigger="hover" title="{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}" tooltip-append-to-body="true" tooltip-animation="false" class="link"><img ng-src="{{doc.icon}}"/><span class="expanded-content">{{doc.title || doc.id}}</span><span ng-show="doc.tagFilter" class="expanded-content">[{{doc.tagFilter}}]</span><span ng-repeat="tag in doc.tags" class="label label-{{tag.class}}">{{tag.content}}</span></a><span ng-if="doc.children" ng-class="{collapsed: !doc.expand}" ng-click="doc.expand=!doc.expand" title="{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}" class="collapser">{{ {"true": "&#x25B8;", "false": "&#x25BE;"}[!doc.expand] }}</span>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/hack.html', [
'<div resize="resize" ng-cloak="ng-cloak" class="hackfolder"><div ng-class="{collapsed: collapsed, scrollbar: hasScrollbar}" ng-click="collapsed=!collapsed" ng-style="{height: contentHeight}" scrollbar="scrollbar" class="index"><div class="hackid"><i class="icon-home"></i>&nbsp;<a ng-href="http://g0v.today/" target="_top" ngx-final="ngx-final" class="indexlink expanded-content">{{HackFolder.folderTitle || hackId}}</a><small ng-class="{&quot;icon-caret-right&quot;: collapsed, &quot;icon-caret-left&quot;: !collapsed}" class="icon"></small></div><ul ui-sortable="sortableOptions" ng-model="tree" class="wrap"><li ng-repeat="doc in tree" ng-title="{{doc.title || doc.id}}" ngx-noclick="ngx-noclick" ng-class="{active: doc.id == docId}"><div ng-include="\'/partials/hackitem.html\'" class="entry"></div><ul ng-show="doc.children &amp;&amp; doc.expand" ui-sortable="sortableOptions" ng-model="doc.children" ng-animate="\'fade\'"><li ng-repeat="doc in doc.children | filter:doc.tagFilter:tags" ng-title="{{doc.title || doc.id}}" ngx-noclick="ngx-noclick" ng-class="{active: doc.id == docId}"><div ng-include="\'/partials/hackitem.html\'" class="entry"></div></li></ul></li></ul></div><div ng-style="{height: contentHeight}" class="pad-container"><article ng-show="showIndex" ng-include="\'/partials/hackindex.html\'" class="pad"></article><article ng-repeat="(key, iframe) in iframes" ng-show="docId == key" class="pad"><span ng-show="hasViewMode(iframe.doc.type) &amp;&amp; iframe.mode != \'edit\'" ng-click="activate(iframe.doc.id, true)" class="docmode">edit</span><span ng-show="(iframe.doc.type==\'hackpad\') &amp;&amp; showSaveBtn()" ng-click="showSaveModal(true,false,$event)" class="docmode">save / 存檔</span><div modal="saveModalOpen" close="showSaveModal(false)" options="saveModalOpts"><div class="modal-header"><h3 id="saveModalLabel">歡迎來到二十一世紀</h3></div><div class="modal-body"><p>在這個時代，存檔是不需要的。</p><p>你所要做的就是把你想要寫的東西寫上去，別人就能看到了。若有同時在編輯同份文件的人，他甚至會看到你打的字一個接一個的出現。</p><p>如果不能理解的話，你可以把他當成是自動存檔，只是你的任何編輯都會隨時被自動存檔到網站上。</p><p>總而言之，歡迎來到二十一世紀。</p></div><div class="modal-footer"><button ng-click="showSaveModal(false,true)" class="btn-primary">我瞭解了</button>|<button ng-click="showSaveModal(false)" class="btn">我不管，我就是要存檔</button></div></div><div ng-if="iframe.doc.iframeunsure" class="noiframe unsure">Click the link below to open the link in a new window:<br/><span class="link"><img ng-src="{{iframe.doc.icon}}" title="{{iframe.doc.title || iframe.doc.id}}"/><a ng-href="{{iframe.src}}" target="{{iframe.doc.id}}">{{iframe.src}}</a></span><div ng-click="iframe.doc.iframeunsure = false" class="icon icon-close">&#x274c;</div></div><div ng-if="iframe.doc.noiframe" class="noiframe">It looks like this site blocks embedding.  Click the link below to open it in a new window:<br/><span class="link"><img ng-src="{{iframe.doc.icon}}" title="{{iframe.doc.title || iframe.doc.id}}"/><a ng-href="{{iframe.src}}" target="{{iframe.doc.id}}">{{iframe.src}}</a></span></div><iframe ng-show="!iframe.doc.noiframe" ng-src="{{iframe.src}}" ngx-iframe="iframeCallback(iframe.doc)" class="embed"></iframe></article></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/irc.html', [
'<iframe ng-if="ircEnabled" ng-show="$state.current.name == \'irc\'" ng-src="https://kiwiirc.com/client/irc.freenode.net/#g0v.tw"></iframe><iframe ng-if="irclogEnabled" ng-show="$state.current.name == \'irc.log\'" ng-src="http://logbot.g0v.tw/channel/g0v.tw/today"></iframe>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/people.html', [
'<div ng-cloak="ng-cloak" class="row-fluid people people-layout"><div id="left-block" class="span4"><div ng-show="user" class="self"><h2 class="displayName">{{user.displayName}}</h2><!--.name {{user.username}}--><img ng-src="{{ user.avatar }}?size=large" width="210" class="img-polaroid m-top-1"/><form class="m-top-1"><fieldset><label>關鍵字</label><span ng-repeat="tag in user.tags" ng-click="gotag(tag)" ng-mouseenter="toremove=1" ng-mouseleave="toremove=0" class="label tag">{{tag}}<a ng-show="toremove" ng-click="remove_tag(user, tag)"><i class="icon-remove"></i></a></span><div class="input-append m-top-p1"><input ng-model="newtag" class="tag"/><button type="submit" ng-click="add_tag(user)" class="btn">新增關鍵字</button></div><label>自我介紹</label><textarea id="bio-input" ng-model="user.bio"></textarea></fieldset></form><h4>連結帳號</h4><ul class="services unstyled"><li ng-repeat="provider in [\'facebook\', \'twitter\', \'github\']" class="m-bottom-1"><a ng-href="http://{{provider}}.com/{{user.auth[provider].username}}" ng-show="user.auth[provider]" class="btn btn-block btn-primary disabled"><i class="icon-{{provider}}"></i>&nbsp; {{user.auth[provider].username}}</a><a ng-click="loginAndLink(provider)" ng-show="!user.auth[provider]" class="btn btn-block"><i class="icon-{{provider}}"></i>&nbsp; {{provider}}</a></li></ul></div><div ng-show="toSetUsername" class="set-username m-top-1"><h4>設定 G0V 使用者名稱</h4><form class="m-top-1"><fieldset><div class="input-append"><input id="set-username-input" ng-model="newUsername"/><button type="submit" ng-click="setUsername(newUsername)" class="btn">設定</button></div></fieldset></form><div ng-show="usernameInUse" class="alert alert-error">已有 G0V 成員使用此名稱，請選擇其他使用者名稱<ul><li ng-repeat="(provider, auth) in usernameInUse.auth"><a ng-click="loginAndMerge(provider)" class="btn"><i class="icon-{{provider}}"></i>&nbsp; {{provider}}:{{auth.username}}</a></li></ul></div></div><div id="login-block" ng-show="!user &amp;&amp; !toSetUsername" class="p-all-p1"><h3>登入 G0V</h3><div class="well"><button type="button" ng-click="auth.login(\'facebook\', { rememberMe: true, scope: \'email, user_likes\' })" class="btn btn-block"><i class="icon-facebook icon-large"></i>&nbsp; 使用 facebook 登入</button><button type="button" ng-click="auth.login(\'github\', { rememberMe: true })" class="btn btn-block"><i class="icon-github icon-large"></i>&nbsp; 使用 github 登入</button><button type="button" ng-click="auth.login(\'persona\', { rememberMe: true })" class="btn btn-block"><i class="icon-envelope icon-large"></i>&nbsp; 使用 Email 登入</button></div></div><div id="logout-block" ng-show="user || toSetUsername" class="p-all-p1"><p><button id="logout-link" ng-click="auth.logout()" class="btn btn-block">登出 G0V</button></p></div></div><div id="right-block" class="span8 p-all-p1"><form class="form-search"><div class="m-top-1"></div><input ng-model="search" placeholder="搜尋關鍵字或人名…" class="search-query"/></form><div class="tag-cate-list"><div ng-repeat="cate in tagCategorizations" class="tag-ctae-list__cate"><div class="tag-cate-list__cate__label"><a ng-class="[\'btn\', cate.class]">{{ cate.name }}</a></div><div class="tag-cate-list__cate__tags row"><span ng-repeat="tag in cate.tags" class="label"><span ng-click="$parent.$parent.search = tag" ng-mouseenter="toadd=1" ng-mouseleave="toadd=0" class="tag"><i ng-class="{transparent: !toadd}" ng-click="add_tag(user, tag)" ngx-final="ngx-final" class="icon-plus"></i>{{tag}}<span class="badge badge-info font-se">{{ tagcloudMap[tag] }}</span></span></span></div></div><div><a ng-click="displayTagList = !displayTagList" class="tag-cate-list__toggle-cate-list btn btn-danger">顯示所有標籤</a></div></div><div ng-show="displayTagList" class="taglist row"><span ng-repeat="entry in tagcloud" class="label"><span ng-click="$parent.search = entry.tag" ng-mouseenter="toadd=1" ng-mouseleave="toadd=0" class="tag"><i ng-class="{transparent: !toadd}" ng-click="add_tag(user, entry.tag)" ngx-final="ngx-final" class="icon-plus"></i>{{entry.tag}}<span class="badge badge-info font-se">{{entry.count}}</span></span></span><span style="-webkit-flex:100 1 auto">&nbsp;</span></div><div class="people-list"><div ng-class="{\'show-detail\': showPerson == person}" ng-repeat="person in filteredpeople | filter:search" ng-click="togglePerson(person)" class="person"><div ng-mouseenter="tofollow=1" ng-mouseleave="tofollow=0" class="avatar"><img ng-src="{{person.avatar}}?size=medium" class="img-polaroid"/><i ng-show="followlist[person.$id]" ng-click="unfollow_person(person.$id)" ngx-final="ngx-final" class="icon-star-empty"></i><i ng-show="followlist[person.$id] || tofollow" ng-click="follow_person(person.$id)" ngx-final="ngx-final" class="icon-star"></i></div><div style="font-size:13px;" class="person-name">{{person.$id}}</div><div ng-show="person == showPerson" class="person-detail"><div class="person-tag"><span ng-repeat="tag in person.tags" ng-class="{ \'label-success\': tag == \'hackath3n\' }" ng-click="gotag(tag)" class="label tag">{{tag}}</span></div><div ng-class="{\'person-bio-empty\': !person.bio}" class="person-bio">{{person.bio || "( 尚未填好自我介紹 )"}}</div><div class="person-contact"><span class="label label-info">聯絡資訊</span><a ng-repeat="provider in [\'facebook\', \'twitter\', \'github\']" ng-show="person.auth[provider]" ng-href="http://{{provider}}.com/{{person.auth[provider].username || person.auth[provider].id}}" target="_blank" class="btn"><i class="contact-icon icon-large icon-{{provider}}"></i>{{person.auth[provider].username || provider.charAt(0).toUpperCase() + provider.slice(1)}}</a></div></div></div></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/nav.html', [
'<ul class="nav"><li><a ng-href="/">首頁</a></li><li><a target="_blank" href="http://g0v.github.io/g0vis/">專案列表<span class="label label-important">new</span></a></li><li><a target="_blank" href="http://g0v.github.io/leve1up/">新手上路</a></li></ul><ul class="nav pull-right"><li ng-class="{ active: $state.includes(\'about\') }"><a ng-href="https://www.newschallenge.org/challenge/2014/submissions/hackfoldr-community-collaboration-organized">About</a></li></ul>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/project.edit.html', [
'<div ng-if="!opts.isnew"><h3>editing</h3><a ng-click="opts.editMode=0" class="btn">Done</a></div><div><h3 ng-if="opts.isnew">新增專案</h3><form class="m-top-1"><div ng-if="opts.warning" ng-bind="opts.warning" class="alert alert-error"></div><fieldset ng-if="opts.isnew"><label>Github Project</label><input ng-model="project[\'github\']" pattern="^https://github.com/.*[a-zA-Zd]/.*[a-zA-Zd]" class="github-url"/><span class="help-block">輸入 github project url ex, https://github.com/g0v/new_project</span></fieldset><fieldset ng-show="opts.isnew"><input type="submit" value="新增" ng-click="saveNew(project)"/></fieldset></form></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/project.html', [
'<div class="container"><div class="row projects-title"><div class="span7"><h1>開發中專案</h1><input type="text" placeholder="搜尋專案（名稱、網址、需求…）" ng-model="search" class="search-query"/></div><div class="span5 create-project"></div></div><div class="row"><div class="span8"><article ng-if="opts.isnew" ng-include="\'/partials/project.edit.html\'" class="mod-project new"></article><article ng-show="projects.length == 0" class="projects-loading"><div class="loading-indicator"></div></article><article ng-show="projects.length != 0 &amp;&amp; (projects | filter:search).length === 0" class="mod-project project-not-found"><h2>找不到您關心的議題？</h2><a ng-click="newProject()" class="btn btn-success btn-large"><i class="icon-plus"></i>立刻新增專案！</a></article><article ng-repeat="project in projects | filter:search" class="mod-project"><h2><a href="javascript:">{{project.name_zh || project.name}}</a><small ng-show="project.projects">&nbsp;隸屬&nbsp;<a href="javascript:" ng-repeat="pname in project.projects">{{pname}}&nbsp;</a></small></h2><p>{{ project.description_zh }}</p><dl class="dl-horizontal mod-project-meta"><dt ng-show="project.homepage">專案網址</dt><dd ng-show="project.homepage"><a ng-href="{{project.homepage}}">{{project.homepage}}</a></dd><dt>專案連結</dt><dd><div class="mod-project-links"><ul><li ng-show="project.homepage"><a ng-href="{{project.homepage}}" target="_blank"><i class="icon-link"></i>&nbsp;',
'網站</a></li><li ng-show="project.document"><a ng-href="{{project.document}}" target="_blank"><i class="icon-hackfoldr"></i>&nbsp;',
'文件</a></li><li ng-show="project.repository"><a href="{{project.repository.url}}" target="_blank"><i class="icon-github"></i>&nbsp;',
'程式源碼</a></li><li ng-show="project.video"><a href="{{project.video}}" target="_blank"><i class="icon-youtube"></i>&nbsp;',
'5分鐘瞭解影片</a></li><li ng-show="project.trello"><a href="{{project.trello}}" target="_blank"><i class="icon-trello"></i>&nbsp;',
'專案控管</a></li></ul></div></dd><dt class="inline">專案進度</dt><dd class="inline"><span ng-class="\'label-\' + project.status" class="label">{{ project.status }}</span></dd><dt class="inline">專案需求</dt><dd class="inline-last"><span ng-repeat="need in project.needs" class="label label-important">{{ need }}&nbsp;</span></dd><dt ng-if="project.author">協調者</dt><dd ng-if="project.author"><span data-toggle="tooltip" title="{{project.author}}" class="avatar-link"><img ng-src="{{avatarFor(project.author)}}" class="avatar"/></span></dd><dt ng-if="project.contributors">參與者</dt><dd ng-if="project.contributors"><span data-toggle="tooltip" title="{{user}}" ng-repeat="user in project.contributors" class="avatar-link"><img ng-src="{{avatarFor(user)}}" class="avatar"/>&nbsp;</span></dd></dl></article><!--.pagination<ul><li class="disabled"><span>«</span></li><li class="active"><span>1</span></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#">Next</a></li></ul>--></div><div class="span4"><section ng-controller="IssueCtrl" class="mod-issues"><!--div.issues-filter.btn-group.pull-right<a href="#" data-toggle="dropdown" class="btn btn-mini dropdown-toggle">easy<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">all</a></li><li class="divider"></li><li><a href="javascript://">easy</a></li><li><a href="javascript://">medium</a></li><li><a href="javascript://">hard</a></li></ul>--><div class="issues-filter btn-group pull-right"><a href="javascript://" data-toggle="dropdown" class="btn btn-mini dropdown-toggle">Project: {{opt_project}}&nbsp;<span class="caret"></span></a><ul class="dropdown-menu"><li><a ng-click="set_project(\'all\')"><dl class="dl-horizontal"><dt></dt><dd>all projects</dd></dl></a></li><li class="divider"></li><li ng-repeat="project in projects"><a ng-click="set_project(project.name)"><dl class="dl-horizontal"><dt><span class="label label-info">{{project.name}}</span></dt><dd>{{project.name_zh || project.name}}&nbsp;</dd></dl></a></li></ul></div><h2>想要幫忙？</h2><p>底下是一些各專案的任務清單，您可以幫忙的事項，歡迎跳坑。請先申請 github 帳號，開始加入討論 :)</p><div class="issues-label-filter"><select data-placeholder="Filter by Labels…" multiple="multiple" ng-model="opt_labels" ng-options="label.name as label.text group by label.kind for label in labels"></select><script>$(".issues-label-filter select").chosen({width: "100%"});</script></div><table class="table table-condensed table-hover"><tbody><!--tr<td><span data-toggle="tooltip" title="{{project.author}}" class="avatar-link pull-right"><img ng-src="{{avatarFor(&quot;clkao&quot;)}}" class="avatar"/></span><a href="">people registry: improve load time</a><br/><span class="label label-info">hack.g0v.tw</span><span class="label label-important">writer</span></td>--><!--tr<td><a href="">mobile safari main-content scrollbar not visible</a><br/><span class="label label-info">hack.g0v.tw</span><span class="label label-important">programmer</span><span class="label label-important">design</span></td>--><!--tr<td><span data-toggle="tooltip" title="{{project.author}}" class="avatar-link pull-right"><img ng-src="{{avatarFor(&quot;clkao&quot;)}}" class="avatar"/></span><a href="">integrated chat service</a><br/><span class="label label-info">22k</span><span class="label label-important">programmer</span><span class="label label-important">writer</span></td>--><tr ng-show="issues.length === 0" class="issues-loading"><td><div class="loading-indicator"></div></td></tr><tr ng-repeat="issue in issues" ng-show="issue.title"><td><span ng-show="issue.assignee" data-toggle="tooltip" title="{{issue.assignee.login}}" class="avatar-link pull-right"><!--img.avatar(ng-src=\'{{avatarFor(issue.assignee.login)}}\')--><img ng-src="{{issue.assignee.avatar_url}}" class="avatar"/></span><a href="{{issue.html_url}}" target="_blank">{{issue.title}}</a><br/><span class="badge badge-info">{{issue.repo}}</span>&nbsp;<span ng-repeat="label in issue.labels" ng-class="label_css_classes(label)" ng-style="{\'background-color\':\'#\'+label.color}" class="label">{{label.name}}</span></td></tr><tr><td><pagination num-pages="numPages" current-page="currentPage" max-size="6" boundary-links="true" previous-text="\'&lsaquo;\'" next-text="\'&rsaquo;\'" first-text="\'&laquo;\'" last-text="\'&raquo;\'" class="pagination-centered pagination-small"></pagination></td></tr></tbody></table></section><section class="mod-featured"><h2>特色推薦</h2><div class="mod-project"><div ng-show="!featured" class="featured-loading"><div class="loading-indicator"></div></div><a ng-href="{{featured.homepage}}"><img ng-src="{{featured.thumbnail.reduce ? featured.thumbnail.0 : featured.thumbnail}}"/></a><h2><a ng-href="{{featured.homepage}}">{{featured.name_zh || featured.name}}</a><p>{{featured.description_zh}}</p></h2></div></section></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/project.new.html', [
'<div id="newprj" class="modal"><div class="modal-header"><button type="button" data-dismiss="modal" aria-hidden="true" class="close">×</button><h3>新增專案</h3></div><div class="modal-body"><form style="width:85%;margin: 0 auto"><fieldset><label>專案名稱</label><input type="text" ng-model="newprj.name" placeholder="輸入專案名稱，例如：香民關心您"/><label>專案說明</label><textarea ng-model="newprj.desc" placeholder="輸入專案描述，例如：香民關心您是個利用進香來關心鄉民的概念"></textarea><label>勾選參加黑客松期數</label><div class="checkboxs"><label ng-repeat="h in newprj.hackathons" class="checkbox"><input type="checkbox" ng-model="h.checked"/>hackath{{$index}}n</label></div><label>連結的 Hackpad 或 Hackfoldr</label><input type="text" ng-model="newprj.url" placeholder="例如：http://hack.g0v.tw/kuansim/mynkDCEAXgc"/></fieldset></form></div><div class="modal-footer"><div id="newprj-uploaded"><i class="icon-ok"></i>新增完成</div><a href="#" data-dismiss="modal" aria-hidden="true" class="btn">取消</a><a ng-click="newprj.submit()" class="btn btn-primary">新增</a></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/tag.html', [
'<div ng-cloak="ng-cloak" class="row tag-content"><div id="left-block" class="span4"><div class="p-all-p1"><h3>專案<ul><li ng-click="go(\'/project/{{project.name}}\')" ng-repeat="project in projects | filter:{keywords: tag}"><div class="name">{{project[\'name_zh\'] || project.name }}</div></li></ul></h3><h3>人群<ul><li ng-repeat="person in people | filter:{tags: tag}"><div ng-class="{{person.status}}" style="width:100%;" class="person"><div class="row fix-m-left"><img ng-src="{{person.avatar}}?size=medium" class="img-polaroid"/><div style="display:inline-block;font-size:20px;padding:15px 0;font-family:Century Gothic" class="name">{{person.username}}</div><br/><button ng-click="toggle_tag($event)" class="btn m-top-1">關鍵字</button></div><div class="row m-top-p1 fix-m-left hide"><span ng-repeat="tag in person.tags" ng-class="{ \'label-success\': tag == \'hackath3n\' }" ng-click="gotag(tag)" class="label tag">{{tag}}</span></div></div></li></ul></h3></div></div><div id="right-block" class="span8 p-all-p1"><div class="p-all-p1"><h3>關於 {{ tag }}</h3><div class="back-link"><a href="/people">回到 Hub</a></div><div id="disqus_thread" class="content-panel-content"></div></div></div></div>',''].join("\n"));
}]);