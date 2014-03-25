const CONST_CSV = """
,g0v.today,,,,"g0v.today 恢復每 3 分鐘更新， hackfoldr.org 每分鐘更新",,,,,,,
http://newday.tw/intro/,讓晨曦照亮民主,,守護民主手環:important,,,,,,,,,
https://ethercalc.org/static/proxy/hackpad/,"文字轉播 (主要) ",,每分鐘更新:warning,,,,,,,,,
http://congress-text-live.herokuapp.com/,"文字轉播 (同上)",,"即時更新:warning ",,,,,,,,,
https://ethercalc.org/static/proxy/live.txt,"文字轉播 (內場) ",,每分鐘更新:warning,,,,,,,,,
,,,,,,,,,,,,
https://ethercalc.org/static/proxy/english/,"English Transcripts",,Auto-refresh:warning,,,,,,,,,
,,,,,,,,,,,,
http://fact.g0v.tw/tisa.html,服貿跑馬燈,,,,,,,,,,,
http://ecfa.speaking.tw/imho.php,"服貿東西軍 ",,,,,,,,,,,
,影音直播,"{""expand"":true} ",,,"影音更新時請記得保留前方空白和 /embed/ 格式, 把 youtube.com/watch?v=XXXXXX 的 XXXXX 放到 /embed/ 後即可。ustream 也是使用 /embed/ (按「分享」可取得 embed code)",,,,,,,
" http://stlive.maxorz.com","12合一聯播網 ","{""target"": ""_blank""} ",,,,,,,,,,
" http://rsghost.github.io/congressoccupied/","簡易聯播 ","{""target"": ""_blank""} ",,,,,,,,,,
" https://www.ustream.tv/embed/17548030","English LIVE",,,,,,,,,,,
" https://www.ustream.tv/embed/17513092","議場內 樓上",,,,,,,,,,,
" https://www.youtube.com/embed/nyZ9Oxxt2Ks","議場內 樓上(Apple) ",,11am:warning,,,,,,,,,
" https://www.youtube.com/embed/j7AA2EsI_vI","議場內 議事台(黑島)",,"3/24 7pm:warning",,,,,,,,,
" https://www.youtube.com/embed/sHKXPgq19xg","議場內 樓下(音地) ",,"3/24 5pm:warning",,,,,,,,,
" https://www.ustream.tv/embed/13620594","議場內 樓下(五六) ",,,,,,,,,,,
" https://www.youtube.com/embed/M_mz6BZFl_I","議場外(Apple) ",,停播中:error,"停播中 3/25 5am",,,,,,,,
" https://www.youtube.com/embed/_-etlAXerLg","濟南路 1 (g0v)",,10am:warning,,,,,,,,,
" http://www.ustream.tv/embed/17569549","濟南路 2 (g0v)",,6am:warning,,,,,,,,,
" https://www.youtube.com/embed/SC21kycqoKM","青島外場 (g0v)",,11am:warning,,,,,,,,,
,,,,,,,,,,,,
,,,,,,,,,,,,
,,,,,,,,,,,,
,"現場轉播回報 ","{""expand"":false} ",,,,,,,,,,
" https://docs.google.com/spreadsheets/d/1Xj9XLK24ON99jBuSON8e8tUuNgi320aOZSVF60xncos/pubhtml ","現場轉播回報 ",,"主要:info ",,,,,,,,,
" https://docs.google.com/document/d/1LoTj147B5IHji5vmZYJxXEBKSfnGDzld4oTBloGL7UM/edit?usp=sharing ","現場轉播回報 ",,"備用:info ",,,,,,,,,
,文字轉播專區,"{""expand"":false} ","重要:important ",,,,,,,,,
,,,,,,,,,,,,
" https://ethercalc.org/static/proxy/hackpad/3-24.html","3-24 中午備份",,,,,,,,,,,
" https://ethercalc.org/static/proxy/english/3-24.html","3-24 Noon Archive",,,,,,,,,,,
" https://docs.google.com/document/d/1uTmn5-nUKW-MEpR5ygBfG10HEJ-Zul4TrtntKAOPxbQ/edit?disco=AAAAAH_Tjng ","文字轉播GoogleDoc -1 ",,,,,,,,,,,
,"人力物資需求 ","{""expand"":false} ",,,,,,,,,,
" https://g0v.hackpad.com/-Live--HpwTUS2OShF ","遠端文字轉播排班表 ",,"請支援:important ",,,,,,,,,
,,,,,,,,,,,,
" https://docs.google.com/spreadsheet/ccc?key=0AkNsS2a-Qx8ZdGpmekpMQjJBNWZsbjh6cUxORVR4QUE&usp=sharing ","青島東路線路組物資需求 ",,"請支援:important ",,,,,,,,,
,抗議行動相關資訊,"{""expand"":""false""} ",,,,,,,,,,
" https://g0v.hackpad.com/2dCf0sLS70c",聯合指揮中心窗口,,,,,,,,,,,
" https://docs.google.com/document/d/1t0Xxy3mI4Ct2QBp6kqoi1NDtgQVe1EMlBlFEu7e6qZQ/pub ","抗議者自保須知 ",,,,,,,,,,,
" https://mapsengine.google.com/map/u/1/embed?mid=zlxW8eSZKLlk.k1Nzj2E6NfgY",周邊地圖,,,,,,,,,,,
" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dFZfdjd2alRLaW83WHpuX0JnUmJPZmc","台北以外活動 ",,,,,,,,,,,
,影音記錄,"{""expand"":false}",,,,,,,,,,
" https://www.youtube.com/embed/pxv-thjDpfU","進場過程 3/18 ",,,,,,,,,,,
" https://www.youtube.com/embed/rm5kI7X6sJ0","場外 3/18 ",,,,,,,,,,,
" https://www.youtube.com/embed/yj9Dy0IMmi0","場外 3/19 上午 ",,,,,,,,,,,
" https://www.youtube.com/embed/bgHcFFWnXkM","場外 3/19 下午 ",,,,,,,,,,,
" https://www.youtube.com/embed/pptmdPk-0DQ","北側 3/19 晚間 ",,,,,,,,,,,
" https://www.youtube.com/embed/mpqkvYTM30g","北側 3/19 傍晚 ",,,,,,,,,,,
" https://www.youtube.com/embed/dDimp7TDhJw","北側 3/19 下午 ",,,,,,,,,,,
" https://www.youtube.com/embed/wKuWnBSXF3s","3/19 警方凌晨 3 點第一波攻堅 ",,,,,,,,,,,
" https://www.youtube.com/embed/_rwNDRKG-uI","議場內（蘋報 319） ",,,,,,,,,,,
" https://www.youtube.com/embed/0J4mZlkFmRs","議場內（蘋報 320） ",,,,,,,,,,,
" http://www.ustream.tv/embed/17537793","濟南路 南側 ",,,,,,,,,,,
" https://www.youtube.com/embed/odUyLRc3P0M","台中 ",,,,,,,,,,,
" http://www.youtube.com/embed/uTxGjgRu3Xs",行政院機動組1,"  ",,"  ","  ","  ","  ","  ","  ","  ","  "," "
" http://www.youtube.com/embed/OIu_xLF4RhQ","北側 3/24",,,"hychen ",,,,,,,,
" https://www.youtube.com/embed/gq4T8UPSpJk","濟南路 舞台(音地) ",,,,,,,,,,,
" http://www.ustream.tv/recorded/45245933",行政院機動組2,,,,,,,,,,,
" https://www.youtube.com/embed/FvbvAH5_0oI","議場內 樓上(Apple) ",,,,,,,,,,,
,媒體區,"{""expand"":false} ",,,,,,,,,,
" https://g0v.hackpad.com/318--vCNzeS4wnbh","318 學運罷課聲明",,,,,,,,,,,
" https://docs.google.com/document/d/1oVxDBCcp4b-IJmIL4-duQo1Y4SBzAUBtwcrUfTdLj18/edit?usp=sharing ","各團體行動聲明 ",,,,,,,,,,,
" https://g0v.hackpad.com/318--H6s4KlBRSC3","各團體行動聲明(backup) ",,,,,,,,,,,
" https://g0v.hackpad.com/-FAQ-gGlUisv5cMG","佔領立法院行動 FAQ ",,,,,,,,,,,
" https://g0v.hackpad.com/A4-7E4ts6CMRsq","佔領立法院A4傳單 ",,,,,,,,,,,
" https://g0v.hackpad.com/X0fp4Z6AhiL","街頭採訪要點 ",,,,,,,,,,,
" https://docs.google.com/spreadsheet/ccc?key=0AjG4NH1Ti5o1dHhIeVdaTHNnMjhIT1VWRm5VSjNQd1E",外電消息整理,,,,,,,,,,,
" https://docs.google.com/document/d/1NoiYQyZOhGcN2cRA9DRZ85_sFh7AUe-lpaxPmNcO1Ps/edit?usp=sharing ","照片來源 ",,,,,,,,,,,
" https://g0v.hackpad.com/--PEn9NyJRh2X","創作收集 ",,,,,,,,,,,
" http://occupation.today/","照片與訊息 Tumblr ",,,,,,,,,,,
"""

