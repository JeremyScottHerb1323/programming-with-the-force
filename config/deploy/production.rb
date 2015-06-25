set :deploy_to, "/var/www/vhosts/capitolsupport.net/"
set :document_root, "/var/www/vhosts/capitolsupport.net/httpdocs"
set :owner, "capitolcs-master"
set :group1, "psacln"
set :group2, "psacln"


set :public_folder, "httpdocs"

set :user, "capitolcs-master"
default_run_options[:pty] = true

role :app, "capitolsupport.net"
role :web, "capitolsupport.net", :primary => true