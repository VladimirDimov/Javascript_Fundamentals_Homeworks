


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>JavaScript-Fundamentals/07. Arrays at master · TelerikAcademy/JavaScript-Fundamentals</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="TelerikAcademy/JavaScript-Fundamentals" name="twitter:title" /><meta content="JavaScript-Fundamentals - JavaScript Fundamentals Course Repository" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/1455020?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/1455020?v=3&amp;s=400" property="og:image" /><meta content="TelerikAcademy/JavaScript-Fundamentals" property="og:title" /><meta content="https://github.com/TelerikAcademy/JavaScript-Fundamentals" property="og:url" /><meta content="JavaScript-Fundamentals - JavaScript Fundamentals Course Repository" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTA0NzUyMTU6ODcxOGJhNTQ3OGE0ZmM4Zjc4OGRhZDNlYTg5NjExNGQ6MWJkMjJhYzRhMGM0Y2I2OGFhN2YyM2E5ZGNkODQ2ZGRiNWVmMWUzNzg3ZTdkZmVmZGE4NDRmNTZmNTJhZmU2Yg==--69e7c7565b7abdb2197ac02ad3851638ab2f79d4">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="5E1A27FC:7A79:980FBD:5559EA99" name="octolytics-dimension-request_id" /><meta content="10475215" name="octolytics-actor-id" /><meta content="VladimirDimov" name="octolytics-actor-login" /><meta content="e7fdedcdb72f04fb599847c51ebfd970f31860150c1076ccb8d0a7eb6e4221cb" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, files#disambiguate" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
      <meta name="hostname" content="github.com">
    <meta name="user-login" content="VladimirDimov">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="tEIyyuhqGrXocGosHzhH96B+uIAggwAhdUUo6m2fm5h/rLV6vz1zJ16wzH95hK/sY+QsHRu+VEZ5TLHzRYOS3w==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github/index-d80e093fe7c48ff920ce83dfd2ad7c02806722220d164b49101ed783098ea618.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2/index-99a58ea750b0547d1266460cd4ade0c2c81ed8c524cbba4ea5e3b37e18daec79.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="282d80bd51fc0e03270191711c02f726">

      
  <meta name="description" content="JavaScript-Fundamentals - JavaScript Fundamentals Course Repository">
  <meta name="go-import" content="github.com/TelerikAcademy/JavaScript-Fundamentals git https://github.com/TelerikAcademy/JavaScript-Fundamentals.git">

  <meta content="1455020" name="octolytics-dimension-user_id" /><meta content="TelerikAcademy" name="octolytics-dimension-user_login" /><meta content="35606926" name="octolytics-dimension-repository_id" /><meta content="TelerikAcademy/JavaScript-Fundamentals" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="35606926" name="octolytics-dimension-repository_network_root_id" /><meta content="TelerikAcademy/JavaScript-Fundamentals" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/TelerikAcademy/JavaScript-Fundamentals/commits/master.atom" rel="alternate" title="Recent Commits to JavaScript-Fundamentals:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/TelerikAcademy/JavaScript-Fundamentals/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/TelerikAcademy/JavaScript-Fundamentals/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item explore">
            <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
          </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
            </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
          </li>
      </ul>

      
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/VladimirDimov" data-ga-click="Header, go to profile, text:username">
      <img alt="@VladimirDimov" class="avatar" data-user="10475215" height="20" src="https://avatars2.githubusercontent.com/u/10475215?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">VladimirDimov</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="/new" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu">
        
<li>
  <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
</li>
<li>
  <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
