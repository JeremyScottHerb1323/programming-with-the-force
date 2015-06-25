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
    var current_repo, html_string, num;
    repo_list = repo_list;
    num = Math.floor(Math.random() * repo_list.items.length) + 1;
    current_repo = repo_list.items[num];
    html_string = "     <div class='git-stats-container'>        <div class='userinfo cf'>          <a class='left one-quarter' href='" + current_repo.owner.html_url + "'>            <img src='/images/icons/strooper.png' alt='Repo User'>            <p>" + current_repo.owner.login + "</p>          </a>          <a class='left half repo-title' href='" + current_repo.html_url + "'>            <p>R" + current_repo.name + "</p>          </a>          <a class='left one-quarter' href=''>            <img src='/images/icons/js-icon.png' alt=''>            <p>JavaScript</p>          </a>          </div>          <div class='git-stats-container'>            <ul class='cf'>              <li class='yoda with-icon-48'>Stars: " + current_repo.stargazers_count + "</li>              <li class='darth with-icon-48'>Forks: " + current_repo.forks_count + "</li>              <li class='chewie with-icon-48'>Watchers: " + current_repo.watchers + "</li>            </ul>            <div class='description-container'>              <p class='h4'>" + current_repo.description + "</p>            </div>          </div>          </div>  ";
    $('.repo-content').html(html_string);
    return false;
  };

  method_failed = function(other) {
    console.log(other);
    return console.log('epic fail');
  };

}).call(this);