angular.module 'app.controllers' <[ui.state ngCookies]>
.controller AppCtrl: <[$scope $window $state $rootScope $timeout]> ++ ($scope, $window, $state, $rootScope, $timeout) ->
  $scope.$watch '$state.current.name' ->
    $scope.irc-enabled = true if it is \irc

  # mobile
  window.addEventListener "load" ->
    <- $timeout _, 0
    window.scrollTo 0, 1

  <- $timeout _, 10s * 1000ms
  $rootScope.hideGithubRibbon = true

.controller HackFolderCtrl: <[$scope $window $state $cookies HackFolder]> ++ ($scope, $window, $state, $cookies, HackFolder) ->
  $scope <<< do
    hasViewMode: -> it.match /g(doc|present|draw)/
    sortableOptions: do
      update: -> console?log \notyetupdated
    iframes: HackFolder.iframes
    docs: HackFolder.docs
    tree: HackFolder.tree
    godoc: (doc) ->
      if doc.opts?target == '_blank'
        window.open doc.url, doc.id
        return true
      else if doc.url.match /(https?:)?\/\/[^/]*(github|facebook)\.com/
        window.open doc.url, doc.id
        return true
      else
        $scope.go "/#{ $scope.hackId }/#{ decodeURIComponent doc.id }"
    open: (doc) ->
      window.open doc.url, doc.id
      return false
    activate: ->
      doc = HackFolder.activate it
      if doc?type is \hackfoldr
        console.log \folder!!
    saveBtn: void
    saveModalOpts: dialogFade: true
    saveModalOpen: false
    showSaveModal: (show,rm,e)->
      $scope.saveModalOpen = show
      if e => $scope.saveBtn = $ e.target
      if rm =>
        $cookies.savebtn = \consumed
        if $scope.saveBtn => $scope.saveBtn.fadeOut 1000
    showSaveBtn: ->
      $cookies.savebtn != \consumed
    HackFolder: HackFolder
    iframeCallback: (doc) -> (status) -> $scope.$apply ->
      console?log \iframecb status, doc
      $state.current.title = "#{doc.title} – g0v.today"
      if status is \fail
        doc.noiframe = true
      else
        doc.noiframe = false
      doc.iframeunsure = true if status is \unsure

    debug: -> console?log it, @
    reload: (hackId) -> HackFolder.getIndex hackId, true ->

  $scope.$watch 'hackId' (hackId) ->
    <- HackFolder.getIndex hackId, false
    $scope.$watch 'docId' (docId) ->
      doc = HackFolder.activate docId if docId
      if doc?type is \hackfoldr
        $scope.show-index = true
        folder-title, docs, tree <- HackFolder.load-remote-csv doc.id
        [entry] = [entry for entry in HackFolder.tree when entry.id is docId]
        entry.tagFilter = entry.tags?0?content
        unless entry.chidlren
          entry.children ?= tree?0.children
          HackFolder.docs.splice docs.length, 0, ...docs
        $scope.indexDocs = docs
        $scope.indexSearch = hackId.replace /^g0v-/,''
      else
        $scope.show-index = false
    $scope.show-index = $state.current.name is \hack.index
    return if $scope.show-index
    unless $scope.docId
      if HackFolder.docs.0?id
        $state.transitionTo 'hack.doc', { docId: that, hackId: $scope.hackId}

  $scope.collapsed = $cookies.collapsed ? $window.innerWidth < 768
  $scope.$watch 'collapsed' -> if it?
    $cookies.collapsed = it

  $scope.hackId = if $state.params.hackId => that else 'congressoccupied'
  $scope.$watch '$state.params.docId' (docId) ->
    $scope.docId = encodeURIComponent encodeURIComponent docId if docId