</li>


  <li class="dropdown-divider"></li>
  <li class="dropdown-header">
    <span title="TelerikAcademy/JavaScript-Fundamentals">This repository</span>
  </li>
    <li>
      <a href="/TelerikAcademy/JavaScript-Fundamentals/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>

      </ul>
    </div>
  </li>

  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:VladimirDimov"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="i5NlFWFulWO/JXyLBjnSk3wy3ZlJgTyv+GNAcINoIHnQkKAYetw+bsGc4WEt02XoHMi65BT8CaX/em5/cNBm1A==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>



    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kEaupx9I7J5EXuFfNImxRi7bARwgqJyLW/wa5Q3ayFHPY5s5b1uV/e17Dv4dH0zneLE6ccHslKVPOkwIWmSe7g==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="35606926" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/TelerikAcademy/JavaScript-Fundamentals/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:files#disambiguate">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/TelerikAcademy/JavaScript-Fundamentals/watchers">
          12
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/TelerikAcademy/JavaScript-Fundamentals/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="/4SjINtszloHK2f2edbQLH/zK0A3oxhQEQXbz/LXqRPQOfTsytCKaMyzOYNq+n53eh3pCZ+GeId0dG+KahPx4Q==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar TelerikAcademy/JavaScript-Fundamentals"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/TelerikAcademy/JavaScript-Fundamentals/stargazers">
          4
        </a>
</form>
    <form accept-charset="UTF-8" action="/TelerikAcademy/JavaScript-Fundamentals/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="GK4HH9u63yOHcHJSQJBDcP/jUYhMKE2rvaNgQ5xliDgQxi1z084CR5ohXgMl3bT0u7mm56WPpMNYwxmvBHI0Xw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star TelerikAcademy/JavaScript-Fundamentals"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/TelerikAcademy/JavaScript-Fundamentals/stargazers">
          4
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/TelerikAcademy/JavaScript-Fundamentals/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="uny9Amb0EVyWajYnojChYeKQNQBH4Uoivx4BhuXLc4UeP4kCGIgRavkNVua3EQBZCoLqMkdYjHHbZmoMtFsnFg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork"
                title="Fork your own copy of TelerikAcademy/JavaScript-Fundamentals to your account"
                aria-label="Fork your own copy of TelerikAcademy/JavaScript-Fundamentals to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/TelerikAcademy/JavaScript-Fundamentals/network" class="social-count">7</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/TelerikAcademy" class="url fn" itemprop="url" rel="author"><span itemprop="title">TelerikAcademy</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/TelerikAcademy/JavaScript-Fundamentals" class="js-current-repository" data-pjax="#js-repo-pjax-container">JavaScript-Fundamentals</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/TelerikAcademy/JavaScript-Fundamentals/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/TelerikAcademy/JavaScript-Fundamentals" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /TelerikAcademy/JavaScript-Fundamentals">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/TelerikAcademy/JavaScript-Fundamentals/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /TelerikAcademy/JavaScript-Fundamentals/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/TelerikAcademy/JavaScript-Fundamentals/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /TelerikAcademy/JavaScript-Fundamentals/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/TelerikAcademy/JavaScript-Fundamentals/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /TelerikAcademy/JavaScript-Fundamentals/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/TelerikAcademy/JavaScript-Fundamentals/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /TelerikAcademy/JavaScript-Fundamentals/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/TelerikAcademy/JavaScript-Fundamentals/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /TelerikAcademy/JavaScript-Fundamentals/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/TelerikAcademy/JavaScript-Fundamentals.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:TelerikAcademy/JavaScript-Fundamentals.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/TelerikAcademy/JavaScript-Fundamentals" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/TelerikAcademy/JavaScript-Fundamentals" class="btn btn-sm sidebar-button" title="Save TelerikAcademy/JavaScript-Fundamentals to your computer and use it in GitHub Desktop." aria-label="Save TelerikAcademy/JavaScript-Fundamentals to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/TelerikAcademy/JavaScript-Fundamentals/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of TelerikAcademy/JavaScript-Fundamentals as a zip file"
                   title="Download the contents of TelerikAcademy/JavaScript-Fundamentals as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          
