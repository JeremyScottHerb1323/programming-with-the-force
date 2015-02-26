(function() {
  var method_failed, update_html;

  $(function() {
    var get_starwars, repo_list;
    $('a[rel=external]').bind('click', function() {
      return this.target = "_blank";
    });
    $('.js-hide').hide();
    $('a.get_repo').click(function(e) {
      get_starwars();
      return false;
    });
    repo_list = [];
    return get_starwars = function() {
      var promise;
      promise = $.ajax({
        url: "https://api.github.com/search/repositories?q=starwars",
        dataType: "json"
      });
      promise.done(update_html);
      return promise.fail(method_failed);
    };
  });

  update_html = function(resp) {
    var current_repo, html_string, num, repo_list;
    repo_list = resp;
    num = Math.floor(Math.random() * repo_list.items.length) + 1;
    current_repo = repo_list.items[num];
    console.log(current_repo);
    html_string = "  <div class='git-stats-container'>    <h3><a href='" + current_repo.owner.html_url + "'>" + current_repo.owner.login + "</a> / <a href='" + current_repo.html_url + "'>" + current_repo.name + "</a></h3>    <p class='h4'>" + current_repo.description + "</p>    <ul class='clearfix'>      <li class='yoda with-icon-48'>Stars: " + current_repo.stargazers_count + "</li>      <li class='darth with-icon-48'>Forks: " + current_repo.forks_count + "</li>      <li class='chewie with-icon-48'>Watchers: " + current_repo.watchers + "</li>    </ul>  </div>  ";
    $('.repo-content').html(html_string);
    return false;
  };

  method_failed = function(other) {
    console.log(other);
    return console.log('epic fail');
  };

}).call(this);
