<?php
  require_once $_SERVER['DOCUMENT_ROOT'] . "/includes/functions.php";
  render('header');
?>

  <div class="info-container cf full section">
    <div class="left text-box" data-easing="easeinout">
      <p class="t-heading">Are you a Star Wars fan?</p>
      <p>Are you a fan of the Star Wars franchise? Maybe you enjoy the darkside of things or prefer to be a rebel?</p>
    </div>
    <img class="half right animateme" data-when="enter" data-from="0.8" data-to="0.4" data-to="0" data-opacity="0.2"  src="/images/ui/vader.png" alt="Darth Vader Programmer">
  </div>

  <div class="info-container full cf section">
    <img class="half left animateme"  data-when="enter" data-from="0.8" data-to="0.4" data-to="0" data-opacity="0.2" src="/images/ui/r2.png" alt="Love to Programming">
    <div class="right text-box r2">
      <p class="t-heading">Love Programming?</p>
      <p>Do you enjoy programming? Perhaps you enjoy a little Ruby or perhaps some JavaScript?</p>
    </div>
  </div>


  <div class="info-container full cf section">
    <div class="text-box ta-center community">
      <h3 class="t-heading">Want be part of the programming community?</h3>
      <p class="theading">Wanna join a community of developers and collaborate on awesome open source projects?</p>
    </div>
    <img class="full animateme"  data-when="enter" data-from="0.8" data-to="0.4" data-to="0" data-opacity="0.2" src="/images/ui/storm_troopers.png" alt="Ewoks Program Too">
  </div>

  <?php render('repo-list'); ?>

<?php render('footer'); ?>