.directive 'resize' <[$window]> ++ ($window) ->
  (scope, element, attrs) ->
    refresh-size = ->
      scope.width = $window.innerWidth
      scope.height = $window.innerHeight
      scope.content-height = $window.innerHeight - $ element .offset!top

    angular.element $window .bind 'resize' ->
      scope.$apply refresh-size

    refresh-size!

.directive 'ngxIframe' <[$parse]> ++ ($parse) ->
  link: ($scope, element, attrs) ->
    cb = ($parse attrs.ngxIframe) $scope
    dispatch = (iframe, loading) ->
      ok = !try
        iframe.location ~= \about:blank
      # access denied, meaning the iframe is loaded. wait for .load to fire
      if loading and $.browser.mozilla
        # check if the failure is actually XFO denied. this doesn't work
        # req = $.ajax do
        #   type: \OPTION
        #   url: attrs.src
        #   success: ->
        #     console.log \done
        #     req.getAllResponseHeaders!
        #   error: (request, textStatus, errorThrown) ->
        #     console.log \err textStatus, request.getAllResponseHeaders!
        #     console.log request
        cb \unsure
      else
        cb if ok => \ok else \fail

    var fail
    $ element .load ->
      clearTimeout fail
      dispatch @contentWindow, true

    fail = setTimeout (->
      dispatch element[0].contentWindow
    ), 5000ms
