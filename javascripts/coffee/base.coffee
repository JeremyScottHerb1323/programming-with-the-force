$ ->
  # On load update html with git-repo otherwise do nothing.
  get_starwars() unless $('.git-stats-container').length

  $('a[rel=external]').bind 'click', () -> this.target = "_blank"

  # look for .hide class and set display: none
  $('.js-hide').hide()

  # Update html with git-repo
  $('a.get_repo').click (e) ->
    update_html()
    false

# #Github Related Script
# # Ajax Call
repo_list = []
get_starwars = () ->
  promise = $.ajax
    url: "https://api.github.com/search/repositories?q=starwars"
    dataType: "json"
    async: true

  promise.done store_data
  promise.fail method_failed

store_data = (resp) ->
  repo_list = []
  repo_list = resp
  update_html()
  return repo_list

update_html = () ->
  repo_list = repo_list
  num = Math.floor(Math.random() * repo_list.items.length) + 1
  current_repo = repo_list.items[num]

  html_string = "
  <div class='git-stats-container'>
    <h3><a href='#{current_repo.owner.html_url}'>#{current_repo.owner.login}</a> / <a href='#{current_repo.html_url}'>#{current_repo.name}</a></h3>
    <p class='h4'>#{current_repo.description}</p>
    <ul class='cf'>
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
