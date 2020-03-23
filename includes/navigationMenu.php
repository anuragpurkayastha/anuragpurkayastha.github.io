<?php
	$pages = array('tribute_page', 'survey_form', 'guess_the_colour', 'js_drumkit');
?>

<nav class = "d-flex navbar navbar-expand-sm bg-light navbar-light sticky-top">
	<ul id="#navigationMenu" class="navbar-nav">
		<li class = "nav-item">
			<a class="nav-link <?php echo ($pagename == 'home') ? 'active' : ''; ?>" href="index.html">Home</a>
		</li>
		<li class = "nav-item dropdown">
			<a class="nav-link dropdown-toggle mr-auto <?php echo in_array($pagename, $pages) ? 'active' : ''; ?>" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
			<div class="dropdown-menu">
				<a class="dropdown-item text-decoration-none <?php echo ($pagename == 'tribute_page') ? 'active' : ''; ?>" href="project1_tributepage.html">Tribute Page</a>
				<a class="dropdown-item text-decoration-none <?php echo ($pagename == 'survey_form') ? 'active' : ''; ?>" href="project2_surveyform.html">Survey Form</a>
				<a class="dropdown-item text-decoration-none <?php echo ($pagename == 'guess_the_colour') ? 'active' : ''; ?>" href="GuessTheColourGame.html">Guess The Colour Game</a>
				<a class="dropdown-item text-decoration-none <?php echo ($pagename == 'js_drumkit') ? 'active' : ''; ?>" href="Javascript-Drumkit.html">Javascript Drumkit</a>
				<a class="dropdown-item text-decoration-none" href="#javascript-clock">Javascript Clock</a>
				<a class="dropdown-item text-decoration-none <?php echo ($pagename == 'js_calculator') ? 'active' : ''; ?>" href="JavascriptCalculator.html">Javascript Calculator</a>
			</div>
		</li>
	</ul>
</nav>