<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/TelerikAcademy/JavaScript-Fundamentals/tree/master/07.%20Arrays"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


  <div class="btn-group right">
    <a href="/TelerikAcademy/JavaScript-Fundamentals/find/master" data-pjax data-hotkey="t" class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s" aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <a href="/TelerikAcademy/JavaScript-Fundamentals/commits/master/07.%20Arrays" class="btn btn-sm empty-icon tooltipped tooltipped-s" aria-label="Browse commits for this branch">
      <span class="octicon octicon-history"></span>
    </a>
  </div>

  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/TelerikAcademy/JavaScript-Fundamentals" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">JavaScript-Fundamentals</span></a></span></span><span class="separator">/</span><strong class="final-path">07. Arrays</strong><span class="separator">/</span>
    <form accept-charset="UTF-8" action="/TelerikAcademy/JavaScript-Fundamentals/new/master/07.%20Arrays" class="js-new-blob-form inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Bh/VMy15XGrt4Rr701xhoiewRwl7paxEgjyCMc4gIvoZpyBGCsn78hlEnnT5MCkf8MAAp3zVw200gFLGRga60w==" /></div>
      <button class="btn-link tooltipped tooltipped-e" type="submit" data-disable-with="working…" aria-label="Fork this project and create a new file">
        <span class="js-new-blob-submit octicon octicon-plus" data-test-id="create-new-git-file"></span>
      </button>
</form></div>

</div>



  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/6364a1db751f98cf08f20246b7c0fd8be7fea97a" class="message" data-pjax="true" title="Capitalization fix">Capitalization fix</a>
        
    </p>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link tooltipped tooltipped-s" data-clipboard-text="6364a1db751f98cf08f20246b7c0fd8be7fea97a" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/6364a1db751f98cf08f20246b7c0fd8be7fea97a" class="sha-block" data-pjax>latest commit <span class="sha">6364a1db75</span></a>

      <div class="authorship">
        <img alt="@evlogihr" class="avatar" data-user="3619393" height="20" src="https://avatars3.githubusercontent.com/u/3619393?v=3&amp;s=40" width="20" />
        <span class="author-name"><a href="/evlogihr" rel="contributor">evlogihr</a></span>
        authored <time class="updated" datetime="2015-05-14T14:33:50Z" is="relative-time">May 14, 2015</time>

      </div>
    </div>
  </div>

  