.directive \ngxNoclick ->
  ($scope, element, attrs) ->
    $ element .click -> it.preventDefault!; false

.directive 'ngxClickMeta' <[$parse]> ++ ($parse) ->
  link: ($scope, element, attrs) ->
    cb = $parse attrs.ngxClickMeta

    is-meta = if navigator.appVersion.match /Win/
      -> it.ctrlKey
    else
      -> it.metaKey

    $ element .click (e) ->
      if is-meta e
        unless cb $scope
          e.preventDefault!
          return false
      return

.directive \ngxFinal ->
  ($scope, element, attrs) ->
    $ element .click -> it.stopPropagation();

.directive \scrollbar <[$window]> ++ ($window) ->
  (scope, element, attrs) ->
    has-scrollbar = ->
      $index = $('.index')
      scope.has-scrollbar = $index.get(0).scrollHeight > $window.innerHeight - $('.navbar').height()
    angular.element $window .bind \resize ->
      scope.$apply has-scrollbar
    scope.$watch 'docs' has-scrollbar
    has-scrollbar()

.factory HackFolder: <[$http $sce]> ++ ($http, $sce) ->
  iframes = {}
  docs = []
  tree = []
  var hackId
  self = do
    iframes: iframes
    docs: docs
    tree: tree
    activate: (id, edit=false) ->
      [doc] = [d for d in docs when d.id is id]
      type = doc?type
      for t in tree
        if t?children?map (.id)
          t.expand = true if id in that
      mode = if edit => \edit else \view
      src = match type
      | \gdoc =>
          "https://docs.google.com/document/d/#id/#mode?pli=1&overridemobile=true"
      | \gsheet =>
          "https://docs.google.com/spreadsheet/ccc?key=#id"
      | \gpresent =>
          "https://docs.google.com/presentation/d/#id/#mode"
      | \gdraw =>
          "https://docs.google.com/drawings/d/#id/#mode"
      | \gsheet =>
          "https://docs.google.com/spreadsheet/ccc?key=#id"
      | \hackpad =>
        "https://#{ doc.site ? '' }hackpad.com/#{id}"
      | \ethercalc =>
          "https://ethercalc.org/#id"
      | \url => decodeURIComponent decodeURIComponent id
      | otherwise => ''

      src += doc?hashtag if doc?hashtag

      src = $sce.trustAsResourceUrl src if src
      return doc if doc?type is \hackfoldr
      if iframes[id]
          that <<< {src, mode}
      else
          iframes[id] = {src, doc, mode}
      return doc

    getIndex: (id, force, cb) ->
      return cb docs if hackId is id and !force
      retry = 0
      doit = ~>
        csv = CONST_CSV
        <~ setTimeout _, 1ms
        #csv <~ $http.get "https://www.ethercalc.org/_/#{id}/csv"
        #.error -> return if ++retry > 3; setTimeout doit, 1000ms
        #.success

        hackId := id
        docs.length = 0
        @process-csv csv, cb
      doit!


    process-csv: (csv, cb) ->
      folder-title, docs <- @load-csv csv, docs, tree
      self.folder-title = folder-title
      cb docs

    load-remote-csv: (id, cb) ->
      #csv <~ $http.get "https://www.ethercalc.org/_/#{id}/csv"
      #.success
      csv = CONST_CSV
      <~ setTimeout _, 1ms
      docs = []
      tree = []
      folder-title <~ @load-csv csv, docs, tree
      cb folder-title, docs, tree

    load-csv: (csv, docs, tree, cb) ->
      var folder-title
      csv -= /^\"?#.*\n/gm
      entries = for line in csv.split /\n/ when line
        [url, title, opts, tags, summary, ...rest] = line.split /,/
        title -= /^"|"$/g
        opts -= /^"|"$/g if opts
        opts.=replace /""/g '"' if opts
        tags -= /^"|"$/g if tags
        [_, prefix, url, hashtag] = url.match /^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/
        entry = { summary, hashtag, url, title, indent: prefix.length, opts: try JSON.parse opts ? '{}' } <<< match url
        | void
            unless folder-title
              if title
                folder-title = title
                title = null
            title: title
            type: \dummy
            id: \dummy
        | // ^\/\/(.*?)(?:\#(.*))?$ //
            type: \hackfoldr
            id: that.1
            tag: that.2
        | // ^https?:\/\/www\.ethercalc\.(?:com|org)/(.*) //
            type: \ethercalc
            id: that.1
        | // https:\/\/docs\.google\.com/document/(?:d/)?([^/]+)/ //
            type: \gdoc
            id: that.1
        | // https:\/\/docs\.google\.com/spreadsheet/ccc\?key=([^/?&]+) //
            type: \gsheet
            id: that.1
        | // https:\/\/docs\.google\.com/drawings/(?:d/)?([^/]+)/ //
            type: \gdraw
            id: that.1
        | // https:\/\/docs\.google\.com/presentation/(?:d/)?([^/]+)/ //
            type: \gpresent
            id: that.1
        | // https?:\/\/(\w+\.)?hackpad\.com/(?:.*?-)?([\w]+)(\#.*)?$ //
            type: \hackpad
            site: that.1
            id: that.2
        | // ^(https?:\/\/[^/]+) //
            type: \url
            id: encodeURIComponent encodeURIComponent url
            icon: "http://g.etfv.co/#{ that.1 }"
        | otherwise => console?log \unrecognized url

        if entry.type is \dummy and !entry.title?length
          null
        else
          {icon: "/img/#{ entry.type }.png"} <<< entry <<< do
            tags: (entry.opts?tags ? []) ++ ((tags?split \,) ? [])
              .filter -> it.length
              .map (tag) ->
                [_, content, c, ...rest] = tag.match /^(.*?)(?::(.*))?$/
                {content, class: c ? 'warning'}

      docs.splice 0, docs.length, ...(entries.filter -> it?)
      last-parent = 0
      nested = for entry, i in docs
        if i > 0 and entry.indent
          docs[last-parent]
            ..children ?= []
              ..push entry
          null
        else
          last-parent = i
          entry
      nested .= filter -> it?
      nested .= map ->
        if it.children
          it.expand = it.opts?expand ? it.children.length < 5
        it
      tree.splice 0, tree.length, ...nested
      cb folder-title, docs
