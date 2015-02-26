$ ->

  $('a[rel=external]').bind 'click', () -> this.target = "_blank"

  # look for .hide class and set display: none
  $('.js-hide').hide()
 
  $('a.get_repo').click (e) ->
    get_starwars()
    false

  # handle's $.ajax post from contact form
  #
  # sends POST hash to url designated in
  #   'action' attribute of the form
  # $('form#contact-form').submit (e) ->
  #   $.ajax
  #     url: $(e.target).attr('action')
  #     type: "POST"
  #     dataType: "json"
  #     data: $(e.target).serialize()
  #     success: (response) ->
  #       if response
  #         $(e.target).prepend "<p>Post successful and no validation errors</p>"
  #         console.log response
  #       else
  #         $(e.target).prepend "<p>Please enter all fields</p>"
  #     error: (err, response) ->
  #       console.log "An error occurred while posting."
  #       console.log err
  #       console.log response

  #   false


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
    <h1><a href='#{current_repo.html_url}' target='_blank'>#{current_repo.name}</a></h1>
    <ul>
    <li>#{current_repo.created_at}</li>
    <li><a href='#{current_repo.clone_url}' target='_blank'>Clone URL</a></li>
    <li><a href='#{current_repo.git_url}' target='_blank'>Git URL</a></li>
    <li><a href='#{current_repo.html_url}' target='_blank'>HTML URL</a></li>
    </ul>
    <div><p><li>#{current_repo.description}</p></div>
  "
  $('.repo-content').html html_string
  false


method_failed = (other) ->
  console.log other
  console.log 'epic fail'