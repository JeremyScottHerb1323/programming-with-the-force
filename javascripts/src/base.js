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
    html_string = "  <h1><a href='" + current_repo.html_url + "' target='_blank'>" + current_repo.name + "</a></h1>  <ul>  <li>" + current_repo.created_at + "</li>  <li><a href='" + current_repo.clone_url + "' target='_blank'>Clone URL</a></li>  <li><a href='" + current_repo.git_url + "' target='_blank'>Git URL</a></li>  <li><a href='" + current_repo.html_url + "' target='_blank'>HTML URL</a></li>  </ul>  <div><p><li>" + current_repo.description + "</p></div>  ";
    $('.repo-content').html(html_string);
    return false;
  };

  method_failed = function(other) {
    console.log(other);
    return console.log('epic fail');
  };

}).call(this);
