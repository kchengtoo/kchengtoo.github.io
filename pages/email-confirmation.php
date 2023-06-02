<?php
	$isSent = false;

	function honeypot_validate($req) {
		if (!empty($req)) {
			$honeypot_fields = [
				"name",
				"email"
			];
			foreach ($honeypot_fields as $field) {
				if (isset($req[$field]) && !empty($req[$field])) {
					return false;
				}
			}
		}
		return true;
	}

	if (!isset($_POST['namehiakcn']) || empty($_POST['namehiakcn']) || !isset($_POST['emailhiakcn']) || empty($_POST['emailhiakcn']) || !isset($_POST['subject']) || empty($_POST['subject']) || !isset($_POST['message']) || empty($_POST['message'])) {
		$error = "Your email was not received. Please go back to the form and fill out all fields.";
	}
	else {
		if (honeypot_validate($_REQUEST)) {
			// The honeypot fields are clean, go on
			$to = "kchengtoo@gmail.com";
			$subject = $_POST['subject'];
			$message = $_POST['message'];
			$header = "Content-Type: text/html" . "\r\n" . "From:" . $_POST['namehiakcn'] . " <" . $_POST['emailhiakcn'] . ">";

			if (mail($to, $subject, $message, $header)) {
				$isSent = true;
			}
			else {
				$error = "There was a problem sending email";
			}
		}
		else {
			// A spammer filled a honeypot field
			
			// $error = "Spam detected, your email is not sent";
			// $message = "This is a spam email";
			// if (mail($to, $subject, $message)) {
			// 	$isSent = true;
			// }
			// else {
			// 	$error = "There was a problem sending email";
			// }
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
	<!-- :+++++++++++++++++++:          ./+++//::-.        
		++++++++++++++++++++-        ./++++++++++++/:.    
		++++++++++++++++++:`       ./++++++++++++++++++:. 
		++++++++++++++++:`       -/++++++++++++++++++++++/
		++++++++++++++-`       -++++++++++++++++++++++++/.
		++++++++++++-`       -++++++++++++++++++++++++/.  
		++++++++++-        -++++++++/:--..--:/++++++/.    
		++++++++-        -+++++++:`            .:/:.      
		++++++-        -+++++++-                          
		++++-        -+++++++/`                           
		 ..        -+++++++++`                            
		         -++++++++++:                             
		        /+++++++++++-                             
		         -++++++++++:                             
		           -+++++++++`                            
		`://-        -+++++++/`                           
		++++++-        -+++++++-                          
		++++++++-        -+++++++:`            .:/:.      
		++++++++++-        -++++++++/:--..--:/++++++/.    
		++++++++++++-`       -++++++++++++++++++++++++/.  
		++++++++++++++:`       -++++++++++++++++++++++++/.
		++++++++++++++++:`       ./++++++++++++++++++++++/
		++++++++++++++++++:`       ./++++++++++++++++++:. 
		++++++++++++++++++++:        ./++++++++++++/:.    
		:+++++++++++++++++++:          ./+++//::-.        -->
	<title>Kevin Cheng - Email Confirmation</title>
	<link rel='shortcut icon' href='../img/favicon.ico' type='image/x-icon'/>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../css/stylesheet-navbar.css">
	<link rel="stylesheet" type="text/css" href="../css/stylesheet-contact.css">
	<link rel="stylesheet" type="text/css" href="../css/stylesheet-social-media-footer.css">
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-ML3S5QSBCR"></script>
	<script src="../js/google-analytics.js"></script>
</head>
<body>
	<div id="header-div">
	</div>
	<div id="first-row" class="page-front">
		<div class="container">
			<div class="row">
				<h1 id="contact-title" class="col col-12 bold text-center">Email Confirmation</h1>
			</div>
			<div class="row row-center">
				<?php if ((isset($isSent) && !empty($isSent))) : ?>
					<img class="confirmation-img" src="../img/confirmation-success.svg">
				<?php else : ?>
					<img class="confirmation-img" src="../img/confirmation-failure.svg">
				<?php endif; ?>
			</div>
		</div>
		<div class="container">
			<div class="row mt-4">
				<div class="col col-0 col-lg-2"></div>
				<div id="message-col" class="col col-12 col-lg-8">
					<?php if ((isset($error) && !empty($error))) : ?>
						<div class="alert alert-danger"  role="alert"><?php echo $error; ?></div>
					<?php else : ?>
						<?php if ($isSent) : ?>
							<div class="alert alert-success" role="alert">Thank you! Your message has been received! I will get back to you as soon as possible.</div>
						<?php else : ?>
							<div class="alert alert-warning" role="alert"><?php echo $error; ?></div>
						<?php endif; ?>
					<?php endif; ?>
				</div>
				<div class="col col-0 col-lg-2"></div>
			</div>
			<div class="row">
				<div class="col-12 mt-3 text-center">
					<?php if ($isSent) : ?>
						<a href="../index" role="button" class="btn btn-success">Take me back home</a>
					<?php else : ?>
						<button id="go-back-btn" class="btn btn-danger">Go back</button>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
	<!-- <div id="page-container" class="container">
		<hr>
		<div class="row social-media-row-space">
			<div id="social-media" class="col-12">
				<p>Let's connect!</p>
				<p id="social-media-message">Get in touch for opportunities or just to say hi!</p>
				<div id="social-media-logo">
					<div class="social-media-icon">
						<a href="https://www.linkedin.com/in/kevin-cheng-a2b767158"><img class="social-media-link" src="../img/linkedin-logo.svg"></a>
					</div>

					<div class="social-media-icon">
						<a href="https://www.instagram.com/k.cheng_design/"><img class="social-media-link" src="../img/instagram-logo.svg"></a>
					</div>

					<div class="social-media-icon">
						<a href="https://dribbble.com/kevin0520"><img class="social-media-link" src="../img/dribbble-logo.svg"></a>
					</div>
				</div>
			</div>
		</div>
		<div class="row copyright-row">
			<h3 id="copyright-tag" class="display-10">Hand-coded by Kevin Cheng | Copyright © 2020.</h2>
		</div>
	</div> -->

	<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

	<script src="../js/load-page-components.js"></script>
	<script src="../js/navbar.js"></script>
	<script>
		// goBackButton = document.querySelector("#go-back-btn");
		$("#go-back-btn").click(function() {
			window.history.back();
		});
	</script>
</body>
</html>