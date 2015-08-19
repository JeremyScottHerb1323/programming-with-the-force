$ ->
  # On load update html with git-repo otherwise do nothing.
  get_starwars() unless $('.git-stats-container').length

  #initiale full page scroller
  $("#fullpage").fullpage()



  $('a[rel=external]').bind 'click', () -> this.target = "_blank"

  # look for .hide class and set display: none
  $('.js-hide').hide()

  # Update html with git-repo on click
  $('a.get_repo').click (e) ->
    update_html()
    false



# #Github Related Script
# # Ajax Call
repo_list = []
get_starwars = () ->
  # using promis call github and when complete successfully call store_data else method_failed
  promise = $.ajax
    url: "https://api.github.com/search/repositories?q=starwars"
    dataType: "json"
    async: true

  promise.done store_data
  promise.fail method_failed

# Using resp from github call initialize and fill the array repo_list with said content.
# Once filled call update_html and return repo_list
store_data = (resp) ->
  repo_list = []
  repo_list = resp
  update_html()
  return repo_list

# Using repo_list get random repo assign repo to current_repo and replace what is in static HTML with new data and return false
update_html = () ->
  repo_list = repo_list
  num = Math.floor(Math.random() * repo_list.items.length) + 1
  current_repo = repo_list.items[num]
  repo_date = current_repo.updated_at.substring(0, current_repo.updated_at.indexOf('T'))
  if current_repo.description?
    description = current_repo.description
  else
    description = "A description is currently unavailable."
    console.log description

  html_string = "
     <div class='git-stats-container section'>
        <div class='userinfo cf'>
          <a class='left one-quarter' href='#{current_repo.owner.html_url}' target='_blank'>
            <img src='/images/icons/strooper.png' alt='Repo User'>
            <h4>#{current_repo.owner.login}</h4>
          </a>
          <a class='left half repo-title' href='#{current_repo.html_url}' target='_blank'>
            <h3>#{current_repo.name}</h3>
          </a>
          <a class='left one-quarter' href='' target='_blank'>
            <img src='/images/icons/js-icon.png' alt=''>
            <h4>JavaScript</h4>
          </a>
          </div>
          <div class='git-stats-container'>
            <ul class='cf'>
              <li class='yoda with-icon-48'>Stars: #{current_repo.stargazers_count}</li>
              <li class='darth with-icon-48'>Forks: #{current_repo.forks_count}</li>
              <li class='chewie with-icon-48'>Watchers: #{current_repo.watchers}</li>
            </ul>
            <div class='description-container lt-clear-bg'>
              <div class='clearfix repo-head-container'>
                <p class='stars one-third left h4'>Stars</p>
                <h4 class='description one-third left'>Description</h4>
                <p class='watchers one-third left h4'>Watchers</p>
              </div>
              <p class='h4 description'>#{description}</p>
              <div class='lt-clear-bg one-third left issues'>
                <h5>Open Issues<br />#{current_repo.open_issues}</h5>
              </div>
              <div class='lt-clear-bg one-third right updated-at'>
                <h5>Updated At <br />#{repo_date}</h5>
              </div>
              </div>
            </div> 
  "
  $('.repo-content').html html_string
  false

method_failed = (other) ->
  console.log other
  console.log 'epic fail'