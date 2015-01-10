<?php
  require_once $_SERVER['DOCUMENT_ROOT'] . "/includes/functions.php";
  render('header');
?>
  <div class="intro cf full">
    <div class="left text-box">
      <p class="t-heading">Are you a Star Wars fan?</p>
      <p>Are you a fan of the Star Wars franchise? Maybe you enjoy the darkside of things or prefer to be a rebel?</p>
    </div>
    <img class="half right" src="/images/ui/vader.png" alt="Darth Vader Programmer">
  </div>

  <div class="intro full cf">
    <img class="half left" src="/images/ui/r2.png" alt="Love to Programming">
    <div class="right text-box">
      <p class="t-heading">Love Programming?</p>
      <p>Do you enjoy programming? Perhaps you enjoy a little Ruby or perhaps some JavaScript?</p>
    </div>
  </div>

  
  <div class="intro full cf">
    <div class="text-box ta-center community">
    <h3 class="t-heading">Want be part of the programming community?</h3>
    <p class="theading">Wanna join a community of developers and collaborate on awesome open source projects?</p>
    </div>
    <img class="full" src="/images/ui/storm_troopers.png" alt="Ewoks Program Too">
  </div>

  <?php render('repo-list'); ?>
  
<?php render('footer'); ?>