<div class="file-wrap">
  <a href="/TelerikAcademy/JavaScript-Fundamentals/tree/8a6881e841c287c12e483bcb9de9f943cc139111/07.%20Arrays" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files" data-pjax>
      <tr class="up-tree">
        <td></td>
        <td><a href="/TelerikAcademy/JavaScript-Fundamentals" rel="nofollow" title="Go to parent directory">..</a></td>
        <td></td>
        <td></td>
      </tr>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/TelerikAcademy/JavaScript-Fundamentals/tree/master/07.%20Arrays/scripts" class="js-directory-link" id="d6c5855a62cf32a4dadbc2831f0f295f-6716701e0c8424b12493ab6a5c4451185f67a636" title="scripts">scripts</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/b083c77fb40353ab84e1bfe0133a5dee7cf59a12" class="message" data-pjax="true" title="Changed numbering of lectures">Changed numbering of lectures</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-14T11:47:41Z" is="time-ago">May 14, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/TelerikAcademy/JavaScript-Fundamentals/tree/master/07.%20Arrays/styles" class="js-directory-link" id="bc4150d023d3255136db671d61ac93f2-25c1bf312ab6f67cf1f72648a1fe42dc4c67ab24" title="styles">styles</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/b083c77fb40353ab84e1bfe0133a5dee7cf59a12" class="message" data-pjax="true" title="Changed numbering of lectures">Changed numbering of lectures</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-14T11:47:41Z" is="time-ago">May 14, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/TelerikAcademy/JavaScript-Fundamentals/blob/master/07.%20Arrays/1.%20creating-arrays.html" class="js-directory-link" id="bada139505323742c5ae4f26125129ac-846416a6e116cb3bc7107b6a28ef44e0a775b512" title="1. creating-arrays.html">1. creating-arrays.html</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/b083c77fb40353ab84e1bfe0133a5dee7cf59a12" class="message" data-pjax="true" title="Changed numbering of lectures">Changed numbering of lectures</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-14T11:47:41Z" is="time-ago">May 14, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/TelerikAcademy/JavaScript-Fundamentals/blob/master/07.%20Arrays/2.%20reverse-array.html" class="js-directory-link" id="0b293e2ecc89a22e054c047f3b3db6c2-405d97a6aa853fdcf63dc8cd193ec970cd600e11" title="2. reverse-array.html">2. reverse-array.html</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/b083c77fb40353ab84e1bfe0133a5dee7cf59a12" class="message" data-pjax="true" title="Changed numbering of lectures">Changed numbering of lectures</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-14T11:47:41Z" is="time-ago">May 14, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/TelerikAcademy/JavaScript-Fundamentals/blob/master/07.%20Arrays/3.%20processing-array.html" class="js-directory-link" id="dbe2499afb395bf8cd451b66944bcbf7-ab77605e43c4c88ba23bb1cd5a4616f7612d28fa" title="3. processing-array.html">3. processing-array.html</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/b083c77fb40353ab84e1bfe0133a5dee7cf59a12" class="message" data-pjax="true" title="Changed numbering of lectures">Changed numbering of lectures</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-14T11:47:41Z" is="time-ago">May 14, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/TelerikAcademy/JavaScript-Fundamentals/blob/master/07.%20Arrays/4.%20dynamic-array.html" class="js-directory-link" id="04bcf30b5648f57964ac7d7148ca9bee-134949917ff56ce7a0da2f350edc566ea6794bda" title="4. dynamic-array.html">4. dynamic-array.html</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/b083c77fb40353ab84e1bfe0133a5dee7cf59a12" class="message" data-pjax="true" title="Changed numbering of lectures">Changed numbering of lectures</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-14T11:47:41Z" is="time-ago">May 14, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/TelerikAcademy/JavaScript-Fundamentals/blob/master/07.%20Arrays/5.%20sorting-array.html" class="js-directory-link" id="e6978d255f85b5c55463f38766c14495-28eac098b5ef13c63eac0d67fc9ab6ecd3d1a076" title="5. sorting-array.html">5. sorting-array.html</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/b083c77fb40353ab84e1bfe0133a5dee7cf59a12" class="message" data-pjax="true" title="Changed numbering of lectures">Changed numbering of lectures</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-14T11:47:41Z" is="time-ago">May 14, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/TelerikAcademy/JavaScript-Fundamentals/blob/master/07.%20Arrays/6.%20other-functions.html" class="js-directory-link" id="e62099328cae3215c315b41dfaf346e5-227d9da86eadbbc38f302e04cb100cc9124f8375" title="6. other-functions.html">6. other-functions.html</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/b083c77fb40353ab84e1bfe0133a5dee7cf59a12" class="message" data-pjax="true" title="Changed numbering of lectures">Changed numbering of lectures</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-14T11:47:41Z" is="time-ago">May 14, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/TelerikAcademy/JavaScript-Fundamentals/blob/master/07.%20Arrays/7.%20indexOf.html" class="js-directory-link" id="811a0cc77fce1372bdf3a97e75aeacee-85410e0470446ddabfae21a7bb4143e5ceef06f9" title="7. indexOf.html">7. indexOf.html</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/b083c77fb40353ab84e1bfe0133a5dee7cf59a12" class="message" data-pjax="true" title="Changed numbering of lectures">Changed numbering of lectures</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-14T11:47:41Z" is="time-ago">May 14, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/TelerikAcademy/JavaScript-Fundamentals/blob/master/07.%20Arrays/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-854e06038701ec4f23ce84fe0eb6a94c9d3d6bb0" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/TelerikAcademy/JavaScript-Fundamentals/commit/6364a1db751f98cf08f20246b7c0fd8be7fea97a" class="message" data-pjax="true" title="Capitalization fix">Capitalization fix</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-14T14:33:50Z" is="time-ago">May 14, 2015</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a id="user-content-arrays" class="anchor" href="#arrays" aria-hidden="true"><span class="octicon octicon-link"></span></a>Arrays</h1>

