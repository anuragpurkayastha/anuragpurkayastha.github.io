<!-- header -->
<?php include "header.inc";?>
<!-- end header -->

    <!-- WELCOME SECTION -->
    <div class="welcome-section d-flex flex-column justify-content-center">
        <h1 id="welcomeSectionHeader">Hi, my name is Anurag!</h1>

		<div class= "d-flex flex-column justify-content-center align-items-center">
			<div class="box">
				<h2 id="about-me">About Me</h2>
				<p>I am a university student currently studying IT. This website was made as a personal hobby to learn about web design and development.</p>
				<p>On this page you will find some <a href="#projects">projects</a>  that I am currently working on using tutorials I found on the web.</p>
				<p>TESTING: The current working directory is:</p>
			</div>
		</div>
    </div>

    <!--PROJECTS SECTION -->
    <div class="projects" id="projects">
        <h1 class="pt-5">Projects</h1>

        <p class="section-description-text">These are some of the projects I have been working on.</p>


        <!-- PROJECT TILES -->
		<div class="projects-container">
            <!--Tribute Page -->
			<div class="card">
				<img class="card-img-top" src="https://c2.staticflickr.com/4/3689/10613180113_fdf7bcd316_b.jpg" alt="Tribute Page">
                <div class="card-body">
                    <h4 class="card-title text-left">Tribute Page</h4>
                    <p class="card-text text-left">This tribute page was an exercise in some basic CSS and HTML. The page is about a Dr Norman Borlaug. The page idea was acquired from <a href="https://www.freecodecamp.org" target="_blank">www.freecodecamp.org</a>.</p>
                </div>
				<a class = "btn btn-primary" href="./project1_tributepage.html">Click here to learn more about Dr Borlaug!</a>
			</div>

      		<!--Survey Form -->
      		<div class="card text-left">
                <img src="./img/Survey_image.png" alt="Survey form image" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Survey Form</h4>
		            <p class="card-text">This is a short survey which is an exercise in using forms in HTML and CSS. Note, nothing happens if you click on "Submit". The page idea was acquired from <a href="https://www.freecodecamp.org" target="_blank">www.freecodecamp.org</a>.</p>
                </div>
      			<a class="btn btn-primary" href="./project2_surveyform.html">Click here to take a (template) survey!</a>
      		</div>

      		<!--Project 3 - Javascript Game: Guess The Colour-->
      		<div class="card text-left">
                <img src="./img/guessTheColourImage_homepage.jpg" alt="Guess The Colour game page" class="card-img-top">
                <div class="card-body">
          			<h4 class="card-title">Guess the Colour Game</h4>

          			<p class="card-text">This is a simple game programmed in Javascript. It is an exercise in basic Javascript commands. The idea for this game was taken from <a href="https://projects.raspberrypi.org/en/projects/cd-beginner-javascript-sushi" target="_blank">Raspberry Pi Website</a>.</p>
                </div>
                <a class="btn btn-primary" href="#">Click here to go to the game!</a>
            </div>

    		<!-- Javascript Drumkit-->
      		<div class="card">
                <img src="./img/drumkit.jpg" alt="Image of drumkit" class="card-img-top">

                <div class="card-body text-left">
                    <h4 class="card-title">Javascript Drumkit</h3>

      			    <p class="card-text">A short program which plays some drum sounds according to keys being pressed. This idea was taken from <a href="https://javascript30.com/" target="_blank">https://javascript30.com/</a>.</p>
                </div>
      			<a class = "btn btn-primary" href="./Javascript-Drumkit.html">Click here to play some cool drum sounds!</a>
      		</div>

    		<!--Javascript clock -->
    		<div id="javascript-clock" class = "card text-left">
                <div class="clock">
    				<div class="clock-face">
    					<div class="hand hour-hand"></div>
    					<div class="hand min-hand"></div>
    					<div class="hand second-hand"></div>
                        <div class="center-circle"></div>
    				</div>
    		    </div>

                <div class="card-body">
    			    <h4 class="card-title">Javascript Clock</h4>

    			    <p class="card-text">This is a clock programmed with Javascript. It changes the hands according to the current time. Taken from <a href="https://javascript30.com/" target="_blank">https://javascript30.com/</a>.</p>
                </div>
    		</div>

			<!--Javascript Calculator -->
    		<div class = "card text-left">
                <img src="./img/calculator.png" alt="Image of calculator" class="card-img-top">

                <div class="card-body">
    			    <h4 class="card-title">Javascript Calculator</h4>

    			    <p class="card-text">This is a Javascript Calculator that I started as a personal idea. It is still very much a work in progress!</p>
				</div>
				<a class="btn btn-primary" href="./JavascriptCalculator.html">Click here to go to the calculator!</a>
    		</div>
        </div>
    </div>

	<script src="js/JavascriptClock.js"></script>
		
  </body>
</html>
