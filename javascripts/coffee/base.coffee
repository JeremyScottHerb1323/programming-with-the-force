$ ->

  $('a[rel=external]').bind 'click', () -> this.target = "_blank"

  # look for .hide class and set display: none
  $('.js-hide').hide()

  $('a.get_repo').click (e) ->
    get_starwars()
    false

  # #Github Related Script
  # # Ajax Call
  repo_list = []

  get_starwars = () ->

    promise = $.ajax
      url: "https://api.github.com/search/repositories?q=starwars"
      dataType: "json"


    promise.done update_html
    promise.fail method_failed

update_html = (resp) ->
  repo_list = resp
  num = Math.floor(Math.random() * repo_list.items.length) + 1
  current_repo = repo_list.items[num]
  console.log current_repo

  html_string = "
  <div class='git-stats-container'>
    <h3><a href='#{current_repo.owner.html_url}'>#{current_repo.owner.login}</a> / <a href='#{current_repo.html_url}'>#{current_repo.name}</a></h3>
    <p class='h4'>#{current_repo.description}</p>
    <ul class='clearfix'>
      <li class='yoda with-icon-48'>Stars: #{current_repo.stargazers_count}</li>
      <li class='darth with-icon-48'>Forks: #{current_repo.forks_count}</li>
      <li class='chewie with-icon-48'>Watchers: #{current_repo.watchers}</li>
    </ul>
  </div>
  "
  $('.repo-content').html html_string
  false


method_failed = (other) ->
  console.log other
  console.log 'epic fail'