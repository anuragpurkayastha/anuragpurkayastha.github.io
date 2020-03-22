<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>Home</title>
	</head>
	
	<body>

		<!-- Navigation Menu -->
		<nav class = "d-flex navbar navbar-expand-sm bg-light navbar-light sticky-top">
			<ul id="#navigationMenu" class="navbar-nav">
				<li class = "nav-item">
					<a class="nav-link <?php echo ($pagename == 'home') ? 'active' : ''; ?>" href="index.html">Home</a>
				</li>
				<li class = "nav-item dropdown">
					<a class="nav-link dropdown-toggle mr-auto" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
					<div class="dropdown-menu">
						<a class="dropdown-item text-decoration-none <?php echo ($pagename == 'tribute_page') ? 'active' : ''; ?>" href="project1_tributepage.html">Tribute Page</a>
						<a class="dropdown-item text-decoration-none <?php echo ($pagename == 'survey_form') ? 'active' : ''; ?>" href="project2_surveyform.html">Survey Form</a>
						<a class="dropdown-item text-decoration-none" href="GuessTheColourGame.html">Guess The Colour Game</a>
						<a class="dropdown-item text-decoration-none" href="Javascript-Drumkit.html">Javascript Drumkit</a>
						<a class="dropdown-item text-decoration-none" href="#javascript-clock">Javascript Clock</a>
						<a class="dropdown-item text-decoration-none" href="JavascriptCalculator.html">Javascript Calculator</a>
					</div>
				</li>
			</ul>
		</nav>
