<?php
  require_once $_SERVER['DOCUMENT_ROOT'] . "/includes/functions.php";
  render('header');
?>
  <div class="intro cf full">
    <div class="left text-box">
      <p class="t-heading">Are you a Star Wars fan?</p>
      <p>Are you a fan of the Star Wars franchise? Maybe you enjoy the darkside of things or prefer to be a rebel?</p>
    </div>
    <img class="half right" src="/images/ui/vader.png" alt="">
  </div>

  <div class="intro full">
    <img class="half left" src="/images/ui/r2.png" alt="Love Programming">
    <div class="right text-box">
      <p class="t-heading">Love Programming?</p>
      <p>Do you enjoy programming? Perhaps you enjoy a little Ruby or perhaps some JavaScript?</p>
    </div>
  </div>
  
<!--   <div class="intro full">
    <h3>Wanna be part of the programming community?</h3>
    <p>Wanna join a community of developers and collaborate on awesome open source projects?</p>
  </div> -->
   <!-- <div class="full cf">
    <div id="ribbon" class="left one-quarter rebel cf">
      <div class="inset"></div>
      <div class="container">
        <div class="base"></div>
        <div class="left_corner"></div>
        <div class="right_corner"></div>
      </div>
    </div>
      <div id="ribbon" class="right one-quarter empire cf">
      <div class="inset"></div>
      <div class="container">
        <div class="base"><img src="/images/icons/empire-150.png" alt="Empire"></div>
        <div class="left_corner"></div>
        <div class="right_corner"></div>
      </div>
    </div>
      </div> -->
 <!-- <?php render('tie-fight'); ?> -->

<?php render('footer'); ?>
