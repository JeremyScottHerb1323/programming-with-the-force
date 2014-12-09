<?php
  require_once $_SERVER['DOCUMENT_ROOT'] . "/includes/functions.php";
  render('header');
?>
<div class="intro-container full">
  <div class="intro cf right">
    <h3>Are you a Star Wars fan?</h3>
    <p>Are you a fan of the Star Wars franchise? Maybe you enjoy the darkside of things or prefer to be a rebel?</p>
    <img class="left" src="/images/ui/vader.jpg" alt="">
  </div>
  <div class="intro">
    <h3>Love Programming?</h3>
    <p>Do you enjoy programming? Perhaps you enjoy a little Ruby or perhaps some JavaScript?</p>
  </div>
  <div class="intro">
    <h3>Wanna be part of the programming community?</h3>
    <p>Wanna join a community of developers and collaborate on awesome open source projects?</p>
  </div>
</div>

   <div class="full cf">
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
      </div>
 <?php render('tie-fight'); ?>

<?php render('footer'); ?>