<h3>
<a id="user-content-problem-1-increase-array-members" class="anchor" href="#problem-1-increase-array-members" aria-hidden="true"><span class="octicon octicon-link"></span></a>Problem 1. Increase array members</h3>

<ul>
<li>  Write a script that allocates array of 20 integers and initializes each element by its index multiplied by <code>5</code>.</li>
<li>  Print the obtained array on the console.</li>
</ul>

<h3>
<a id="user-content-problem-2-lexicographically-comparison" class="anchor" href="#problem-2-lexicographically-comparison" aria-hidden="true"><span class="octicon octicon-link"></span></a>Problem 2. Lexicographically comparison</h3>

<ul>
<li>  Write a script that compares two char arrays lexicographically (letter by letter).</li>
</ul>

<h3>
<a id="user-content-problem-3-maximal-sequence" class="anchor" href="#problem-3-maximal-sequence" aria-hidden="true"><span class="octicon octicon-link"></span></a>Problem 3. Maximal sequence</h3>

<ul>
<li>  Write a script that finds the <strong>maximal sequence</strong> of equal elements in an array.</li>
</ul>

<p><em>Example:</em></p>

<table>
<thead>
<tr>
<th>input</th>
<th>result</th>
</tr>
</thead>
<tbody>
<tr>
<td>2, 1, 1, 2, 3, 3, <strong>2, 2, 2</strong>, 1</td>
<td>2, 2, 2</td>
</tr>
</tbody>
</table>

<h3>
<a id="user-content-problem-4-maximal-increasing-sequence" class="anchor" href="#problem-4-maximal-increasing-sequence" aria-hidden="true"><span class="octicon octicon-link"></span></a>Problem 4. Maximal increasing sequence</h3>

<ul>
<li>  Write a script that finds the maximal increasing sequence in an array.</li>
</ul>

<p><em>Example:</em></p>

<table>
<thead>
<tr>
<th>input</th>
<th>result</th>
</tr>
</thead>
<tbody>
<tr>
<td>3, <strong>2, 3, 4</strong>, 2, 2, 4</td>
<td>2, 3, 4</td>
</tr>
</tbody>
</table>

<h3>
<a id="user-content-problem-5-selection-sort" class="anchor" href="#problem-5-selection-sort" aria-hidden="true"><span class="octicon octicon-link"></span></a>Problem 5. Selection sort</h3>

<ul>
<li>  Sorting an array means to arrange its elements in increasing order.</li>
<li>  Write a script to sort an array.</li>
<li>  Use the <a href="http://en.wikipedia.org/wiki/Selection_sort">selection sort</a> algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.</li>
</ul>

<p><em>Hint: Use a second array</em></p>

<h3>
<a id="user-content-problem-6-most-frequent-number" class="anchor" href="#problem-6-most-frequent-number" aria-hidden="true"><span class="octicon octicon-link"></span></a>Problem 6. Most frequent number</h3>

<ul>
<li>  Write a script that finds the most frequent number in an array. </li>
</ul>

<p><em>Example:</em></p>

<table>
<thead>
<tr>
<th>input</th>
<th>result</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<strong>4</strong>, 1, 1, <strong>4</strong>, 2, 3, <strong>4</strong>, <strong>4</strong>, 1, 2, <strong>4</strong>, 9, 3</td>
<td>4 (5 times)</td>
</tr>
</tbody>
</table>

<h3>
<a id="user-content-problem-7-binary-search" class="anchor" href="#problem-7-binary-search" aria-hidden="true"><span class="octicon octicon-link"></span></a>Problem 7. Binary search</h3>

<ul>
<li>  Write a script that finds the index of given element in a sorted array of integers by using the <a href="http://en.wikipedia.org/wiki/Binary_search_algorithm">binary search</a> algorithm.</li>
</ul>
</article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.06208s from github-fe141-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-5c08de317e4054ec200d36d3b1361ddd3cb30c05c9070a9d72862ee28ab1d7f9.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-b79817a43c4618022b9ecd18dadd96010ccecbb12b56fcc232664db1f897e3a8.js"></script>
      
      

  </body>
</html>

