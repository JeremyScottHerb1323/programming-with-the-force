<?php
  require_once $_SERVER['DOCUMENT_ROOT'] . "/includes/functions.php";
  render('header');
?>
<div>
<ul class="ch-grid">
  <li>
    <div class="ch-item ch-img-1">
      <div class="ch-info">
        <h3>Use what you have</h3>
        <p>by Angela Duncan <a href="http://drbl.in/eOPF">View on Dribbble</a></p>
      </div>
    </div>
  </li>
  <li>
    <div class="ch-item ch-img-2">
      <div class="ch-info">
        <h3>Common Causes of Stains</h3>
        <p>by Antonio F. Mondragon <a href="http://drbl.in/eKMi">View on Dribbble</a></p>
      </div>
    </div>
  </li>
  <li>
    <div class="ch-item ch-img-3">
      <div class="ch-info">
        <h3>Pink Lightning</h3>
        <p>by Charlie Wagers <a href="http://drbl.in/ekhp">View on Dribbble</a></p>
      </div>
    </div>
  </li>
 </ul>
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
