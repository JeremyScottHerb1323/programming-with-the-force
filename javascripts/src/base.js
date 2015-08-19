(function() {
  var get_starwars, method_failed, repo_list, store_data, update_html;

  $(function() {
    if (!$('.git-stats-container').length) {
      get_starwars();
    }
    $("#fullpage").fullpage();
    $('a[rel=external]').bind('click', function() {
      return this.target = "_blank";
    });
    $('.js-hide').hide();
    return $('a.get_repo').click(function(e) {
      update_html();
      return false;
    });
  });

  repo_list = [];

  get_starwars = function() {
    var promise;
    promise = $.ajax({
      url: "https://api.github.com/search/repositories?q=starwars",
      dataType: "json",
      async: true
    });
    promise.done(store_data);
    return promise.fail(method_failed);
  };

  store_data = function(resp) {
    repo_list = [];
    repo_list = resp;
    update_html();
    return repo_list;
  };

  update_html = function() {
    var current_repo, description, html_string, num, repo_date;
    repo_list = repo_list;
    num = Math.floor(Math.random() * repo_list.items.length) + 1;
    current_repo = repo_list.items[num];
    repo_date = current_repo.updated_at.substring(0, current_repo.updated_at.indexOf('T'));
    if (current_repo.description != null) {
      description = current_repo.description;
    } else {
      description = "A description is currently unavailable.";
      console.log(description);
    }
    html_string = "     <div class='git-stats-container section'>        <div class='userinfo cf'>          <a class='left one-quarter' href='" + current_repo.owner.html_url + "' target='_blank'>            <img src='/images/icons/strooper.png' alt='Repo User'>            <h4>" + current_repo.owner.login + "</h4>          </a>          <a class='left half repo-title' href='" + current_repo.html_url + "' target='_blank'>            <h3>" + current_repo.name + "</h3>          </a>          <a class='left one-quarter' href='' target='_blank'>            <img src='/images/icons/js-icon.png' alt=''>            <h4>JavaScript</h4>          </a>          </div>          <div class='git-stats-container'>            <ul class='cf'>              <li class='yoda with-icon-48'>Stars: " + current_repo.stargazers_count + "</li>              <li class='darth with-icon-48'>Forks: " + current_repo.forks_count + "</li>              <li class='chewie with-icon-48'>Watchers: " + current_repo.watchers + "</li>            </ul>            <div class='description-container lt-clear-bg'>              <div class='clearfix repo-head-container'>                <p class='stars one-third left h4'>Stars</p>                <h4 class='description one-third left'>Description</h4>                <p class='watchers one-third left h4'>Watchers</p>              </div>              <p class='h4 description'>" + description + "</p>              <div class='lt-clear-bg one-third left issues'>                <h5>Open Issues<br />" + current_repo.open_issues + "</h5>              </div>              <div class='lt-clear-bg one-third right updated-at'>                <h5>Updated At <br />" + repo_date + "</h5>              </div>              </div>            </div>   ";
    $('.repo-content').html(html_string);
    return false;
  };

  method_failed = function(other) {
    console.log(other);
    return console.log('epic fail');
  };

}).call(this);
