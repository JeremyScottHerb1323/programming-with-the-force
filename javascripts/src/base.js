(function() {
  var get_starwars, method_failed, repo_list, store_data, update_html;

  $(function() {
    if (!$('.git-stats-container').length) {
      get_starwars();
    }
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
    html_string = "  <div class='git-stats-container'>    <h3><a href='" + current_repo.owner.html_url + "'>" + current_repo.owner.login + "</a> / <a href='" + current_repo.html_url + "'>" + current_repo.name + "</a></h3>    <p class='h4'>" + current_repo.description + "</p>    <ul class='cf'>      <li class='yoda with-icon-48'>Stars: " + current_repo.stargazers_count + "</li>      <li class='darth with-icon-48'>Forks: " + current_repo.forks_count + "</li>      <li class='chewie with-icon-48'>Watchers: " + current_repo.watchers + "</li>    </ul>  </div>  ";
    $('.repo-content').html(html_string);
    return false;
  };

  method_failed = function(other) {
    console.log(other);
    return console.log('epic fail');
  };

}).call(this);
