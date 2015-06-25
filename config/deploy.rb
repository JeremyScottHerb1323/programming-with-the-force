set :stages, %w(production)
set :default_stage, "staging"
require 'capistrano/ext/multistage'

set :application, "programming-with-the-force"
set :scm, :git
set :repository, "https://github.com/JeremyScottHerb1323/programming-with-the-force.git/master"
set :scm_username, "JeremyScottHerb1323"
set :scm_passphrase, "Jearbear13"

# set :deploy_via, :remote_cache
set :copy_strategy, :checkout
set :keep_releases, 3
set :use_sudo, false
set :copy_compression, :bz2

# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "http://programmingwithttheforce.com"                          # Your HTTP server, Apache/etc

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

after "deploy:update", "deploy:cleanup"
after "deploy", "deploy:create_symlinks"

namespace :deploy do

  desc "This is here to overide the original :restart"
  task :restart, :roles => :app do
    # do nothing but overide the default
  end

  task :finalize_update, :roles => :app do
    run "chmod -R g+w #{latest_release}" if fetch(:group_writable, true)
    run "chown -R #{owner}:#{group2} #{releases_path}/#{release_name}"
    # overide the rest of the default method
  end
end